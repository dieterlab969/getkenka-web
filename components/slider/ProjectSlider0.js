'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
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
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}
export default function ProjectSlider0() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/img/project/project-v2-img1.jpg" alt="#" />
                            <div className="overlay-content">
                                <p>San Fransisco</p>
                                <h2><a href="#">Hotel Joshna Villa</a></h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div>
                                <img src="assets/img/project/project-v2-img2.jpg" alt="#" />
                                <div className="overlay-content">
                                    <p>San Fransisco</p>
                                    <h2><a href="#">Hotel Joshna Villa</a></h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/img/project/project-v2-img3.jpg" alt="#" />
                            <div className="overlay-content">
                                <p>San Fransisco</p>
                                <h2><a href="#">Hotel Joshna Villa</a></h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/img/project/project-v2-img1.jpg" alt="#" />
                            <div className="overlay-content">
                                <p>San Fransisco</p>
                                <h2><a href="#">Hotel Joshna Villa</a></h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/img/project/project-v2-img2.jpg" alt="#" />
                            <div className="overlay-content">
                                <p>San Fransisco</p>
                                <h2><a href="#">Hotel Joshna Villa</a></h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/img/project/project-v2-img3.jpg" alt="#" />
                            <div className="overlay-content">
                                <p>San Fransisco</p>
                                <h2><a href="#">Hotel Joshna Villa</a></h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="assets/img/project/project-v2-img3.jpg" alt="#" />
                            <div className="overlay-content">
                                <p>San Fransisco</p>
                                <h2><a href="#">Hotel Joshna Villa</a></h2>
                            </div>
                        </SwiperSlide>
            </Swiper>

        </>
    )
}
