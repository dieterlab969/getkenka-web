import TestimonialSlider2 from '@/components/slider/TestimonialSlider2'
import TestimonialSlider3 from '@/components/slider/TestimonialSlider3'

export default function Testimonial() {
    return (
        <>
            {/*Start Testimonials One */}
            <section className="testimonials-one">
                <div className="shape1"><img src="assets/img/shape/testimonials-v1-shape1.png" alt=""/></div>
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h5>OUR CLIENT TESTIMONIALS</h5>
                        </div>
                        <h2>What Client Say About Xafran</h2>
                    </div>

                    <div className="row">
                        {/*Start Testimonials Three Content */}
                        <div className="col-xl-12">
                            <div className="testimonials-one__inner">

                                <div className="testimonials-one__content">
                                    <TestimonialSlider2/>
                                </div>

                                <TestimonialSlider3/>
                            </div>
                        </div>
                        {/*End Testimonials Three Content */}
                    </div>
                </div>
            </section>
            {/*End Testimonials One */}
        </>
    )
}
