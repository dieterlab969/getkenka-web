
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="BLOG SIDEBAR">
                <div>
                {/*Start Blog Sidebar */}
                <section className="blog-sidebar">
                    <div className="container">
                        <div className="row">
                            {/*Start Blog Sidebar Content */}
                            <div className="col-xl-8">
                                <div className="blog-sidebar__content">
                                    {/*Start Blog Sidebar Single */}
                                    <div className="blog-sidebar__single">
                                        <div className="blog-sidebar__single-img">
                                            <div className="inner">
                                                <img src="assets/img/blog/blog-sidebar-img1.jpg" alt=""/>
                                            </div>
                                        </div>

                                        <div className="blog-sidebar__single-content">
                                            <ul className="meta-box">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-calendar"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p><Link href="#">April 21, 2023</Link></p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-user"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p><Link href="#">Saiful Islam</Link></p>
                                                    </div>
                                                </li>
                                            </ul>

                                            <h2><Link href="/blog-details">Best Architecture Problem Solution <br/>
                                                    and Creativity</Link></h2>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="/blog-details">
                                                    <span className="txt">read more</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Blog Sidebar Single */}

                                    {/*Start Blog Sidebar Single */}
                                    <div className="blog-sidebar__single">
                                        <div className="blog-sidebar__single-img">
                                            <div className="thm-swiper__slider swiper-container" data-swiper-options='{"spaceBetween": 0,
                                            "slidesPerView": 1,
                                            "loop": true,
                                            "pagination": {
                                                "el": "#blog-sidebar__pagination",
                                                "type": "bullets",
                                                "clickable": true
                                                },
                                            "navigation": {
                                                "nextEl": "#blog-sidebar__swiper-button-next",
                                                "prevEl": "#blog-sidebar__swiper-button-prev"
                                            },
                                            "autoplay": { "delay": 5000 },
                                            "breakpoints": {
                                                "0": {
                                                    "spaceBetween": 0,
                                                    "slidesPerView": 1
                                                },
                                                "375": {
                                                    "spaceBetween": 0,
                                                    "slidesPerView": 1
                                                },
                                                "575": {
                                                    "spaceBetween": 0,
                                                    "slidesPerView": 1
                                                },
                                                "768": {
                                                    "spaceBetween": 0,
                                                    "slidesPerView": 1
                                                },
                                                "992": {
                                                    "spaceBetween": 0,
                                                    "slidesPerView": 1
                                                },
                                                "1200": {
                                                    "spaceBetween": 0,
                                                    "slidesPerView": 1
                                                }
                                            }
                                        }'>

                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="single-img-box">
                                                            <div className="inner">
                                                                <img src="assets/img/blog/blog-sidebar-img2.jpg" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="swiper-slide">
                                                        <div className="single-img-box">
                                                            <div className="inner">
                                                                <img src="assets/img/blog/blog-sidebar-img2.jpg" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="swiper-slide">
                                                        <div className="single-img-box">
                                                            <div className="inner">
                                                                <img src="assets/img/blog/blog-sidebar-img2.jpg" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/*If we need navigation buttons */}  
                                            <div className="main-slider__nav">
                                                <div className="swiper-button-prev" id="blog-sidebar__swiper-button-next">
                                                    <i className="icon-left-arrow1" aria-hidden="true"></i>
                                                </div>
                                                <div className="swiper-button-next" id="blog-sidebar__swiper-button-prev">
                                                    <i className="icon-left-arrow" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="blog-sidebar__single-content">
                                            <ul className="meta-box">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-calendar"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p><Link href="#">April 21, 2023</Link></p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-user"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p><Link href="#">Saiful Islam</Link></p>
                                                    </div>
                                                </li>
                                            </ul>

                                            <h2><Link href="/blog-details">Integration of Passive Design <br/>
                                                    Strategies</Link></h2>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="/blog-details">
                                                    <span className="txt">read more</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Blog Sidebar Single */}

                                    {/*Start Blog Sidebar Single */}
                                    <div className="blog-sidebar__single">
                                        <div className="blog-sidebar__single-img">
                                            <div className="inner">
                                                <img src="assets/img/blog/blog-sidebar-img3.jpg" alt=""/>
                                            </div>
                                        </div>

                                        <div className="blog-sidebar__single-content">
                                            <ul className="meta-box">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-calendar"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p><Link href="#">April 21, 2023</Link></p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-user"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p><Link href="#">Saiful Islam</Link></p>
                                                    </div>
                                                </li>
                                            </ul>

                                            <h2><Link href="/blog-details">Everything You Need to Learn About <br/>
                                                    Solution for Your Company.</Link></h2>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="/blog-details">
                                                    <span className="txt">read more</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Blog Sidebar Single */}

                                    {/*Start Blog Sidebar Single */}
                                    <div className="blog-sidebar__single">
                                        <div className="blog-sidebar__single-img">
                                            <div className="inner">
                                                <img src="assets/img/blog/blog-sidebar-img4.jpg" alt=""/>
                                            </div>
                                        </div>

                                        <div className="blog-sidebar__single-content">
                                            <ul className="meta-box">
                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-calendar"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p><Link href="#">April 21, 2023</Link></p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="icon-user"></span>
                                                    </div>
                                                    <div className="text">
                                                        <p><Link href="#">Saiful Islam</Link></p>
                                                    </div>
                                                </li>
                                            </ul>

                                            <h2><Link href="/blog-details">Best Architecture Problem Solution <br/>
                                                    and Creativity</Link></h2>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="/blog-details">
                                                    <span className="txt">read more</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Blog Sidebar Single */}

                                    <ul className="styled-pagination clearfix">
                                        <li><Link href="#">1</Link></li>
                                        <li><Link href="#">2</Link></li>
                                        <li><Link href="#">3</Link></li>
                                        <li className="arrow next active"><Link href="#"><span className="icon-left-arrow"></span></Link>
                                        </li>
                                    </ul>
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
                {/*End Blog Sidebar */}
                </div>

            </Layout>
        </>
    )
}
