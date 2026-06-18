'use client'
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
import React from 'react';
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
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



}

export default function Banner() {
    const [isOpen, setOpen] = useState(false)
  return (
    <>
    
    <section className="main-slider main-slider-one">
      <Swiper {...swiperOptions} className="banner-carousel owl-theme owl-carousel owl-nav-none owl-dots-none">                    
        <SwiperSlide className="swiper-slide">
          <div className="image-layer" style={{backgroundImage: 'url(assets/img/slider/slider-v1-img1.jpg)'}}>
            </div>
            <div className="shape1"><img src="assets/img/shape/slider-v1-shape1.png" alt=""/></div>
            <div className="container">
                <div className="main-slider-one__single">
                    <div className="main-slider-one__content">
                        <div className="shape2 float-bob-x"><img src="assets/img/shape/slider-v1-shape2.png"
                                alt=""/></div>
                        <h3>Creative</h3>
                        <h2>Architecture</h2>
                        <div className="btn-box">
                            <div className="btn-one">
                                <Link className="thm-btn" href="/contact">
                                    <span className="txt">Discover More</span>
                                </Link>
                            </div>
                            <div className="btn-two">
                                <a onClick={() => setOpen(true)} className="video-popup" data-fancybox="video-1" data-caption="">
                                    <div className="main-slider-one__icon">
                                        <i className="icon-play-button-1"></i>
                                        <span>Watch Our Videos</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="contact-info">
                            <ul>
                                <li>
                                    <div className="icon-box">
                                        <span className="icon-pin"></span>
                                    </div>
                                    <div className="text-box">
                                        <p>465 NT Road. North West, England</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-envelope"></span>
                                    </div>
                                    <div className="text-box">
                                        <p><Link href="mailto:yourmail@email.com">needhelpxafran@gmail.cpm</Link>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="social-links">
                            <Link href="#"><span className="icon-facebook"></span></Link>
                            <Link href="#"><span className="icon-instagram"></span></Link>
                            <Link href="#"><span className="icon-tik-tok"></span></Link>
                            <Link href="#"><span className="icon-youtube"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="image-layer" style={{backgroundImage: 'url(assets/img/slider/slider-v1-img2.jpg)'}}>
            </div>
            <div className="shape1"><img src="assets/img/shape/slider-v1-shape1.png" alt=""/></div>
            <div className="container">
                <div className="main-slider-one__single">
                    <div className="main-slider-one__content">
                        <div className="shape2 float-bob-x"><img src="assets/img/shape/slider-v1-shape2.png"
                                alt=""/></div>
                        <h3>Creative</h3>
                        <h2>Architecture</h2>
                        <div className="btn-box">
                            <div className="btn-one">
                                <Link className="thm-btn" href="/contact">
                                    <span className="txt">Discover More</span>
                                </Link>
                            </div>
                            <div className="btn-two">
                                <a onClick={() => setOpen(true)} className="video-popup" data-fancybox="video-1" data-caption="">
                                    <div className="main-slider-one__icon">
                                        <i className="icon-play-button-1"></i>
                                        <span>Watch Our Videos</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="contact-info">
                            <ul>
                                <li>
                                    <div className="icon-box">
                                        <span className="icon-pin"></span>
                                    </div>
                                    <div className="text-box">
                                        <p>465 NT Road. North West, England</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-envelope"></span>
                                    </div>
                                    <div className="text-box">
                                        <p><Link href="mailto:yourmail@email.com">needhelpxafran@gmail.cpm</Link>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="social-links">
                            <Link href="#"><span className="icon-facebook"></span></Link>
                            <Link href="#"><span className="icon-instagram"></span></Link>
                            <Link href="#"><span className="icon-tik-tok"></span></Link>
                            <Link href="#"><span className="icon-youtube"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
            <div className="image-layer" style={{backgroundImage: 'url(assets/img/slider/slider-v1-img3.jpg)'}}> </div>
            <div className="shape1"><img src="assets/img/shape/slider-v1-shape1.png" alt=""/></div>

            <div className="container">
                <div className="main-slider-one__single">
                    <div className="main-slider-one__content">
                        <div className="shape2 float-bob-x"><img src="assets/img/shape/slider-v1-shape2.png" alt=""/></div>
                        <h3>Creative</h3>
                        <h2>Architecture</h2>
                        <div className="btn-box">
                            <div className="btn-one">
                                <Link className="thm-btn" href="/contact">
                                    <span className="txt">Discover More</span>
                                </Link>
                            </div>
                            <div className="btn-two">
                                <a onClick={() => setOpen(true)} className="video-popup" data-fancybox="video-1" data-caption="">
                                    <div className="main-slider-one__icon">
                                        <i className="icon-play-button-1"></i>
                                        <span>Watch Our Videos</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="contact-info">
                            <ul>
                                <li>
                                    <div className="icon-box">
                                        <span className="icon-pin"></span>
                                    </div>
                                    <div className="text-box">
                                        <p>465 NT Road. North West, England</p>
                                    </div>
                                </li>

                                <li>
                                    <div className="icon-box">
                                        <span className="icon-envelope"></span>
                                    </div>
                                    <div className="text-box">
                                        <p><Link href="mailto:yourmail@email.com">needhelpxafran@gmail.cpm</Link>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="social-links">
                            <Link href="#"><span className="icon-facebook"></span></Link>
                            <Link href="#"><span className="icon-instagram"></span></Link>
                            <Link href="#"><span className="icon-tik-tok"></span></Link>
                            <Link href="#"><span className="icon-youtube"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" id="main-slider-one__pagination"><span className="swiper-pagination-bullet swiper-pagination-bullet-active"  role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 3"></span></div>
      </Swiper>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
    </>
  );
};

