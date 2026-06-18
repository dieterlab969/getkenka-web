import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"


export default function About() {
    return (
        <>
            {/*Start About Three */}
            <section className="about-three">
                <div className="container">
                    <div className="row">
                        {/*Start About Three Img */}
                        <div className="col-xl-6">
                            <div className="about-three__img">
                                <div className="about-three__img1">
                                    <div className="inner">
                                        <img src="assets/img/about/about-v3-img1.jpg" alt=""/>
                                    </div>

                                    <div className="experience-box">
                                        <div className="counter-box">
                                            <h2 className="count"><CounterUp end={24} />
                                            </h2>
                                        </div>
                                        <div className="text-box">
                                            <p>YEARS <br/>
                                                WORKIGN <br/>
                                                EXPERIENCE</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="about-three__img2">
                                    <ul>
                                        <li>
                                            <div className="about-three__img2-single">
                                                <img src="assets/img/about/about-v3-img2.jpg" alt=""/>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="about-three__img2-single">
                                                <img src="assets/img/about/about-v3-img3.jpg" alt=""/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End About Three Img */}

                        {/*Start About One Content */}
                        <div className="col-xl-6">
                            <div className="about-one__content">
                                <div className="sec-title">
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
                                            <Link className="thm-btn" href="/about">
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
                                        <h4>Do you have any project on your mind? Call Us: <a href="tel:123456789">+123
                                                456789</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End About One Content */}
                    </div>
                </div>
            </section>
            {/*End About Three */}
        </>
    )
}
