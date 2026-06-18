import Link from "next/link"


export default function Features1() {
    return (
        <>
        
        {/*Start Feauture Three */}
        <section className="feauture-three">
            <div className="shape1 float-bob-y"><img src="assets/img/shape/feauture-v3-shape1.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    {/*Start Feauture Three Img */}
                    <div className="col-xl-5 wow animated fadeInLeft" data-wow-delay="0.1s">
                        <div className="feauture-three__img">
                            <div className="inner clearfix">
                                <img src="assets/img/resource/feauture-v3-img1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/*End Feauture Three Img */}

                    {/*Start Feauture Three Content */}
                    <div className="col-xl-7">
                        <div className="feauture-three__content">
                            <div className="sec-title">
                                <div className="sub-title">
                                    <h5>EXPLORE OUR FEAUTURE</h5>
                                </div>
                                <h2>We provide the best <br/>
                                    architect & interior design</h2>
                            </div>

                            <div className="text-box">
                                <p>Arki features minimal and stylish design. The theme is well crafted for all the
                                    modern architect and interior design website. With Arki, it makes your website look
                                    even more attractive and impressive to</p>
                            </div>
                            <div className="btn-box">
                                <a className="thm-btn" href="#">
                                    <span className="txt">Discover More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*End Feauture Three Content */}
                </div>
            </div>
        </section>
        {/*End Feauture Three */}
        </>
    )
}
