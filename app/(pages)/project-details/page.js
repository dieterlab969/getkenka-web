import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Project Details">
                
            {/*Start Project Details */}
            <section className="project-details">
                <div className="container">
                    <div className="project-details__inner">
                        <div className="project-details-img">
                            <div className="inner">
                                <img src="assets/img/project/project-details-img1.jpg" alt=""/>
                            </div>
                        </div>

                        <div className="project-details__text1">
                            <ul>
                                <li>
                                    <div className="text-box">
                                        <p>published:</p>
                                        <h4>April 20, 2023</h4>
                                    </div>
                                </li>

                                <li>
                                    <div className="text-box">
                                        <p>CATAGORY:</p>
                                        <h4>Design/ Ideas</h4>
                                    </div>
                                </li>

                                <li>
                                    <div className="text-box">
                                        <p>client:</p>
                                        <h4>NSSTHEME</h4>
                                    </div>
                                </li>

                                <li>
                                    <ul className="social-links">
                                        <li>
                                            <Link href="#"><span className="icon-facebook"></span></Link>
                                            <Link className="tw" href="#"><span className="icon-twitter"></span></Link>
                                            <Link className="ins" href="#"><span className="icon-instagram"></span></Link>
                                            <Link className="in" href="#"><span className="icon-linkedin-big-logo"></span></Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="project-details__text2">
                            <h2>Architecture Solution and Build Future</h2>
                            <p>With worldwide annual spend on digital advertising surpassing $325 billion, it’s no surprise
                                that different approaches to online marketing are becoming available. One of these new
                                approache marketing or digital performance marketing. Keep reading to learn all about
                                performance marketing, from how it works to how it compares to digital marketing. Plus, get
                                insight into the benefits and risks of performance marketing and how it can affect your
                                company’s long-term success and profitability. Performance marketing is an approach to
                                digital marketing or advertising where businesses only pay when a specific result occurs.
                                This result could be a new lead, sale, or other outcome agreed upon by the advertiser and
                                business. Performance marketing involves channels such as affiliate marketing, online </p>
                            <p>The main thing that separates performance marketing from other types of marketing is the way
                                businesses pay for their campaigns. Rather than paying up front or by month, advertisers pay
                                when a specific action takes place. You might enlist a marketing company’s help to bring
                                your branding to more individuals by having these marketers promote your business to
                                prospective customers. The hope is that users will complete a form to learn more about your
                                company and become a lead.</p>

                            <div className="project-details__text2-bottom">
                                <div className="tag-box">
                                    <Link href="#">Development</Link>
                                    <Link href="#">Digital</Link>
                                    <Link href="#">Tech</Link>
                                </div>

                                <div className="icon-box">
                                    <Link href="#"><span className="icon-share"></span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="project-details__previous-next">
                            <div className="single-box">
                                <div className="icon-box">
                                    <Link href="#"><span className="icon-left-arrow1"></span></Link>
                                </div>
                                <div className="text-box">
                                    <p>Previous</p>
                                    <h4><Link href="#">Responsive Design</Link></h4>
                                </div>
                            </div>

                            <div className="single-box next">
                                <div className="text-box text-right">
                                    <p>Next</p>
                                    <h4><Link href="#">Analytics of Security</Link></h4>
                                </div>
                                <div className="icon-box">
                                    <Link href="#"><span className="icon-left-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Project Details */}

            {/*Start Project Three */}
            <section className="project-three project-three--project style4">
                <div className="container">
                    <div className="sec-title text-center">
                        <h2>Our Related Products</h2>
                    </div>
                    <div className="row">
                        {/*Start Project Three Single */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__single-inner">
                                    <div className="project-three__single-img"
                                        style={{backgroundImage: 'url(assets/img/project/project-v3-img4.jpg)'}}>
                                    </div>
                                    <div className="bg-overlay"></div>

                                    <div className="project-three__overlay-icon">
                                        <ul>
                                            <li><Link className="img-popup" href="assets/img/project/project-v3-img4.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </li>
                                            <li><Link href="#"><span className="icon-link"></span></Link></li>
                                        </ul>
                                    </div>

                                    <div className="project-three__single-content">
                                        <p>San Fransisco</p>
                                        <h2><Link href="#">Hotel Joshna Villa</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Project Three Single */}

                        {/*Start Project Three Single */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__single-inner">
                                    <div className="project-three__single-img"
                                        style={{backgroundImage: 'url(assets/img/project/project-v3-img5.jpg)'}}>
                                    </div>
                                    <div className="bg-overlay"></div>

                                    <div className="project-three__overlay-icon">
                                        <ul>
                                            <li><Link className="img-popup" href="assets/img/project/project-v3-img5.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </li>
                                            <li><Link href="#"><span className="icon-link"></span></Link></li>
                                        </ul>
                                    </div>

                                    <div className="project-three__single-content">
                                        <p>San Fransisco</p>
                                        <h2><Link href="#">Hotel Joshna Villa</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Project Three Single */}

                        {/*Start Project Three Single */}
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="project-three__single">
                                <div className="project-three__single-inner">
                                    <div className="project-three__single-img"
                                        style={{backgroundImage: 'url(assets/img/project/project-v3-img6.jpg)'}}>
                                    </div>
                                    <div className="bg-overlay"></div>

                                    <div className="project-three__overlay-icon">
                                        <ul>
                                            <li><Link className="img-popup" href="assets/img/project/project-v3-img6.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </li>
                                            <li><Link href="#"><span className="icon-link"></span></Link></li>
                                        </ul>
                                    </div>

                                    <div className="project-three__single-content">
                                        <p>San Fransisco</p>
                                        <h2><Link href="#">Hotel Joshna Villa</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Project Three Single */}
                    </div>
                </div>
            </section>
            {/*End Project Three */}
            </Layout>
        </>
    )
}