import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const data = await request.json();

        // 1. Configure the Transporter (Your Email Server)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 2. Prepare the Email Content
        let subject = 'New Website Inquiry';
        let textContent = '';
        let htmlContent = '';

        if (data.type === 'booking') {
            subject = `Booking Request: ${data.house}`;
            textContent = `Name: ${data.name}\nDates: ${data.arrival} - ${data.departure}\nGuests: ${data.adults}, ${data.children}\nEmail: ${data.email}`;
            htmlContent = `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #005777;">New Booking Request</h2>
          <p><strong>Property:</strong> ${data.house}</p>
          <hr />
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Dates:</strong> ${data.arrival} to ${data.departure}</p>
          <p><strong>Guests:</strong> ${data.adults}, ${data.children}</p>
          <div style="background: #f9f9f9; padding: 15px; margin-top: 10px;">
            <strong>Special Requests:</strong><br/>
            ${data.requests || 'None'}
          </div>
        </div>
      `;
        } else {
            // General Contact
            subject = `New Message from ${data.name}`;
            textContent = `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;
            htmlContent = `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #005777;">New Contact Message</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <div style="background: #f9f9f9; padding: 15px; margin-top: 10px;">
            <strong>Message:</strong><br/>
            ${data.message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `;
        }

        // 3. Send the Email
        await transporter.sendMail({
            from: `"Website Bot" <${process.env.SMTP_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: data.email, // Allows you to just click "Reply"
            subject: subject,
            text: textContent,
            html: htmlContent,
        });

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error('Email Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }
}