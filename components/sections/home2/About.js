'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import React from 'react';
import Link from "next/link"

export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <> 

    {/*Start About Two */}
        <section className="about-two">
            <div className="container">
                <div className="row">
                    {/*Start About Two Img */}
                    <div className="col-xl-6">
                        <div className="about-two__img">
                            <div className="about-two__img1 wow fadeInLeft" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <div className="inner">
                                    <img src="assets/img/about/about-v2-img1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="about-two__img2 wow fadeInRight" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <img src="assets/img/about/about-v2-img2.jpg" alt=""/>
                                <div className="about-two__video-btn">
                                    <a onClick={() => setOpen(true)} className="about-two__icon video-popup">
                                        <span className="icon-play-button-1"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End About Two Img */}

                    {/*Start About Two Content */}
                    <div className="col-xl-6">
                        <div className="about-two__content">
                            <div className="sec-title">
                                <div className="sub-title">
                                    <h5>KNOW ABOUT XAFRAN</h5>
                                </div>
                                <h2>We Take Care of <br/>
                                    Everything for Your Goals</h2>
                            </div>

                            <div className="about-two__content-text">
                                <p>Nullam eu nibh vitae est tempor molestie id sed ex. Quisque dignissim maximus ipsum,
                                    sed rutrum metus tincidunt et. Sed eget tincidunt
                                    ipsum. Eget tincidunt</p>
                            </div>

                            <div className="about-two__content-list">
                                <ul>
                                    <li>
                                        <p><span className="icon-verified"></span> Feasiblity Studies</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-verified"></span> Conceptual Design</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-verified"></span> Custom design & feauture</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-two__content-bottom">
                                <div className="author-box">
                                    <div className="img-box">
                                        <img src="assets/img/about/about-v2-img3.jpg" alt=""/>
                                    </div>
                                    <div className="signature">
                                        <img src="assets/img/about/signature-1.png" alt=""/>
                                    </div>
                                </div>

                                <div className="btn-box">
                                    <Link className="thm-btn" href="/about">
                                        <span className="txt">Discover More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End About Two Content */}
                </div>
            </div>
        </section>
        {/*End About Two */}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />

        </>
    )
}
