'use client'
import Link from "next/link"
import { useState } from "react"


export default function Pricing() {
    
    return (
        <>
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
        </>
    )
}
