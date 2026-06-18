'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function ProjectSlider2() {
    return (
        <>
        <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
            
                <SwiperSlide className="swiper-slide">
                    {/*Start Project Three Single */}
                    <div className="project-three__single">
                        <ul className="project-three__box">
                            <li>
                                <div className="project-three__single-inner">
                                    <div className="project-three__single-img"
                                        style={{backgroundImage: 'url(assets/img/project/project-v3-img1.jpg)'}}>
                                    </div>
                                    <div className="bg-overlay"></div>

                                    <div className="project-three__overlay-icon">
                                        <ul>
                                            <li><Link className="img-popup"
                                                    href="assets/img/project/project-v3-img1.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </li>
                                            <li><Link href="/project-details"><span
                                                        className="icon-link"></span></Link></li>
                                        </ul>
                                    </div>

                                    <div className="project-three__single-content">
                                        <p>San Fransisco</p>
                                        <h2><Link href="/project-details">Hotel Joshna Villa</Link></h2>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="project-three__single-inner">
                                    <div className="project-three__single-img"
                                        style={{backgroundImage: 'url(assets/img/project/project-v3-img2.jpg)'}}>
                                    </div>
                                    <div className="bg-overlay"></div>

                                    <div className="project-three__overlay-icon">
                                        <ul>
                                            <li><Link className="img-popup"
                                                    href="assets/img/project/project-v3-img2.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </li>
                                            <li><Link href="/project-details"><span
                                                        className="icon-link"></span></Link></li>
                                        </ul>
                                    </div>

                                    <div className="project-three__single-content">
                                        <p>San Fransisco</p>
                                        <h2><Link href="/project-details">Hotel Joshna Villa</Link></h2>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="project-three__single-inner">
                                    <div className="project-three__single-img"
                                        style={{backgroundImage: 'url(assets/img/project/project-v3-img3.jpg)'}}>
                                    </div>
                                    <div className="bg-overlay"></div>

                                    <div className="project-three__overlay-icon">
                                        <ul>
                                            <li><Link className="img-popup"
                                                    href="assets/img/project/project-v3-img3.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </li>
                                            <li><Link href="/project-details"><span
                                                        className="icon-link"></span></Link></li>
                                        </ul>
                                    </div>

                                    <div className="project-three__single-content">
                                        <p>San Fransisco</p>
                                        <h2><Link href="/project-details">Hotel Joshna Villa</Link></h2>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* End Project Three Single*/}
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                    {/*Start Project Three Single */}
                    <div className="project-three__single">
                        <ul className="project-three__box">
                            <li>
                                <div className="project-three__single-inner">
                                    <div className="project-three__single-img"
                                        style={{backgroundImage: 'url(assets/img/project/project-v3-img1.jpg)'}}>
                                    </div>
                                    <div className="bg-overlay"></div>

                                    <div className="project-three__overlay-icon">
                                        <ul>
                                            <li><Link className="img-popup"
                                                    href="assets/img/project/project-v3-img1.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </li>
                                            <li><Link href="/project-details"><span
                                                        className="icon-link"></span></Link></li>
                                        </ul>
                                    </div>

                                    <div className="project-three__single-content">
                                        <p>San Fransisco</p>
                                        <h2><Link href="/project-details">Hotel Joshna Villa</Link></h2>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="project-three__single-inner">
                                    <div className="project-three__single-img"
                                        style={{backgroundImage: 'url(assets/img/project/project-v3-img2.jpg)'}}>
                                    </div>
                                    <div className="bg-overlay"></div>

                                    <div className="project-three__overlay-icon">
                                        <ul>
                                            <li><Link className="img-popup"
                                                    href="assets/img/project/project-v3-img2.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </li>
                                            <li><Link href="/project-details"><span
                                                        className="icon-link"></span></Link></li>
                                        </ul>
                                    </div>

                                    <div className="project-three__single-content">
                                        <p>San Fransisco</p>
                                        <h2><Link href="/project-details">Hotel Joshna Villa</Link></h2>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="project-three__single-inner">
                                    <div className="project-three__single-img"
                                        style={{backgroundImage: 'url(assets/img/project/project-v3-img3.jpg)'}}>
                                    </div>
                                    <div className="bg-overlay"></div>

                                    <div className="project-three__overlay-icon">
                                        <ul>
                                            <li><Link className="img-popup"
                                                    href="assets/img/project/project-v3-img3.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </li>
                                            <li><Link href="/project-details"><span
                                                        className="icon-link"></span></Link></li>
                                        </ul>
                                    </div>

                                    <div className="project-three__single-content">
                                        <p>San Fransisco</p>
                                        <h2><Link href="/project-details">Hotel Joshna Villa</Link></h2>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/*End Project Three Single */}
                </SwiperSlide>


                <SwiperSlide className="swiper-slide">
                    {/*Start Project Three Single */}
                    <div className="project-three__single">
                        <ul className="project-three__box">
                            <li>
                                <div className="project-three__single-inner">
                                    <div className="project-three__single-img"
                                        style={{backgroundImage: 'url(assets/img/project/project-v3-img1.jpg)'}}>
                                    </div>
                                    <div className="bg-overlay"></div>

                                    <div className="project-three__overlay-icon">
                                        <ul>
                                            <li><Link className="img-popup"
                                                    href="assets/img/project/project-v3-img1.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </li>
                                            <li><Link href="/project-details"><span
                                                        className="icon-link"></span></Link></li>
                                        </ul>
                                    </div>

                                    <div className="project-three__single-content">
                                        <p>San Fransisco</p>
                                        <h2><Link href="/project-details">Hotel Joshna Villa</Link></h2>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="project-three__single-inner">
                                    <div className="project-three__single-img"
                                        style={{backgroundImage: 'url(assets/img/project/project-v3-img2.jpg)'}}>
                                    </div>
                                    <div className="bg-overlay"></div>

                                    <div className="project-three__overlay-icon">
                                        <ul>
                                            <li><Link className="img-popup"
                                                    href="assets/img/project/project-v3-img2.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </li>
                                            <li><Link href="/project-details"><span
                                                        className="icon-link"></span></Link></li>
                                        </ul>
                                    </div>

                                    <div className="project-three__single-content">
                                        <p>San Fransisco</p>
                                        <h2><Link href="/project-details">Hotel Joshna Villa</Link></h2>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="project-three__single-inner">
                                    <div className="project-three__single-img"
                                        style={{backgroundImage: 'url(assets/img/project/project-v3-img3.jpg)'}}>
                                    </div>
                                    <div className="bg-overlay"></div>

                                    <div className="project-three__overlay-icon">
                                        <ul>
                                            <li><Link className="img-popup"
                                                    href="assets/img/project/project-v3-img3.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </li>
                                            <li><Link href="/project-details"><span
                                                        className="icon-link"></span></Link></li>
                                        </ul>
                                    </div>

                                    <div className="project-three__single-content">
                                        <p>San Fransisco</p>
                                        <h2><Link href="/project-details">Hotel Joshna Villa</Link></h2>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/*End Project Three Single */}
                </SwiperSlide>
            
        </Swiper>

        </>
    )
}
