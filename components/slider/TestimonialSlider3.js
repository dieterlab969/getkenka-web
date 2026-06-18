'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider3() {
    return (
        <>
            <Swiper {...swiperOptions} className="swiper-container" id="testimonials-one__thumb">
                <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                    <div className="testimonials-one__thumb-single ml0">
                        <div className="testimonials-one__thumb-img">
                            <div className="inner">
                                <img src="assets/img/testimonial/testimonials-v1-img1.jpg" alt=""/>
                            </div>
                        </div>

                        <div className="testimonials-one__thumb-single-text">
                            <h2>Annete Black</h2>
                            <p>Engineer</p>
                        </div>
                    </div>
                </SwiperSlide>{/*/.swiper-slide */}

                <SwiperSlide className="swiper-slide">
                    <div className="testimonials-one__thumb-single">
                        <div className="testimonials-one__thumb-img">
                            <div className="inner">
                                <img src="assets/img/testimonial/testimonials-v1-img2.jpg" alt=""/>
                            </div>
                        </div>

                        <div className="testimonials-one__thumb-single-text">
                            <h2>Robert Hazelhood</h2>
                            <p>CEO & Co Founder</p>
                        </div>
                    </div>
                </SwiperSlide>{/*/.swiper-slide */}

                <SwiperSlide className="swiper-slide">
                    <div className="testimonials-one__thumb-single">
                        <div className="testimonials-one__thumb-img">
                            <div className="inner">
                                <img src="assets/img/testimonial/testimonials-v1-img3.jpg" alt=""/>
                            </div>
                        </div>

                        <div className="testimonials-one__thumb-single-text">
                            <h2>Anannya Islam</h2>
                            <p>Designer</p>
                        </div>
                    </div>
                </SwiperSlide>{/*/.swiper-slide */}
                </div>
            
        </Swiper>
            
        </>
    )
}
