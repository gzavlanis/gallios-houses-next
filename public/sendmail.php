<?php
header('Content-Type: application/json');

// 1. Get the JSON data sent from the React Frontend
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'No data received']);
    exit;
}

// 2. Configuration
$to = 'info@gallioshouses.gr'; // Your actual email
$subject = 'Website Notification';
$headers = "From: Website Bot <noreply@gallioshouses.gr>\r\n";
$headers .= "Reply-To: " . $data['email'] . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// 3. Build the Email Body
$message = "<html><body>";
$message .= "<h2>New Request from Website</h2>";

if ($data['type'] === 'booking') {
    $subject = 'New Booking Request: ' . $data['house'];
    $message .= "<p><strong>House:</strong> " . htmlspecialchars($data['house']) . "</p>";
    $message .= "<p><strong>Guest:</strong> " . htmlspecialchars($data['name']) . "</p>";
    $message .= "<p><strong>Email:</strong> " . htmlspecialchars($data['email']) . "</p>";
    $message .= "<p><strong>Dates:</strong> " . htmlspecialchars($data['arrival']) . " to " . htmlspecialchars($data['departure']) . "</p>";
    $message .= "<p><strong>Guests:</strong> " . htmlspecialchars($data['adults']) . " Adults, " . htmlspecialchars($data['children']) . " Children</p>";
    $message .= "<p><strong>Requests:</strong><br>" . nl2br(htmlspecialchars($data['requests'])) . "</p>";
} else {
    $subject = 'New Contact Message';
    $message .= "<p><strong>Name:</strong> " . htmlspecialchars($data['name']) . "</p>";
    $message .= "<p><strong>Email:</strong> " . htmlspecialchars($data['email']) . "</p>";
    $message .= "<p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($data['message'])) . "</p>";
}

$message .= "</body></html>";

// 4. Send the Email
if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail function failed']);
}
?>