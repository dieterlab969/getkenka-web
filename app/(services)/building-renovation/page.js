'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Building Renovation">
                <div>
                {/*Start Services Details */}
                <section className="services-details">
                    <div className="container">
                        <div className="row">
                            {/*Start Services Details Content */}
                            <div className="col-xl-8">
                                <div className="services-details__content">
                                    <div className="services-details__content-img1">
                                        <img src="assets/img/service/services-details-img5.jpg" alt="#"/>
                                    </div>

                                    <div className="text-box1">
                                        <h2>Building Renovation</h2>
                                        <p className="text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                            varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.
                                            Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan
                                            tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis
                                            libero, vitae commodo nunc quam et ligula</p>

                                        <p className="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                            varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.
                                            Vestibulum aliquam hendrerit molestie.</p>

                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-mark"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                                        varius.
                                                    </p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-check-mark"></span>
                                                </div>
                                                <div className="text">
                                                    <p>Exercitation ullamco laboris consequat.reprehenderit in voluptate
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="text-box2">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                            varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.
                                            Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan
                                            tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis
                                            libero, vitae commodo nunc quam et ligula</p>

                                        <ul>
                                            <li>
                                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                                    deserunt
                                                </p>
                                            </li>

                                            <li>
                                                <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium

                                                </p>
                                            </li>

                                            <li>
                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,</p>

                                            </li>
                                        </ul>
                                    </div>

                                    <div className="services-details__content-img2">
                                        <img src="assets/img/service/services-details-img2.jpg" alt="#"/>
                                    </div>

                                    <div className="text-box3">
                                        <p className="text1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                            officia deserunt
                                            mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error voluptatem
                                            accusantium doloremque laudantium, totam rem aperiam, </p>

                                        <p className="text2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                            sunt in culpa quisit ,officia deserunt mollit anim id est laborum. Sed ut
                                            perspiciatis unde omnis is amet natus error sit voluptatem accusantium doloremque
                                            laudantium, totam reaperia eaque ipsa quae ab ilnventore veritatis et quasi
                                            architecto beatae vitae dicta sunt </p>
                                    </div>

                                    <div className="text-box4">
                                        <div className="row">
                                            <div className="col-xl-5 col-md-6">
                                                <div className="text-box4-single">
                                                    <div className="title-box">
                                                        <h2>Our Goals</h2>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-check-mark"></span>
                                                            </div>

                                                            <div className="text-box">
                                                                <p>icon-check-mark</p>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-check-mark"></span>
                                                            </div>

                                                            <div className="text-box">
                                                                <p>Lorem ipsum dolor sit dgdr</p>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="icon-box">
                                                                <span className="icon-check-mark"></span>
                                                            </div>

                                                            <div className="text-box">
                                                                <p>Maecenas varius tortor</p>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>

                                            <div className="col-xl-7 col-md-6">
                                                <div className="text-box4-single">
                                                    <div className="title-box">
                                                        <h2>The Challenges</h2>
                                                    </div>
                                                    <div className="text">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                                                            varius tortor nibh, sit amet tempor finibus et. Aenean eu enim
                                                            justo. Vestibulum</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="services-details__accordion">
                                    <ul className="accrodion-grp faq-one__accrodion" data-grp-name="faq-one-accrodion">
                                    {/*Start Faq One Single */}
                                    <li className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h3>I'm a total beginner. Can I still follow along?</h3>
                                        </div>
                                        <div className={isActive.key == 1 ? "accrodion-content current" : "accrodion-content"}>
                                            <div className="inner">
                                                <p>Your applicant may have limited help desk wexperience. In that case, look for
                                                    applicants who are motivated to grow and have some transferable </p>
                                            </div>
                                        </div>
                                    </li>
                                    {/*End Faq One Single */}

                                    {/*Start Faq One Single */}
                                    <li className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h3>Which technical skills would you improve?</h3>
                                        </div>
                                        <div className={isActive.key == 2 ? "accrodion-content current" : "accrodion-content"}>
                                            <div className="inner">
                                                <p>Your applicant may have limited help desk wexperience. In that case, look for
                                                    applicants who are motivated to grow and have some transferable </p>
                                            </div>
                                        </div>
                                    </li>
                                    {/*End Faq One Single */}

                                    {/*Start Faq One Single */}
                                    <li className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h3>What do Logical Drives do?</h3>
                                        </div>
                                        <div className={isActive.key == 3 ? "accrodion-content current" : "accrodion-content"}>
                                            <div className="inner">
                                                <p>Your applicant may have limited help desk wexperience. In that case, look for
                                                    applicants who are motivated to grow and have some transferable </p>
                                            </div>
                                        </div>
                                    </li>
                                    {/*End Faq One Single */}

                                    {/*Start Faq One Single */}
                                    <li className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h3>What about our safety measures ? </h3>
                                        </div>
                                        <div className={isActive.key == 4 ? "accrodion-content current" : "accrodion-content"}>
                                            <div className="inner">
                                                <p>Your applicant may have limited help desk wexperience. In that case, look for
                                                    applicants who are motivated to grow and have some transferable </p>
                                            </div>
                                        </div>
                                    </li>
                                    {/*End Faq One Single */}
                                </ul>
                                    </div>
                                </div>
                            </div>
                            {/*End Services Details Content */}

                            {/*Start Sidebar */}
                            <div className="col-xl-4">
                                <div className="sidebar">
                                    {/*Start Sidebar Single */}
                                    <div className="sidebar__single sidebar__category">
                                        <h3 className="sidebar__title">Categories</h3>

                                        <ul className="sidebar__category-list">
                                            <li><Link href="/architecture">Architecture <span
                                                        className="icon-left-arrow"></span></Link></li>
                                            <li><Link href="/interior-design">Interior Design <span
                                                        className="icon-left-arrow"></span></Link></li>
                                            <li><Link href="/uiux-designing">Ui/Ux Designing <span
                                                        className="icon-left-arrow"></span></Link></li>
                                            <li><Link className="active" href="#">Building Renovation <span
                                                        className="icon-left-arrow"></span></Link></li>
                                            <li><Link href="/construction-site">Construction Site <span
                                                        className="icon-left-arrow"></span></Link></li>
                                            <li><Link href="/security-system">Security System <span
                                                        className="icon-left-arrow"></span></Link></li>
                                        </ul>
                                    </div>
                                    {/*End Sidebar Single */}

                                    {/*Start Sidebar Single */}
                                    <div className="sidebar__single sidebar__support">
                                        <div className="sidebar__support-bg"
                                            style={{backgroundImage: 'url(assets/img/resource/sidebar-support-bg.jpg)'}}></div>
                                        <div className="sidebar__support__inner text-center">
                                            <h2>Need Any Types <br/>
                                                of Service <br/>
                                                from us</h2>
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#">
                                                    <span className="txt">FIND SOLUTION</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Sidebar Single */}

                                    {/*Start Sidebar Single */}
                                    <div className="sidebar__single sidebar__contact">
                                        <div className="sidebar__contact-inner">
                                            <div className="icon-box">
                                                <span className="icon-phone"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>You can call anytime </p>
                                                <h4>Free <Link href="tel:123456789">+99 (786) 8765</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Sidebar Single */}
                                </div>
                            </div>
                            {/*End Sidebar */}
                        </div>
                    </div>
                </section>
                {/*End Services Details */}
                </div>

            </Layout>
        </>
    )
}