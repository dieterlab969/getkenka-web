import React from 'react';
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Team Details">

            <section className="team-details">
            {/* Start Team Details Top */}
            <div className="team-details__top">
                <div className="container">
                    <div className="row">
                        {/* Start Team Details Top Img */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="team-details__top-img">
                                <div className="big-title">
                                    <h2>XAFRAN</h2>
                                </div>
                                <div className="inner">
                                    <img src="assets/img/team/team-details-img1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* End Team Details Top Img */}

                        {/* Start Team Details Top Content */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="team-details__top-content">
                                <div className="team-details__top-content-top">
                                    <h2>Robert Broom</h2>
                                    <p>Backend Developer</p>
                                </div>

                                <div className="team-details__top-content-text">
                                    <p><span>Department:</span> Web Design</p>
                                    <p><span>Experience:</span> 15 Years</p>
                                    <p><span>Email:</span> <Link href="mailto:xafrancompany@gmail.com">xafrancompany@gmail.com</Link></p>
                                    <p><span>Phone:</span> <Link href="tel:+1900938495743">+1-900-938-4957-43</Link></p>
                                </div>

                                <div className="social-links">
                                    <ul>
                                        <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                        <li><Link className="tw" href="#"><span className="icon-twitter"></span></Link></li>
                                        <li><Link className="ins" href="#"><span className="icon-instagram"></span></Link></li>
                                        <li><Link className="in" href="#"><span className="icon-linkedin-big-logo"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* End Team Details Top Content */}
                    </div>
                </div>
            </div>
            {/* End Team Details Top */}

            {/* Start Team Details Middle */}
            <div className="team-details__middle">
                <div className="container">
                    <div className="team-details__middle-inner">
                        <div className="team-details__middle-text1">
                            <h2>Alen Walker’s Biography</h2>
                            <p>A vast majority of the app marketers mainly concentrate on the post-launch app marketing
                                techniques and measures while completely missing on the pre-launch campaign. This
                                prevents the app to create buzz and hype just around the time when the app is launched.
                                As and when you launch the app, already a considerable number of people should
                                expectantly look forward to your app and this requires long-drawn marketing</p>

                            <p>To create pre-launch buzz and hype about the app a mobile app development company has an
                                array of marketing options like social media campaign, search engine ads, video ads,
                                email campaigns, etc. Apart from online options, you can also reach out to the wider
                                audience with traditional marketing </p>
                        </div>

                        <div className="team-details__middle-text2">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="team-details__middle-text2-progress">
                                        <div className="team-details__middle-text2-progress-single">
                                            <div className="title">
                                                <h4>Web Development</h4>
                                            </div>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: "90%" }}>
                                                    <div className="count-text">90%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="team-details__middle-text2-progress-single">
                                            <div className="title">
                                                <h4>Business Solution</h4>
                                            </div>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: "50%" }}>
                                                    <div className="count-text style2">50%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="team-details__middle-text2-progress-single mb0">
                                            <div className="title">
                                                <h4>Digital Marketing</h4>
                                            </div>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: "80%" }}>
                                                    <div className="count-text style2">80%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6">
                                    <div className="team-details__middle-text2-content">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="single-content">
                                                    <h2>Azent Company</h2>
                                                    <p>Web Designer, Figma</p>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="single-content">
                                                    <h2>Amazon Company</h2>
                                                    <p>Web Designer, Figma</p>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="single-content">
                                                    <h2>Moove Ux</h2>
                                                    <p>Web Designer, Figma</p>
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="single-content">
                                                    <h2>nsstheme Company</h2>
                                                    <p>Web Designer, Figma</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="team-details__middle-text3">
                            <h2>Best Skills</h2>
                            <p>A vast majority of the app marketers mainly concentrate on the post-launch app marketing
                                techniques and measures while completely missing on the pre-launch campaign. This
                                prevents the app to create buzz and hype just around the time when the app is launched.
                                As and when you launch the app, already a considerable number of people should
                                expectantly look forward to your app and this requires long-drawn marketing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Team Details Middle */}

            <div className="contact-two">
                <div className="container">
                    <div className="contact-two__inner">
                        <div className="title-box">
                            <h2>Let’s Get in Touch</h2>
                            <p>Your email address will not be published. Required fields are marked *</p>
                        </div>
                        <div className="contact-two__inner-box">
                            <form action="assets/inc/sendemail.php" className="contact-page__form contact-form-validated">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="text" placeholder="Your Name*" name="name" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="email" placeholder="Your Email*" name="email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="text" placeholder="Phone*" name="phone" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <input type="text" placeholder="Subject*" name="subject" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="contact-page__input-box">
                                            <textarea name="message" placeholder="Write Message*"></textarea>
                                        </div>
                                        <div className="contact-page__btn">
                                            <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                <span className="txt">
                                                    SEND YOUR MESSAGE
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Team Details */}

            </Layout>
        </>
    )
}

