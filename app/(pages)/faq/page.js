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
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Our Faq’s">
                <div>
                {/*Start Faq One */}
                <section className="faq-one faq-one--faq">
                    <div className="container clearfix">
                        <div className="row">

                            <div className="col-xl-6">
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


                            <div className="col-xl-6">
                                <ul className="accrodion-grp faq-one__accrodion" data-grp-name="faq-one-accrodion">
                                    {/* Start Faq One Single*/}
                                    <li className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                        <div className="accrodion-title">
                                            <h3>I'm a total beginner. Can I still follow along?</h3>
                                        </div>
                                        <div className={isActive.key == 5 ? "accrodion-content current" : "accrodion-content"}>
                                            <div className="inner">
                                                <p>Your applicant may have limited help desk wexperience. In that case, look for
                                                    applicants who are motivated to grow and have some transferable </p>
                                            </div>
                                        </div>
                                    </li>
                                    {/*End Faq One Single- */}

                                    {/*Start Faq One Single */}
                                    <li className={isActive.key == 6 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(6)}>
                                        <div className="accrodion-title">
                                            <h3>Which technical skills would you improve?</h3>
                                        </div>
                                        <div className={isActive.key == 6 ? "accrodion-content current" : "accrodion-content"}>
                                            <div className="inner">
                                                <p>Your applicant may have limited help desk wexperience. In that case, look for
                                                    applicants who are motivated to grow and have some transferable </p>
                                            </div>
                                        </div>
                                    </li>
                                    {/*End Faq One Single- */}

                                    {/*Start Faq One Single */}
                                    <li className={isActive.key == 7 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(7)}>
                                        <div className="accrodion-title">
                                            <h3>What do Logical Drives do?</h3>
                                        </div>
                                        <div className={isActive.key == 7 ? "accrodion-content current" : "accrodion-content"}>
                                            <div className="inner">
                                                <p>Your applicant may have limited help desk wexperience. In that case, look for
                                                    applicants who are motivated to grow and have some transferable </p>
                                            </div>
                                        </div>
                                    </li>
                                    {/*End Faq One Single- */}

                                    {/*Start Faq One Single */}
                                    <li className={isActive.key == 8 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(8)}>
                                        <div className="accrodion-title">
                                            <h3>What about our safety measures ? </h3>
                                        </div>
                                        <div className={isActive.key == 8 ? "accrodion-content current" : "accrodion-content"}>
                                            <div className="inner">
                                                <p>Your applicant may have limited help desk wexperience. In that case, look for
                                                    applicants who are motivated to grow and have some transferable </p>
                                            </div>
                                        </div>
                                    </li>
                                    {/*End Faq One Single- */}

                                    {/*Start Faq One Single */}
                                    <li className={isActive.key == 9 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(9)}>
                                        <div className="accrodion-title">
                                            <h3>I'm a total beginner. Can I still follow along?</h3>
                                        </div>
                                        <div className={isActive.key == 9 ? "accrodion-content current" : "accrodion-content"}>
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
                </section>
                {/*End Faq One */}

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

