'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider4() {
    return (
        <>
            <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                        

                        <div className="swiper-wrapper">

                            <SwiperSlide className="swiper-slide">
                                {/*Start Testimonials Two Single */}
                                <div className="testimonials-two__single">
                                    <div className="testimonials-two__single-top">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-v2-img1.jpg" alt=""/>
                                        </div>

                                        <div className="icon-box">
                                            <span className="icon-quote"></span>
                                        </div>
                                    </div>

                                    <div className="testimonials-two__single-text">
                                        <p>Bring to the table win-win strategies to ensure proactive domination. At the end
                                            of
                                            the day going forward normal that has evolved from
                                            operational X is on the </p>
                                    </div>

                                    <div className="testimonials-two__single-bottom">
                                        <h3>Janes Cooper</h3>
                                        <p>Designer</p>
                                    </div>
                                </div>
                                {/*End Testimonials Two Single */}
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                {/*Start Testimonials Two Single */}
                                <div className="testimonials-two__single">
                                    <div className="testimonials-two__single-top">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-v2-img1.jpg" alt=""/>
                                        </div>

                                        <div className="icon-box">
                                            <span className="icon-quote"></span>
                                        </div>
                                    </div>

                                    <div className="testimonials-two__single-text">
                                        <p>Bring to the table win-win strategies to ensure proactive domination. At the end
                                            of
                                            the day going forward normal that has evolved from
                                            operational X is on the </p>
                                    </div>

                                    <div className="testimonials-two__single-bottom">
                                        <h3>Anonna Aivi</h3>
                                        <p>Designer</p>
                                    </div>
                                </div>
                                {/*End Testimonials Two Single */}
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                {/*Start Testimonials Two Single */}
                                <div className="testimonials-two__single">
                                    <div className="testimonials-two__single-top">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-v2-img1.jpg" alt=""/>
                                        </div>

                                        <div className="icon-box">
                                            <span className="icon-quote"></span>
                                        </div>
                                    </div>

                                    <div className="testimonials-two__single-text">
                                        <p>Bring to the table win-win strategies to ensure proactive domination. At the end
                                            of
                                            the day going forward normal that has evolved from
                                            operational X is on the </p>
                                    </div>

                                    <div className="testimonials-two__single-bottom">
                                        <h3>Danish Berlow</h3>
                                        <p>Designer</p>
                                    </div>
                                </div>
                                {/*End Testimonials Two Single */}
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                {/*Start Testimonials Two Single */}
                                <div className="testimonials-two__single">
                                    <div className="testimonials-two__single-top">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-v2-img1.jpg" alt=""/>
                                        </div>

                                        <div className="icon-box">
                                            <span className="icon-quote"></span>
                                        </div>
                                    </div>

                                    <div className="testimonials-two__single-text">
                                        <p>Bring to the table win-win strategies to ensure proactive domination. At the end
                                            of
                                            the day going forward normal that has evolved from
                                            operational X is on the </p>
                                    </div>

                                    <div className="testimonials-two__single-bottom">
                                        <h3>Janes Cooper</h3>
                                        <p>Designer</p>
                                    </div>
                                </div>
                                {/*End Testimonials Two Single */}
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                {/*Start Testimonials Two Single */}
                                <div className="testimonials-two__single">
                                    <div className="testimonials-two__single-top">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-v2-img1.jpg" alt=""/>
                                        </div>

                                        <div className="icon-box">
                                            <span className="icon-quote"></span>
                                        </div>
                                    </div>

                                    <div className="testimonials-two__single-text">
                                        <p>Bring to the table win-win strategies to ensure proactive domination. At the end
                                            of
                                            the day going forward normal that has evolved from
                                            operational X is on the </p>
                                    </div>

                                    <div className="testimonials-two__single-bottom">
                                        <h3>Anonna Aivi</h3>
                                        <p>Designer</p>
                                    </div>
                                </div>
                                {/*End Testimonials Two Single */}
                            </SwiperSlide>

                            <SwiperSlide className="swiper-slide">
                                {/*Start Testimonials Two Single */}
                                <div className="testimonials-two__single">
                                    <div className="testimonials-two__single-top">
                                        <div className="img-box">
                                            <img src="assets/img/testimonial/testimonials-v2-img1.jpg" alt=""/>
                                        </div>

                                        <div className="icon-box">
                                            <span className="icon-quote"></span>
                                        </div>
                                    </div>

                                    <div className="testimonials-two__single-text">
                                        <p>Bring to the table win-win strategies to ensure proactive domination. At the end
                                            of
                                            the day going forward normal that has evolved from
                                            operational X is on the </p>
                                    </div>

                                    <div className="testimonials-two__single-bottom">
                                        <h3>Danish Berlow</h3>
                                        <p>Designer</p>
                                    </div>
                                </div>
                                {/*End Testimonials Two Single */}
                            </SwiperSlide>
                        </div>
                    </Swiper>

        </>
    )
}
