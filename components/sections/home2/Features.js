import Link from "next/link"


export default function Features() {
    return (
        <>
           
           {/*Start Feauture One */}
            <section className="feauture-one">
                <div className="container">
                    <div className="row">
                        {/*Start Feauture One Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="feauture-one__single">
                                <div className="feauture-one__single-text">
                                    <p>EXPLORE FEATURE</p>
                                    <h2><a href="#">Creative Solution</a></h2>
                                </div>

                                <div className="feauture-one__single-bottom">
                                    <div className="btn-box">
                                        <a href="#"><span className="icon-plus"></span></a>
                                    </div>

                                    <div className="icon-box">
                                        <span className="icon-solution"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Start Feauture One Single */}

                        {/*Start Feauture One Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                            <div className="feauture-one__single">
                                <div className="feauture-one__single-text">
                                    <p>EXPLORE FEATURE</p>
                                    <h2><a href="#">Minimal Architect</a></h2>
                                </div>

                                <div className="feauture-one__single-bottom">
                                    <div className="btn-box">
                                        <a href="#"><span className="icon-plus"></span></a>
                                    </div>

                                    <div className="icon-box">
                                        <span className="icon-blueprint"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Start Feauture One Single */}

                        {/*Start Feauture One Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="feauture-one__single">
                                <div className="feauture-one__single-text">
                                    <p>EXPLORE FEATURE</p>
                                    <h2><a href="#">Redesign Dream</a></h2>
                                </div>

                                <div className="feauture-one__single-bottom">
                                    <div className="btn-box">
                                        <a href="#"><span className="icon-plus"></span></a>
                                    </div>

                                    <div className="icon-box">
                                        <span className="icon-office-building"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Start Feauture One Single */}
                    </div>
                </div>
            </section>
            {/*End Feauture One */}

        </>
    )
}
