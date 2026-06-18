
'use client'
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
    return (
        <>
            


            {/*Start Main Slider Three */}
        <section className="main-slider main-slider-three">
            <Swiper {...swiperOptions} className="swiper-container main-slider-three__carousel">
                <div className="swiper-wrapper">

                    {/*Start Swiper Slide Single */}
                    <SwiperSlide className="swiper-slide">
                        <div className="image-layer" style={{backgroundImage: 'url(assets/img/slider/slider-v3-img1.jpg)'}}>
                        </div>
                        <div className="main-slider-three__social-links">
                            <div className="title-box">
                                <div className="text">
                                    <p>Follow Us</p>
                                </div>
                                <div className="border-box"></div>
                            </div>

                            <ul className="social-links">
                                <li><Link href="#"><span className="icon-letter-v"></span></Link></li>
                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                <li><Link href="#"><span className="icon-dribbble"></span></Link></li>
                                <li><Link href="#"><span className="icon-facebook-1"></span></Link></li>
                            </ul>
                        </div>

                        <div className="container">
                            <div className="main-slider-three__single text-center">
                                <div className="main-slider-three__content">
                                    <div className="logo-box">
                                        <img src="assets/img/resource/main-slider-v3-logo.png" alt=""/>
                                    </div>
                                    <div className="title">
                                        <h2>NEW WAY OF LIVING</h2>
                                    </div>

                                    <div className="btn-box">
                                        <div className="btn-one">
                                            <Link className="thm-btn" href="/contact">
                                                <span className="txt">Discover More</span>
                                            </Link>
                                        </div>

                                        <div className="btn-two">
                                            <Link className="thm-btn" href="contact">
                                                <span className="txt">GET STARTED NOW</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*End Swiper Slide Single */}

                    {/*Start Swiper Slide Single */}
                    <SwiperSlide className="swiper-slide">
                    <div className="image-layer" style={{backgroundImage: 'url(assets/img/slider/slider-v3-img2.jpg)'}}>
                        </div>
                        <div className="main-slider-three__social-links">
                            <div className="title-box">
                                <div className="text">
                                    <p>Follow Us</p>
                                </div>
                                <div className="border-box"></div>
                            </div>

                            <ul className="social-links">
                                <li><Link href="#"><span className="icon-letter-v"></span></Link></li>
                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                <li><Link href="#"><span className="icon-dribbble"></span></Link></li>
                                <li><Link href="#"><span className="icon-facebook-1"></span></Link></li>
                            </ul>
                        </div>

                        <div className="container">
                            <div className="main-slider-three__single text-center">
                                <div className="main-slider-three__content">
                                    <div className="logo-box">
                                        <img src="assets/img/resource/main-slider-v3-logo.png" alt=""/>
                                    </div>
                                    <div className="title">
                                        <h2>NEW WAY OF LIVING</h2>
                                    </div>

                                    <div className="btn-box">
                                        <div className="btn-one">
                                            <Link className="thm-btn" href="/contact">
                                                <span className="txt">Discover More</span>
                                            </Link>
                                        </div>

                                        <div className="btn-two">
                                            <Link className="thm-btn" href="/contact">
                                                <span className="txt">GET STARTED NOW</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*End Swiper Slide Single */}

                    {/*Start Swiper Slide Single */}
                    <SwiperSlide className="swiper-slide">
                    <div className="image-layer" style={{backgroundImage: 'url(assets/img/slider/slider-v3-img3.jpg)'}}>
                        </div>
                        <div className="main-slider-three__social-links">
                            <div className="title-box">
                                <div className="text">
                                    <p>Follow Us</p>
                                </div>
                                <div className="border-box"></div>
                            </div>

                            <ul className="social-links">
                                <li><Link href="#"><span className="icon-letter-v"></span></Link></li>
                                <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                <li><Link href="#"><span className="icon-dribbble"></span></Link></li>
                                <li><Link href="#"><span className="icon-facebook-1"></span></Link></li>
                            </ul>
                        </div>

                        <div className="container">
                            <div className="main-slider-three__single text-center">
                                <div className="main-slider-three__content">
                                    <div className="logo-box">
                                        <img src="assets/img/resource/main-slider-v3-logo.png" alt=""/>
                                    </div>
                                    <div className="title">
                                        <h2>NEW WAY OF LIVING</h2>
                                    </div>

                                    <div className="btn-box">
                                        <div className="btn-one">
                                            <Link className="thm-btn" href="/contact">
                                                <span className="txt">Discover More</span>
                                            </Link>
                                        </div>

                                        <div className="btn-two">
                                            <Link className="thm-btn" href="/contact">
                                                <span className="txt">GET STARTED NOW</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* End Swiper Slide Single*/}
                </div>

            </Swiper>
        </section>
        {/* End Main Slider Three*/}
        </>
    )
}
