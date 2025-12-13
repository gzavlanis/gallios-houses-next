'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ImageSlider() {
    const images = [
        "/assets/images/custom-resized-8ee1bbd9-cb81-4d96-bb8b-667cebe9b905-1500x1000.jpg",
        "/assets/images/loutra-resort-b2-32-2000x1335.jpeg",
        "/assets/images/custom-resized-963d002d-83aa-4080-9896-e4e3455342b3-1500x1001.jpeg",
        "/assets/images/loutra-resort-b2-331-2000x1333.jpeg"
    ];

    return (
        <section className="slider2 cid-tYxCQP4cN3" id="slider2-e">
            <div className="container-fluid content-slider">
                <div className="content-slider-wrap">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        loop={true}
                        style={{ height: '600px' }} // You can adjust this height
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundImage: `url(${img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}