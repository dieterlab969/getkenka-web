import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Our Shop">
                <div>

                    {/*Start Shop Page */}
                    <section className="shop-page">
                        <div className="container">
                            <div className="shop-page__top">
                                <div className="shop-page__top-inner">
                                    <div className="shop-page__top-left">
                                        <p>Showing 1-8 of 16 results</p>
                                    </div>

                                    <div className="shop-page__top-right">
                                        <div className="product__showing-sort">
                                            <select className="selectpicker" aria-label="Default select example">
                                                <option value="**">Default sorting</option>
                                                <option value=".category-6">Default sorting 01</option>
                                                <option value=".category-7">Default sorting 02</option>
                                                <option value=".category-8">Default sorting 03</option>
                                            </select>
                                        </div>

                                        <ul className="product-view-style">
                                            <li><Link href="#"><span className="fa fa-th"></span></Link></li>
                                            <li><Link href="#"><span className="fa fa-list"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {/*Start Shop Page Single */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                    <div className="shop-page__single">
                                        <div className="shop-page__single-img">
                                            <img src="assets/img/shop/shop-page-img1.jpg" alt="#"/>
                                            <div className="text">Sale</div>
                                            <div className="btn-box">
                                                <Link href="#">ADD TO CART</Link>
                                            </div>
                                        </div>

                                        <div className="shop-page__single-content">
                                            <div className="text-box">
                                                <h4><Link href="/shop-details">Lather Bag</Link></h4>
                                                <p>$325.00</p>
                                            </div>

                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Shop Page Single */}

                                {/*Start Shop Page Single */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                    <div className="shop-page__single">
                                        <div className="shop-page__single-img">
                                            <img src="assets/img/shop/shop-page-img2.jpg" alt="#"/>

                                            <div className="btn-box">
                                                <Link href="#">ADD TO CART</Link>
                                            </div>
                                        </div>

                                        <div className="shop-page__single-content">
                                            <div className="text-box">
                                                <h4><Link href="/shop-details">Eye Castal</Link></h4>
                                                <p>$25.00</p>
                                            </div>

                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Shop Page Single */}

                                {/*Start Shop Page Single */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                    <div className="shop-page__single">
                                        <div className="shop-page__single-img">
                                            <img src="assets/img/shop/shop-page-img3.jpg" alt="#"/>
                                            <div className="text">Sale</div>
                                            <div className="btn-box">
                                                <Link href="#">ADD TO CART</Link>
                                            </div>
                                        </div>

                                        <div className="shop-page__single-content">
                                            <div className="text-box">
                                                <h4><Link href="/shop-details">High Heel Baby</Link></h4>
                                                <p>$75.00</p>
                                            </div>

                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Shop Page Single */}

                                {/*Start Shop Page Single */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                    <div className="shop-page__single">
                                        <div className="shop-page__single-img">
                                            <img src="assets/img/shop/shop-page-img4.jpg" alt="#"/>
                                            <div className="text">Sale</div>
                                            <div className="btn-box">
                                                <Link href="#">ADD TO CART</Link>
                                            </div>
                                        </div>

                                        <div className="shop-page__single-content">
                                            <div className="text-box">
                                                <h4><Link href="/shop-details">White Shoes</Link></h4>
                                                <p>$325.00</p>
                                            </div>

                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Shop Page Single */}

                                {/*Start Shop Page Single */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                    <div className="shop-page__single">
                                        <div className="shop-page__single-img">
                                            <img src="assets/img/shop/shop-page-img5.jpg" alt="#"/>

                                            <div className="btn-box">
                                                <Link href="#">ADD TO CART</Link>
                                            </div>
                                        </div>

                                        <div className="shop-page__single-content">
                                            <div className="text-box">
                                                <h4><Link href="/shop-details">Black Jacket</Link></h4>
                                                <p>$99.00</p>
                                            </div>

                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Shop Page Single */}

                                {/*Start Shop Page Single */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                    <div className="shop-page__single">
                                        <div className="shop-page__single-img">
                                            <img src="assets/img/shop/shop-page-img6.jpg" alt="#"/>
                                            <div className="text">Sale</div>
                                            <div className="btn-box">
                                                <Link href="#">ADD TO CART</Link>
                                            </div>
                                        </div>

                                        <div className="shop-page__single-content">
                                            <div className="text-box">
                                                <h4><Link href="/shop-details">Diamond Ring</Link></h4>
                                                <p>$325.00</p>
                                            </div>

                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Shop Page Single */}

                                {/*Start Shop Page Single */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                    <div className="shop-page__single">
                                        <div className="shop-page__single-img">
                                            <img src="assets/img/shop/shop-page-img7.jpg" alt="#"/>
                                            <div className="text">Sale</div>
                                            <div className="btn-box">
                                                <Link href="#">ADD TO CART</Link>
                                            </div>
                                        </div>

                                        <div className="shop-page__single-content">
                                            <div className="text-box">
                                                <h4><Link href="/shop-details">Makeup Box</Link></h4>
                                                <p>$85.00</p>
                                            </div>

                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Shop Page Single */}

                                {/*Start Shop Page Single */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                    <div className="shop-page__single">
                                        <div className="shop-page__single-img">
                                            <img src="assets/img/shop/shop-page-img8.jpg" alt="#"/>

                                            <div className="btn-box">
                                                <Link href="#">ADD TO CART</Link>
                                            </div>
                                        </div>

                                        <div className="shop-page__single-content">
                                            <div className="text-box">
                                                <h4><Link href="/shop-details">Sofa With Balish</Link></h4>
                                                <p>$89.00</p>
                                            </div>

                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Shop Page Single */}

                                {/*Start Shop Page Single */}
                                <div className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                    <div className="shop-page__single">
                                        <div className="shop-page__single-img">
                                            <img src="assets/img/shop/shop-page-img9.jpg" alt="#"/>
                                            <div className="text">Sale</div>
                                            <div className="btn-box">
                                                <Link href="#">ADD TO CART</Link>
                                            </div>
                                        </div>

                                        <div className="shop-page__single-content">
                                            <div className="text-box">
                                                <h4><Link href="/shop-details">Baby Sunglass</Link></h4>
                                                <p>$35.00</p>
                                            </div>

                                            <div className="rating-box">
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                                <Link href="#"><i className="icon-star"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*End Shop Page Single */}

                                <ul className="styled-pagination text-center clearfix">
                                    <li><Link href="#">1</Link></li>
                                    <li><Link href="#">2</Link></li>
                                    <li><Link href="#">3</Link></li>
                                    <li className="arrow next active"><Link href="#"><span className="icon-left-arrow"></span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/*End Shop Page */}

                </div>

            </Layout>
        </>
    )
}
