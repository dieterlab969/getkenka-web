'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
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
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
}

export default function BrandSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                <SwiperSlide className="swiper-slide">
                    <div className="img-box">
                        <img src="assets/img/brand/brand-v1-img1.png" alt="#"/>
                    </div>

                    <div className="img-box2">
                        <img src="assets/img/brand/brand-v1-img1.png" alt="#"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="img-box">
                        <img src="assets/img/brand/brand-v1-img2.png" alt="#"/>
                    </div>

                    <div className="img-box2">
                        <img src="assets/img/brand/brand-v1-img2.png" alt="#"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="img-box">
                        <img src="assets/img/brand/brand-v1-img3.png" alt="#"/>
                    </div>

                    <div className="img-box2">
                        <img src="assets/img/brand/brand-v1-img3.png" alt="#"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="img-box">
                        <img src="assets/img/brand/brand-v1-img4.png" alt="#"/>
                    </div>

                    <div className="img-box2">
                        <img src="assets/img/brand/brand-v1-img4.png" alt="#"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="img-box">
                        <img src="assets/img/brand/brand-v1-img5.png" alt="#"/>
                    </div>

                    <div className="img-box2">
                        <img src="assets/img/brand/brand-v1-img5.png" alt="#"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="img-box">
                        <img src="assets/img/brand/brand-v1-img1.png" alt="#"/>
                    </div>

                    <div className="img-box2">
                        <img src="assets/img/brand/brand-v1-img1.png" alt="#"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="img-box">
                        <img src="assets/img/brand/brand-v1-img2.png" alt="#"/>
                    </div>

                    <div className="img-box2">
                        <img src="assets/img/brand/brand-v1-img2.png" alt="#"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="img-box">
                        <img src="assets/img/brand/brand-v1-img3.png" alt="#"/>
                    </div>

                    <div className="img-box2">
                        <img src="assets/img/brand/brand-v1-img3.png" alt="#"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="img-box">
                        <img src="assets/img/brand/brand-v1-img4.png" alt="#"/>
                    </div>

                    <div className="img-box2">
                        <img src="assets/img/brand/brand-v1-img4.png" alt="#"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    <div className="img-box">
                        <img src="assets/img/brand/brand-v1-img5.png" alt="#"/>
                    </div>

                    <div className="img-box2">
                        <img src="assets/img/brand/brand-v1-img5.png" alt="#"/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
