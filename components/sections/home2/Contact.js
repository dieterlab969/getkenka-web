import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"

export default function Contact() {
    return (
        <>
     
        {/*Start Contact One */}
        <section className="contact-one">
            <div className="contact-one__bg" style={{backgroundImage: 'url(assets/img/background/contact-v1-bg.jpg)'}}>
                <div className="contact-one__counter">
                    <ul>
                        <li>
                            <div className="content-box">
                                <h2 className="count"><CounterUp end={48} /> <span
                                        className="plus">+</span>
                                </h2>
                                <p>Designers and <br/>
                                    developers</p>
                            </div>
                        </li>
                        <li>
                            <div className="content-box">
                                <h2 className="count"><CounterUp end={256} /> <span
                                        className="plus">+</span>
                                </h2>
                                <p>Awards for digital <br/>
                                    art work</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="contact-one__pattern" style={{backgroundImage: 'url(assets/img/pattern/contact-v1-pattern.jpg)'}}>
            </div>
            <div className="contact-one__img"><img src="assets/img/resource/contact-v1-img1.png" alt=""/></div>
            <div className="container clearfix">
                <div className="contact-one__inner">
                    <div className="contact-one__form wow animated fadeInRight" data-wow-delay="0.1s">
                        <div className="title-box">
                            <p>WE READY TO HELP</p>
                            <h2>Have Any Question?</h2>
                        </div>

                        <form method="post" action="/">
                            <div className="form-group">
                                <input type="text" name="username" placeholder="Your Name" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email Address"  name="form_email" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="phone" placeholder="Phone Number" required=""/>
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Write Your Message"></textarea>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="button-box">
                                        <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                            <span className="txt">
                                                SEND YOUR MEASSAGE
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
        {/*End Contact One */}

        </>
    )
}
