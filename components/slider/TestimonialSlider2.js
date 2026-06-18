'use client'
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
export default function TestimonialSlider2() {
    return (
        <>
            <Swiper {...swiperOptions} className="swiper-container" id="testimonials-one__carousel">
                {/*Start Swiper Slide */}
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonials-one__content-single">
                            <div className="rating-box">
                                <a href="#"><i className="icon-star"></i></a>
                                <a href="#"><i className="icon-star"></i></a>
                                <a href="#"><i className="icon-star"></i></a>
                                <a href="#"><i className="icon-star"></i></a>
                                <a href="#"><i className="icon-star"></i></a>
                            </div>

                            <div className="text-box">
                                <p>We are an architecture firm with a focus on beautiful but
                                    functional design. At its <br/> heart, we believe design is about
                                    usability and accessibility — these are the guiding <br/>
                                    principles for our work. Read projects, our <br/>
                                    process and our team below.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*End Swiper Slide */}

                    {/*Start Swiper Slide */}
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonials-one__content-single">
                            <div className="rating-box">
                                <a href="#"><i className="icon-star"></i></a>
                                <a href="#"><i className="icon-star"></i></a>
                                <a href="#"><i className="icon-star"></i></a>
                                <a href="#"><i className="icon-star"></i></a>
                                <a href="#"><i className="icon-star"></i></a>
                            </div>

                            <div className="text-box">
                                <p>We are an architecture firm with a focus on beautiful but
                                    functional design. At its <br/> heart, we believe design is about
                                    usability and accessibility — these are the guiding <br/>
                                    principles for our work. Read projects, our <br/>
                                    process and our team below.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*End Swiper Slide */}

                    {/*Start Swiper Slide */}
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonials-one__content-single">
                            <div className="rating-box">
                                <a href="#"><i className="icon-star"></i></a>
                                <a href="#"><i className="icon-star"></i></a>
                                <a href="#"><i className="icon-star"></i></a>
                                <a href="#"><i className="icon-star"></i></a>
                                <a href="#"><i className="icon-star"></i></a>
                            </div>

                            <div className="text-box">
                                <p>We are an architecture firm with a focus on beautiful but
                                    functional design. At its <br/> heart, we believe design is about
                                    usability and accessibility — these are the guiding <br/>
                                    principles for our work. Read projects, our <br/>
                                    process and our team below.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                     {/*End Swiper Slide */}
                     <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" id="testimonials-one__pagination"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet"  role="button" aria-label="Go to slide 3"></span></div>
               
            </Swiper>
                   
        </>
    )
}
