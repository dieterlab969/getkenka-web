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
            <section className="main-slider main-slider-two">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    {/* Start Swiper Slide Single*/}
                    <SwiperSlide  className="swiper-slide">
                        <div className="image-layer" style={{backgroundImage: 'url(assets/img/slider/slider-v2-img1.jpg)'}}></div>
                        <div className="main-slider-two__pattern"
                            style={{backgroundImage: 'url(assets/img/pattern/main-slider-v2-pattern.png)'}}></div>

                        <div className="main-slider-two__social-links">
                            <Link href="#"><span className="icon-letter-v"></span></Link>
                            <Link href="#"><span className="icon-twitter"></span></Link>
                            <Link href="#"><span className="icon-dribbble"></span></Link>
                            <Link href="#"><span className="icon-facebook-1"></span></Link>
                        </div>

                        <div className="container">
                            <div className="main-slider-two__single">
                                <div className="main-slider-two__content">
                                    <div className="big-title">
                                        <h2>XAFRAN</h2>
                                    </div>
                                    <h2>Architecture is <br/>
                                        Inhabited Sculpture</h2>
                                    <div className="btn-box">
                                        <div className="btn-one">
                                            <Link className="thm-btn" href="/contact">
                                                <span className="txt">Discover More</span>
                                            </Link>
                                        </div>
                                        <div className="btn-two">
                                            <a onClick={() => setOpen(true)} className="video-popup">
                                                <div className="main-slider-one__icon">
                                                    <i className="icon-play-button-1"></i>
                                                    <span>Watch Our Videos</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*End Swiper Slide Single */}
                    {/* Start Swiper Slide Single*/}
                    <SwiperSlide  className="swiper-slide">
                        <div className="image-layer" style={{backgroundImage: 'url(assets/img/slider/slider-v2-img1.jpg)'}}></div>
                        <div className="main-slider-two__pattern"
                            style={{backgroundImage: 'url(assets/img/pattern/main-slider-v2-pattern.png)'}}></div>

                        <div className="main-slider-two__social-links">
                            <Link href="#"><span className="icon-letter-v"></span></Link>
                            <Link href="#"><span className="icon-twitter"></span></Link>
                            <Link href="#"><span className="icon-dribbble"></span></Link>
                            <Link href="#"><span className="icon-facebook-1"></span></Link>
                        </div>

                        <div className="container">
                            <div className="main-slider-two__single">
                                <div className="main-slider-two__content">
                                    <div className="big-title">
                                        <h2>XAFRAN</h2>
                                    </div>
                                    <h2>Architecture is <br/>
                                        Inhabited Sculpture</h2>
                                    <div className="btn-box">
                                        <div className="btn-one">
                                            <Link className="thm-btn" href="/contact">
                                                <span className="txt">Discover More</span>
                                            </Link>
                                        </div>
                                        <div className="btn-two">
                                            <a onClick={() => setOpen(true)} className="video-popup">
                                                <div className="main-slider-one__icon">
                                                    <i className="icon-play-button-1"></i>
                                                    <span>Watch Our Videos</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*End Swiper Slide Single */}
                    {/* Start Swiper Slide Single*/}
                    <SwiperSlide  className="swiper-slide">
                    <div className="image-layer" style={{backgroundImage: 'url(assets/img/slider/slider-v2-img1.jpg)'}}>
                        </div>
                        <div className="main-slider-two__pattern"
                            style={{backgroundImage: 'url(assets/img/pattern/main-slider-v2-pattern.png)'}}></div>

                        <div className="main-slider-two__social-links">
                            <Link href="#"><span className="icon-letter-v"></span></Link>
                            <Link href="#"><span className="icon-twitter"></span></Link>
                            <Link href="#"><span className="icon-dribbble"></span></Link>
                            <Link href="#"><span className="icon-facebook-1"></span></Link>
                        </div>

                        <div className="container">
                            <div className="main-slider-two__single">
                                <div className="main-slider-two__content">
                                    <div className="big-title">
                                        <h2>XAFRAN</h2>
                                    </div>
                                    <h2>Architecture is <br/>
                                        Inhabited Sculpture</h2>
                                    <div className="btn-box">
                                        <div className="btn-one">
                                            <Link className="thm-btn" href="/contact">
                                                <span className="txt">Discover More</span>
                                            </Link>
                                        </div>
                                        <div className="btn-two">
                                            <a onClick={() => setOpen(true)} className="video-popup">
                                                <div className="main-slider-one__icon">
                                                    <i className="icon-play-button-1"></i>
                                                    <span>Watch Our Videos</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*End Swiper Slide Single */}


                    
                    {/*End Swiper Slide Single */}
                    {/* <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal" id="main-slider-two__pagination"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" role="button" aria-label="Go to slide 1" aria-current="true"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 3"></span></div> */}
                </Swiper>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
