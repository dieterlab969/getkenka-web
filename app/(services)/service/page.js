'use client'
import Layout from "@/components/layout/Layout"
import BrandSlider2 from '@/components/slider/BrandSlider2'
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
   

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Service Page">
                <div>
                {/*Start Service Two */}
                <section className="service-two">
                    <div className="container">
                        <div className="row">
                            {/*Start Service Two Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="service-two__single">
                                    <div className="shape2"><img src="assets/img/shape/service-v2-shape2.png" alt=""/></div>
                                    <div className="service-two__single-bg"
                                        style={{backgroundImage: 'url(assets/img/service/service-v2-single-bg.jpg)'}}></div>
                                    <div className="service-two__single-icon">
                                        <span className="icon-construction-machine"></span>
                                    </div>
                                    <div className="service-two__single-text">
                                        <h2><Link href="/architecture">Machine Design</Link></h2>
                                        <p>Through a unique coN construction and design disciplines expertise Concor and
                                            delivers </p>
                                    </div>

                                    <div className="btn-box">
                                        <Link href="/architecture">EXPLORE SERVICE</Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Service Two Single */}

                            {/*Start Service Two Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="service-two__single">
                                    <div className="shape2"><img src="assets/img/shape/service-v2-shape2.png" alt=""/></div>
                                    <div className="service-two__single-bg"
                                        style={{backgroundImage: 'url(assets/img/service/service-v2-single-bg.jpg)'}}></div>
                                    <div className="service-two__single-icon">
                                        <span className="icon-construction"></span>
                                    </div>
                                    <div className="service-two__single-text">
                                        <h2><Link href="/architecture">General Contracting</Link></h2>
                                        <p>Through a unique coN construction and design disciplines expertise Concor and
                                            delivers </p>
                                    </div>

                                    <div className="btn-box">
                                        <Link href="/architecture">EXPLORE SERVICE</Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Service Two Single */}

                            {/*Start Service Two Single */}
                            <div className="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.5s">
                                <div className="service-two__single">
                                    <div className="shape2"><img src="assets/img/shape/service-v2-shape2.png" alt=""/></div>
                                    <div className="service-two__single-bg"
                                        style={{backgroundImage: 'url(assets/img/service/service-v2-single-bg.jpg)'}}></div>
                                    <div className="service-two__single-icon">
                                        <span className="icon-interior-design"></span>
                                    </div>
                                    <div className="service-two__single-text">
                                        <h2><Link href="/architecture">Interior Design</Link></h2>
                                        <p>Through a unique coN construction and design disciplines expertise Concor and
                                            delivers </p>
                                    </div>

                                    <div className="btn-box">
                                        <Link href="/architecture">EXPLORE SERVICE</Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Service Two Single- */}
                        </div>
                    </div>
                </section>
                {/*End Service Two */}

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

                {/*Start Brand Two */}
                <div className="brand-one brand-one--two about">
                    <div className="container">
                        <BrandSlider2/>
                    </div>
                </div>
                {/*End Brand Two  */}

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

                            {/* Start Why Choose Us Content*/}
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

                {/*Start Service One */}
                <section className="service-one">
                    <div className="service-one__shape2" style={{backgroundImage: 'url(assets/img/shape/service-v1-shape2.png)'}}>
                    </div>
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h5>OUR SERVICE</h5>
                            </div>
                            <h2>Our Architecture Services</h2>
                        </div>
                        <div className="row">
                            {/*Start Service One Single */}
                            <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="service-one__single">
                                    <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                                    <div className="service-one__single-inner">
                                        <div className="count-text">01</div>
                                        <div className="icon-box">
                                            <span className="icon-construction"></span>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link href="/architecture">General Contracting</Link></h2>
                                            <p>Through a unique combination of construction and design disciplines expertise,
                                                Concor and delivers world class</p>
                                            <div className="btn-box">
                                                <Link href="/architecture">EXPLORE SERVICE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Service One Single */}

                            {/*Start Service One Single */}
                            <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="service-one__single">
                                    <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                                    <div className="service-one__single-inner">
                                        <div className="count-text">02</div>
                                        <div className="icon-box">
                                            <span className="icon-construction-machine"></span>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link href="/architecture">Machine Design</Link></h2>
                                            <p>Through a unique combination of construction and design disciplines expertise,
                                                Concor and delivers world class</p>
                                            <div className="btn-box">
                                                <Link href="/architecture">EXPLORE SERVICE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Service One Single */}

                            {/*Start Service One Single */}
                            <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="service-one__single">
                                    <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                                    <div className="service-one__single-inner">
                                        <div className="count-text">03</div>
                                        <div className="icon-box">
                                            <span className="icon-check-list"></span>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link href="/architecture">Project Planing</Link></h2>
                                            <p>Through a unique combination of construction and design disciplines expertise,
                                                Concor and delivers world class</p>
                                            <div className="btn-box">
                                                <Link href="/architecture">EXPLORE SERVICE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Service One Single */}

                            {/*Start Service One Single */}
                            <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                                <div className="service-one__single">
                                    <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                                    <div className="service-one__single-inner">
                                        <div className="count-text">04</div>
                                        <div className="icon-box">
                                            <span className="icon-interior-design"></span>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link href="/architecture">Interior Design</Link></h2>
                                            <p>Through a unique combination of construction and design disciplines expertise,
                                                Concor and delivers world class</p>
                                            <div className="btn-box">
                                                <Link href="/architecture">EXPLORE SERVICE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Service One Single */}
                        </div>
                    </div>
                </section>
                {/*End Service One */}

                {/*Start Feauture Three */}
                <section className="feauture-three">
                    <div className="shape1 float-bob-y"><img src="assets/img/shape/feauture-v3-shape1.png" alt=""/></div>
                    <div className="container">
                        <div className="row">
                            {/*Start Feauture Three Img */}
                            <div className="col-xl-5 wow animated fadeInLeft" data-wow-delay="0.1s">
                                <div className="feauture-three__img">
                                    <div className="inner clearfix">
                                        <img src="assets/img/resource/feauture-v3-img1.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            {/*End Feauture Three Img */}

                            {/*Start Feauture Three Content */}
                            <div className="col-xl-7">
                                <div className="feauture-three__content">
                                    <div className="sec-title">
                                        <div className="sub-title">
                                            <h5>EXPLORE OUR FEAUTURE</h5>
                                        </div>
                                        <h2>We provide the best <br/>
                                            architect & interior design</h2>
                                    </div>

                                    <div className="text-box">
                                        <p>Arki features minimal and stylish design. The theme is well crafted for all the
                                            modern architect and interior design website. With Arki, it makes your website look
                                            even more attractive and impressive to</p>
                                    </div>
                                    <div className="btn-box">
                                        <Link className="thm-btn" href="#">
                                            <span className="txt">Discover More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*End Feauture Three Content */}
                        </div>
                    </div>
                </section>
                {/*End Feauture Three */}

                </div>

            </Layout>
        </>
    )
}