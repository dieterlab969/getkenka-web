'use client'
import Link from "next/link"
import TestimonialSlider4 from '@/components/slider/TestimonialSlider4'
import BrandSlider2 from '@/components/slider/BrandSlider2'
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"

export default function Home() {
    
    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="About Us">
                <div>
                {/*Start About One */}
                <section className="about-one about-one--about">
                    <div className="shape1 float-bob-y"><img src="assets/img/shape/about-v1-shape1.png" alt=""/></div>
                    <div className="container">
                        <div className="row">
                            {/*Start About One Img */}
                            <div className="col-xl-5 wow animated fadeInRight" data-wow-delay="0.1s">
                                <div className="about-one__img">
                                    <div className="inner">
                                        <img src="assets/img/about/about-v1-img1.jpg" alt=""/>
                                    </div>
                                    <div className="experience-box">
                                        <div className="counter-box">
                                            <h2 className="count">
                                                <CounterUp end={24} />
                                            </h2>
                                            
                                        </div>
                                        <div className="text-box">
                                            <p>YEARS <br/>
                                                WORKIGN <br/>
                                                EXPERIENCE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End About One Img */}

                            {/*Start About One Content */}
                            <div className="col-xl-7 wow animated fadeInLeft" data-wow-delay="0.1s">
                                <div className="about-one__content">
                                    <div className="sec-title">
                                        <div className="sub-title">
                                            <h5>About Company</h5>
                                        </div>
                                        <h2>Find Architect to Building <br/>
                                            Your Vision & Passion</h2>
                                    </div>

                                    <div className="text-box">
                                        <p>Arki features minimal and stylish design. The theme is well crafted for all the
                                            modern architect and interior design website. With Arki, it makes your website look
                                            even more attractive and impressive to</p>
                                    </div>

                                    <div className="about-one__content-progress">
                                        <div className="about-one__content-progress-single">
                                            <div className="title">
                                                <h4>Design</h4>
                                            </div>
                                            <div className="bar">
                                                <div className="bar-inner1 count-bar" data-percent="80%">
                                                    <div className="count-text">80%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="about-one__content-progress-single mb0">
                                            <div className="title">
                                                <h4>Architect</h4>
                                            </div>
                                            <div className="bar">
                                                <div className="bar-inner2 count-bar" data-percent="90%">
                                                    <div className="count-text style2">90%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="about-one__content-bottom">
                                        <div className="about-one__content-bottom-author-box">
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="about">
                                                    <span className="txt">Discover More</span>
                                                </Link>
                                            </div>

                                            <div className="author-info">
                                                <div className="img-box">
                                                    <img src="assets/img/about/about-v1-img2.jpg" alt=""/>
                                                </div>
                                                <div className="signature-box">
                                                    <img src="assets/img/about/signature-1.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h4>Do you have any project on your mind? Call Us: <Link href="tel:123456789">+123
                                                    456789</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End About One Content */}
                        </div>
                    </div>
                </section>
                {/*End About One */}

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
                        
                    </div>
                </section>
                {/*End Testimonials Two */}


                {/*Start Brand Two */}
                <div className="brand-one brand-one--two about">
                    <div className="container">
                        <BrandSlider2/>
                    </div>
                </div>
                {/*End Brand Two */}

                {/*Start Why Choose Us One */}
                <div className="why-choose-us-one">
                    <div className="container">
                        <div className="row">
                            {/*Start Why Choose Us One Img */}
                            <div className="col-xl-6 wow animated fadeInRight" data-wow-delay="0.1s">
                                <div className="why-choose-us-one__img">
                                    <div className="shape1"><img src="assets/img/shape/why-choose-us-v1-shape1.png" alt=""/></div>
                                    <ul>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/img/resource/why-choose-us-v1-img1.jpg" alt=""/>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="img-box">
                                                <img src="assets/img/resource/why-choose-us-v1-img2.jpg" alt=""/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*End Why Choose Us One Img */}

                            {/*Start Why Choose Us Content */}
                            <div className="col-xl-6 wow animated fadeInLeft" data-wow-delay="0.1s">
                                <div className="why-choose-us-one__content">
                                    <ul>
                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <span className="icon-office-building"></span>
                                                </div>
                                                <div className="content-box">
                                                    <h2>Architecture Design</h2>
                                                    <p>Through a unique coN construction and design discipl
                                                        nes expertise Concor and delivers </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <span className="icon-bed"></span>
                                                </div>
                                                <div className="content-box">
                                                    <h2>The Joy of Best Living</h2>
                                                    <p>Through a unique coN construction and design discipl
                                                        nes expertise Concor and delivers </p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <span className="icon-targeted"></span>
                                                </div>
                                                <div className="content-box">
                                                    <h2>Professional Planning</h2>
                                                    <p>Through a unique coN construction and design discipl
                                                        nes expertise Concor and delivers </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*End Why Choose Us Content */}
                        </div>
                    </div>
                </div>
                {/*End Why Choose Us One */}


                {/*Start Call To Action One */}
                <section className="call-to-action-one">
                    <div className="call-to-action-one__bg"
                        style={{backgroundImage: 'url(assets/img/background/call-to-action-v1-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="call-to-action-one__inner">
                            <div className="call-to-action-one__content text-center">
                                <h2>Have a Project in Your Mind</h2>
                                <h3>Don’t Hesitate to Say Hello </h3>
                                <div className="btn-box">
                                    <a className="thm-btn" href="#">
                                        <span className="txt">LET’S TALK WITH US</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Call To Action One */}


                {/*Start Team Two */}
                <section className="team-two">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h5>OUR TEAM MEMBER</h5>
                            </div>
                            <h2>Our Talented Team <br/>
                                Member Behind Xafran</h2>
                        </div>
                        <div className="row">
                            {/*Start Team Two Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/img/team/team-v2-img1.jpg" alt=""/>
                                        </div>

                                        <div className="content-box">
                                            <h3><Link href="/team-details">Saiful Islam</Link></h3>
                                            <p>Developer</p>
                                        </div>
                                        <ul className="social-links clearfix">
                                            <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                                <ul className="social-links-inner">
                                                    <li><Link href="#"><i className="icon-linkedin-big-logo"></i></Link></li>
                                                    <li><Link href="#"><i className="icon-instagram"></i></Link>
                                                    </li>
                                                    <li><Link href="#"><i className="icon-facebook"></i></Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Team Two Single */}

                            {/*Start Team Two Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/img/team/team-v2-img2.jpg" alt=""/>
                                        </div>

                                        <div className="content-box">
                                            <h3><Link href="team-details">Janes Cooper</Link></h3>
                                            <p>Designer</p>
                                        </div>
                                        <ul className="social-links clearfix">
                                            <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                                <ul className="social-links-inner">
                                                    <li><Link href="#"><i className="icon-linkedin-big-logo"></i></Link></li>
                                                    <li><Link href="#"><i className="icon-instagram"></i></Link>
                                                    </li>
                                                    <li><Link href="#"><i className="icon-facebook"></i></Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Team Two Single */}

                            {/*Start Team Two Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="team-two__single">
                                    <div className="team-two__single-img">
                                        <div className="inner">
                                            <img src="assets/img/team/team-v2-img3.jpg" alt=""/>
                                        </div>

                                        <div className="content-box">
                                            <h3><Link href="/team-details">James Bond</Link></h3>
                                            <p>Creator</p>
                                        </div>
                                        <ul className="social-links clearfix">
                                            <li className="share"><Link href="#"><span className="icon-share"></span></Link>
                                                <ul className="social-links-inner">
                                                    <li><Link href="#"><i className="icon-linkedin-big-logo"></i></Link></li>
                                                    <li><Link href="#"><i className="icon-instagram"></i></Link>
                                                    </li>
                                                    <li><Link href="#"><i className="icon-facebook"></i></Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Team Two Single */}
                        </div>
                    </div>
                </section>
                {/*End Team Two */}
                </div>


                
            </Layout>
        </>
    )
}


