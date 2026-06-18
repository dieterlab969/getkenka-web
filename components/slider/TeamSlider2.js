'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
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
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}
export default function TeamSlider2() {
    return (
        <>
            <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                <SwiperSlide className="swiper-slide">
                    {/*Start Team One Single */}
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="assets/img/team/team-v1-img1.jpg" alt=""/>
                                <div className="team-one__single-icon">
                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link className="fb" href="#"><i className="icon-facebook-1"></i></Link>
                                                </li>
                                                <li><Link className="tw" href="#"><i className="icon-letter-v"></i></Link>
                                                </li>
                                                <li><Link className="ins" href="#"><i className="icon-letter-x"></i></Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <h3><Link href="/team-details">Annete Black</Link></h3>
                            <p>Engineer</p>
                        </div>
                    </div>
                    {/*End Team One Single */}
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    {/*Start Team One Single */}
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="assets/img/team/team-v1-img2.jpg" alt=""/>
                                <div className="team-one__single-icon">
                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link className="fb" href="#"><i className="icon-facebook-1"></i></Link>
                                                </li>
                                                <li><Link className="tw" href="#"><i className="icon-letter-v"></i></Link>
                                                </li>
                                                <li><Link className="ins" href="#"><i className="icon-letter-x"></i></Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <h3><Link href="/team-details">Anannya Wifey</Link></h3>
                            <p>Developer</p>
                        </div>
                    </div>
                    {/*End Team One Single */}
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    {/*Start Team One Single */}
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="assets/img/team/team-v1-img3.jpg" alt=""/>
                                <div className="team-one__single-icon">
                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link className="fb" href="#"><i className="icon-facebook-1"></i></Link>
                                                </li>
                                                <li><Link className="tw" href="#"><i className="icon-letter-v"></i></Link>
                                                </li>
                                                <li><Link className="ins" href="#"><i className="icon-letter-x"></i></Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <h3><Link href="/team-details">Shamim Khan</Link></h3>
                            <p>Co Founder</p>
                        </div>
                    </div>
                    {/*End Team One Single */}
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    {/*Start Team One Single */}
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="assets/img/team/team-v1-img4.jpg" alt=""/>
                                <div className="team-one__single-icon">
                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link className="fb" href="#"><i className="icon-facebook-1"></i></Link>
                                                </li>
                                                <li><Link className="tw" href="#"><i className="icon-letter-v"></i></Link>
                                                </li>
                                                <li><Link className="ins" href="#"><i className="icon-letter-x"></i></Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <h3><Link href="/team-details">Ananta Khan</Link></h3>
                            <p>Designer</p>
                        </div>
                    </div>
                    {/*End Team One Single */}
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    {/*Start Team One Single */}
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="assets/img/team/team-v1-img1.jpg" alt=""/>
                                <div className="team-one__single-icon">
                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link className="fb" href="#"><i className="icon-facebook-1"></i></Link>
                                                </li>
                                                <li><Link className="tw" href="#"><i className="icon-letter-v"></i></Link>
                                                </li>
                                                <li><Link className="ins" href="#"><i className="icon-letter-x"></i></Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <h3><Link href="/team-details">Annete Black</Link></h3>
                            <p>Engineer</p>
                        </div>
                    </div>
                    {/*End Team One Single */}
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    {/*Start Team One Single */}
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="assets/img/team/team-v1-img2.jpg" alt=""/>
                                <div className="team-one__single-icon">
                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link className="fb" href="#"><i className="icon-facebook-1"></i></Link>
                                                </li>
                                                <li><Link className="tw" href="#"><i className="icon-letter-v"></i></Link>
                                                </li>
                                                <li><Link className="ins" href="#"><i className="icon-letter-x"></i></Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <h3><Link href="/team-details">Anannya Wifey</Link></h3>
                            <p>Developer</p>
                        </div>
                    </div>
                    {/*End Team One Single */}
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    {/*Start Team One Single */}
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="assets/img/team/team-v1-img3.jpg" alt=""/>
                                <div className="team-one__single-icon">
                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link className="fb" href="#"><i className="icon-facebook-1"></i></Link>
                                                </li>
                                                <li><Link className="tw" href="#"><i className="icon-letter-v"></i></Link>
                                                </li>
                                                <li><Link className="ins" href="#"><i className="icon-letter-x"></i></Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <h3><Link href="/team-details">Shamim Khan</Link></h3>
                            <p>Co Founder</p>
                        </div>
                    </div>
                    {/*End Team One Single */}
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    {/*Start Team One Single */}
                    <div className="team-one__single">
                        <div className="team-one__single-img">
                            <div className="inner">
                                <img src="assets/img/team/team-v1-img4.jpg" alt=""/>
                                <div className="team-one__single-icon">
                                    <ul className="social-links clearfix">
                                        <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                            <ul className="social-links-inner">
                                                <li><Link className="fb" href="#"><i className="icon-facebook-1"></i></Link>
                                                </li>
                                                <li><Link className="tw" href="#"><i className="icon-letter-v"></i></Link>
                                                </li>
                                                <li><Link className="ins" href="#"><i className="icon-letter-x"></i></Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="team-one__single-content">
                            <h3><Link href="/team-details">Ananta Khan</Link></h3>
                            <p>Designer</p>
                        </div>
                    </div>
                    {/*End Team One Single */}
                </SwiperSlide>
                {/* <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" id="team-one__pagination">
                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active" role="button" aria-label="Go to slide 1"></span>
                    <span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 2"></span>
                    <span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 3"></span>
                    <span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 4"></span>
                </div> */}
            </Swiper>

        </>
    )
}
