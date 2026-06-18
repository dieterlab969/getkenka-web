
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details">

            {/*Start Blog Details */}
            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        {/*Start Blog Sidebar Content */}
                        <div className="col-xl-8">
                            <div className="blog-details__content">
                                <div className="blog-details__content-img1">
                                    <img src="assets/img/blog/blog-details-img1.jpg" alt=""/>
                                </div>

                                <div className="blog-details__content-text1">
                                    <h2>Easy & Most Powerful Server Platform.</h2>
                                    <p className="text1">March 23, 2022 _ DEVELOPMENT _ BY Katty Olson _ 2 Comments</p>
                                    <p className="text2">With worldwide annual spend on digital advertising surpassing $325
                                        billion, it’s no
                                        surprise that different approaches to online marketing are becoming available. One
                                        of these new approaches is performance marketing or digital performance marketing.
                                        Keep reading to learn all about performance marketing, from how it works to how it
                                        compares to digital marketing. Plus, get insight into the benefits and risks of
                                        performance marketing and how it can affect your company’s long-term success and
                                        profitability. Performance marketing is an approach to digital marketing or
                                        advertising where businesses only pay when a specific result occurs. This result
                                        could be a new lead, sale, or other outcome agreed upon by the advertiser and
                                        business. Performance marketing involves channels such as affiliate marketing,
                                        online advertising.</p>
                                </div>

                                <div className="blog-details__content-img2">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="blog-details__content-img2-single">
                                                <img src="assets/img/blog/blog-details-img2.jpg" alt=""/>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="blog-details__content-img2-single">
                                                <img src="assets/img/blog/blog-details-img3.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-details__content-text2">
                                    <h2>Latest Articles Updated Daily</h2>
                                    <p>With worldwide annual spend on digital advertising surpassing $325 billion, it’s no
                                        surprise that different approaches to online marketing are becoming available. One
                                        of these new approaches is performance marketing or digital performance marketing.
                                        Keep reading to learn all about performance marketing</p>
                                </div>

                                <div className="blog-details__content-text3 text-center">
                                    <div className="icon-box">
                                        <span className="icon-right-quotation-mark"></span>
                                    </div>

                                    <div className="text-box">
                                        <h4>Diam luctus nostra dapibus varius et semper semper rutrum ad risus felis
                                            eros. Cursus libero viverra tempus netus diam vestibulum</h4>
                                        <p>David Backhum</p>
                                    </div>
                                </div>

                                <div className="blog-details__content-text4">
                                    <div className="tag-box">
                                        <div className="title">
                                            <h2>Posted in:</h2>
                                        </div>

                                        <div className="tag-box-list">
                                            <ul>
                                                <li><Link href="#">Development</Link></li>
                                                <li><Link href="#">Digital</Link></li>
                                                <li><Link href="#">Tech</Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="icon-box">
                                        <Link href="#"><span className="icon-share"></span></Link>
                                    </div>
                                </div>

                                <div className="comment-one">
                                    <h3 className="comment-one__title">Comments (2)</h3>
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            <img src="assets/img/blog/blog-details-img4.jpg" alt=""/>
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Saiful Islam</h3>
                                            <p>It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. </p>
                                            <span>February 03. 2023 <Link href="#" className="comment-one__btn">Reply</Link></span>
                                        </div>
                                    </div>

                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            <img src="assets/img/blog/blog-details-img5.jpg" alt=""/>
                                        </div>
                                        <div className="comment-one__content">
                                            <h3>Jhon Smith</h3>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form.</p>
                                            <span>February 03. 2023 <Link href="#" className="comment-one__btn">Reply</Link></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-details__content-form">
                                    <div className="title-box">
                                        <h2>Let’s Get in Touch</h2>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>

                                    <form action="assets/inc/sendemail.php"
                                        className="contact-page__form contact-form-validated">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="contact-page__input-box">
                                                    <input type="text" placeholder="Your Name*" name="name"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div className="contact-page__input-box">
                                                    <input type="email" placeholder="Your Email*" name="email"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div className="contact-page__input-box">
                                                    <input type="text" placeholder="Website*" name="website"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div className="contact-page__input-box">
                                                    <textarea name="message" placeholder="Write Message*"></textarea>
                                                </div>
                                                <div className="contact-page__btn">
                                                    <button className="thm-btn" type="submit"
                                                        data-loading-text="Please wait...">
                                                        <span className="txt">
                                                            Send Meassage
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/*End Blog Sidebar Content */}

                        {/*Start Sidebar */}
                        <div className="col-xl-4">
                            <div className="sidebar">
                                {/*Start Sidebar Single */}
                                <div className="sidebar__single sidebar__search">
                                    <h3 className="sidebar__title">Search</h3>
                                    <form action="#" className="sidebar__search-form">
                                        <input type="search" placeholder="Keywords here...."/>
                                        <button type="submit"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                                {/*End Sidebar Single */}

                                {/*Start Sidebar Single */}
                                <div className="sidebar__single sidebar__category">
                                    <h3 className="sidebar__title">Categories</h3>

                                    <ul className="sidebar__category-list">
                                        <li><Link className="active" href="#">Architecture <span
                                                    className="icon-left-arrow"></span></Link></li>
                                        <li><Link href="#">Interior Design <span className="icon-left-arrow"></span></Link></li>
                                        <li><Link href="#">Ui/Ux Designing <span className="icon-left-arrow"></span></Link></li>
                                        <li><Link href="#">Building Renovation <span className="icon-left-arrow"></span></Link></li>
                                        <li><Link href="#">Construction Site <span className="icon-left-arrow"></span></Link></li>
                                        <li><Link href="#">Security System <span className="icon-left-arrow"></span></Link></li>
                                    </ul>
                                </div>
                                {/*End Sidebar Single */}

                                {/*Start Sidebar Single */}
                                <div className="sidebar__single sidebar__recent-post">
                                    <h3 className="sidebar__title">Recent Post</h3>

                                    <ul className="sidebar__recent-post-box">
                                        <li>
                                            <div className="inner">
                                                <div className="img-box">
                                                    <img src="assets/img/blog/sidebar-img1.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <h4><Link href="#">Keep Your Business <br/> Safe
                                                            Ensure High</Link></h4>
                                                    <p><span className="icon-clock"></span> April 21, 2023</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inner">
                                                <div className="img-box">
                                                    <img src="assets/img/blog/sidebar-img2.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <h4><Link href="#">We’ve Been a Strategy <br/>
                                                            Thought Leader for</Link></h4>
                                                    <p><span className="icon-clock"></span> April 21, 2023</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inner">
                                                <div className="img-box">
                                                    <img src="assets/img/blog/sidebar-img3.jpg" alt=""/>
                                                </div>

                                                <div className="content-box">
                                                    <h4><Link href="#">This Week’s Top <br/> Stories
                                                            About It</Link></h4>
                                                    <p><span className="icon-clock"></span> April 21, 2023</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/*End Sidebar Single */}

                                {/*Start Sidebar Single */}
                                <div className="sidebar__single sidebar__tags">
                                    <h3 className="sidebar__title">Tags</h3>
                                    <ul className="sidebar__tags-list clearfix">
                                        <li><Link href="#">IT Technology</Link></li>
                                        <li><Link href="#">Software</Link></li>
                                        <li><Link href="#">Design</Link></li>
                                        <li><Link href="#">Service</Link></li>
                                        <li><Link href="#">Development</Link></li>
                                        <li><Link href="#">Digital</Link></li>
                                        <li><Link href="#">Cyber</Link></li>
                                    </ul>
                                </div>
                                {/*End Sidebar Single */}
                            </div>
                        </div>
                        {/*End Sidebar */}
                    </div>
                </div>
            </section>
            {/*End Blog Details */}

            </Layout>
        </>
    )
}
