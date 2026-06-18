'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Home() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Pricing Table">
                <div>
                {/*Start Pricing One */}
                <section className="pricing-one">
                    <div className="container">
                        <div className="sec-title text-center">
                            <div className="sub-title">
                                <h5>OUR PRICING</h5>
                            </div>
                            <h2>Our Suitable Price for <br/>
                                all Customers</h2>
                        </div>

                        <div className="row">
                            {/*Start  Pricing One Single  */}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-pattern"
                                        style={{backgroundImage: 'url(assets/img/pattern/pricing-v1-pattern.png)'}}></div>
                                    <div className="table-header">
                                        <h2>$450<span>/ month</span></h2>
                                        <p>Collaborate Professionally.</p>
                                        <div className="table-header-bottom">
                                            <div className="icon-box">
                                                <img src="assets/img/icon/pricing-v1-icon1.jpg" alt=""/>
                                            </div>

                                            <div className="text-box">
                                                <p>Starter</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="table-content">
                                        <ul>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-check-mark"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p>Exclusive Templaes</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-check-mark"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p>Business & Finance Analysing</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-check-mark"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p>Customer Management</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-check-mark"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p>Full Access Library</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-check-mark"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p>24 Hours Support</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="table-footer">
                                        <div className="btn-box">
                                            <a className="thm-btn" href="#">
                                                <span className="txt">CHOOSE PLAN</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Pricing One Single */}

                            {/*Start  Pricing One Single  */}
                            <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-pattern"
                                        style={{backgroundImage: 'url(assets/img/pattern/pricing-v1-pattern.png)'}}></div>
                                    <div className="table-header">
                                        <h2>$750<span>/ month</span></h2>
                                        <p>Collaborate Professionally.</p>
                                        <div className="table-header-bottom">
                                            <div className="icon-box">
                                                <img src="assets/img/icon/pricing-v1-icon1.jpg" alt=""/>
                                            </div>

                                            <div className="text-box">
                                                <p>Commercial</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="table-content">
                                        <ul>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-check-mark"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p>Exclusive Templaes</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-check-mark"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p>Business & Finance Analysing</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-check-mark"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p>Customer Management</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-check-mark"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p>Full Access Library</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-check-mark"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p>24 Hours Support</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="table-footer">
                                        <div className="btn-box">
                                            <a className="thm-btn" href="#">
                                                <span className="txt">CHOOSE PLAN</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Pricing One Single */}

                            {/*Start  Pricing One Single */}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-pattern"
                                        style={{backgroundImage: 'url(assets/img/pattern/pricing-v1-pattern.png)'}}></div>
                                    <div className="table-header">
                                        <h2>$950<span>/ month</span></h2>
                                        <p>Collaborate Professionally.</p>
                                        <div className="table-header-bottom">
                                            <div className="icon-box">
                                                <img src="assets/img/icon/pricing-v1-icon1.jpg" alt=""/>
                                            </div>

                                            <div className="text-box">
                                                <p>Enterprise</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="table-content">
                                        <ul>
                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-check-mark"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p>Exclusive Templaes</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-check-mark"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p>Business & Finance Analysing</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-check-mark"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p>Customer Management</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-check-mark"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p>Full Access Library</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon-box">
                                                    <span className="icon-check-mark"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p>24 Hours Support</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="table-footer">
                                        <div className="btn-box">
                                            <a className="thm-btn" href="#">
                                                <span className="txt">CHOOSE PLAN</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Pricing One Single */}
                        </div>
                    </div>
                </section>
                {/*End Pricing One */}


                {/*Start Cta One */}
                <section className="cta-one">
                    <div className="cta-one__pattern" style={{backgroundImage: 'url(assets/img/pattern/cta-v1-pattern.png)'}}></div>
                    <div className="container">
                        <div className="cta-one__inner">
                            <div className="cta-one__content">
                                <h2>We are Always Ready to Help You <br/>
                                    & Answer Your Questions</h2>
                            </div>

                            <div className="cta-one__btn">
                                <a className="thm-btn" href="#">
                                    <span className="txt">SERVICE MORE</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Cta One */}
                </div>

            </Layout>
        </>
    )
}