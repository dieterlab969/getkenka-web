import TestimonialSlider4 from '@/components/slider/TestimonialSlider4'

export default function Testimonial() {
    return (
        <>
            {/*Start Testimonials Two */}
            <section className="testimonials-two">
                <div className="testimonials-two__pattern"
                    style={{backgroundImage: 'url(assets/img/pattern/testimonials-v2-pattern.png)'}}></div>
                <div className="shape1 float-bob-x"><img src="assets/img/shape/testimonials-v2-shape1.png" alt=""/></div>
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h5>OUR CLIENT TESTIMONIALS</h5>
                        </div>
                        <h2>Why Customers Love to <br/>
                            Working With Us</h2>
                    </div>

                    <TestimonialSlider4/>
                    {/*If we need navigation buttons */}
                    <div className="swiper-pagination" id="testimonials-two__pagination"></div>
                </div>
            </section>
            {/*End Testimonials Two */}
        </>
    )
}
