import Link from "next/link"


export default function Team() {
    return (
        <>
            
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
                                        <h3><Link href="/team-details">Janes Cooper</Link></h3>
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

        </>
    )
}
