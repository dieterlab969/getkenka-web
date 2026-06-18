'use client'
import Link from "next/link"
import { useState } from 'react'
export default function Faq() {
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
            
            
            {/*Start Faq One */}
            <section className="faq-one">
                <div className="shape1"><img src="assets/img/shape/faq-v1-shape1.png" alt=""/></div>
                <div className="container clearfix">
                    <div className="faq-one__inner">
                        <div className="big-title">
                            <h2>FAQ</h2>
                        </div>
                        <ul className="accrodion-grp faq-one__accrodion" data-grp-name="faq-one-accrodion">
                            {/*Start Faq One Single */}
                            <li className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                <div className="accrodion-title">
                                    <h3>How can we improve the lead generation process?</h3>
                                </div>
                                <div className={isActive.key == 1 ? "accrodion-content current" : "accrodion-content"}>
                                    <div className="inner">
                                        <p>The main elements of a marketing strategy are your target audiance
                                            goals and objectives and the tax you will employ to acitvely
                                            markter to your achive the goals.Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit,</p>
                                    </div>
                                </div>
                            </li>
                            {/*End Faq One Single */}

                            {/*Start Faq One Single */}
                            <li className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                <div className="accrodion-title">
                                    <h3>What is content marketing stratagy?</h3>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion-content current" : "accrodion-content"}>
                                    <div className="inner">
                                        <p>The main elements of a marketing strategy are your target audiance
                                            goals and objectives and the tax you will employ to acitvely
                                            markter to your achive the goals.Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit,</p>
                                    </div>
                                </div>
                            </li>
                            {/*End Faq One Single */}

                            {/*Start Faq One Single */}
                            <li className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                <div className="accrodion-title">
                                    <h3>What is the purpose of digital agency?</h3>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion-content current" : "accrodion-content"}>
                                    <div className="inner">
                                        <p>The main elements of a marketing strategy are your target audiance
                                            goals and objectives and the tax you will employ to acitvely
                                            markter to your achive the goals.Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit,</p>
                                    </div>
                                </div>
                            </li>
                            {/*End Faq One Single */}


                            {/*Start Faq One Single */}
                            <li className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                <div className="accrodion-title">
                                    <h3>Can I success on this platform with my experience?</h3>
                                </div>
                                <div className={isActive.key == 4 ? "accrodion-content current" : "accrodion-content"}>
                                    <div className="inner">
                                        <p>The main elements of a marketing strategy are your target audiance
                                            goals and objectives and the tax you will employ to acitvely
                                            markter to your achive the goals.Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit,</p>
                                    </div>
                                </div>
                            </li>
                            {/*End Faq One Single */}

                        </ul>
                    </div>
                </div>
            </section>
            {/*End Faq One */}

        </>
    )
}
