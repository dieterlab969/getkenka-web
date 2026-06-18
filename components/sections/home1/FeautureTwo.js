
export default function FeautureTwo() {
    return (
        <>        
            
            {/*Start Feauture Two */}
            <section className="feauture-two">
                <div className="container">
                    <div className="row">
                        {/*Start Feauture Two Single */}
                        <div className="col-xl-6 wow animated fadeInRight" data-wow-delay="0.1s">
                            <div className="feauture-two__single">
                                <div className="feauture-two__single-img"
                                    style={{backgroundImage: 'url(assets/img/resource/feauture-v2-img1.jpg)'}}>
                                    <div className="icon-box">
                                        <span className="icon-light-bulb"></span>
                                    </div>
                                </div>
                                <div className="feauture-two__single-content">
                                    <h2><a href="#">We Will Provide You <br/>
                                            By Best Design</a></h2>
                                </div>
                            </div>
                        </div>
                        {/*End Feauture Two Single */}

                        {/*Start Feauture Two Single */}
                        <div className="col-xl-6 wow animated fadeInLeft" data-wow-delay="0.1s">
                            <div className="feauture-two__single">
                                <div className="feauture-two__single-img"
                                    style={{backgroundImage: 'url(assets/img/resource/feauture-v2-img2.jpg)'}}>
                                    <div className="icon-box">
                                        <span className="icon-engineer"></span>
                                    </div>
                                </div>
                                <div className="feauture-two__single-content">
                                    <h2><a href="#">We Have Qualified <br/>
                                            Engineer’s Team</a></h2>
                                </div>
                            </div>
                        </div>
                        {/*End Feauture Two Single */}
                    </div>
                </div>
            </section>
            {/*End Feauture Two */}
        </>
    )
}
