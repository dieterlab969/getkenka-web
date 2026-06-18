'use client'
import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Shop Details">
                <div>
                {/*Start Shop Details */}
                <section className="shop-details">
                    <div className="container">
                        <div className="shop-details__top">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="shop-details__top-img">
                                        <div className="inner">
                                            <img src="assets/img/shop/shop-details-img1.jpg" alt=""/>
                                            <div className="shop-details__link">
                                                <Link className="img-popup" href="assets/img/shop/shop-details-img1.jpg"><span
                                                        className="icon-search-interface-symbol"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6">
                                    <div className="shop-details__top-content">
                                        <div className="shop-details__top-content-text1">
                                            <h2>Vaccum Cleaner</h2>
                                            <div className="shop-details__review">
                                                <div className="rating-box">
                                                    <Link href="#"><i className="icon-star"></i></Link>
                                                    <Link href="#"><i className="icon-star"></i></Link>
                                                    <Link href="#"><i className="icon-star"></i></Link>
                                                    <Link href="#"><i className="icon-star"></i></Link>
                                                    <Link href="#"><i className="icon-star"></i></Link>
                                                </div>
                                                <div className="text-box">
                                                    <p>(25 Customer Review)</p>
                                                </div>
                                            </div>
                                            <h3>$19.99</h3>
                                            <p>In today’s online world, a brand’s success lies in combining
                                                technological planning and social strategies to draw
                                                customers in–and keep them coming back</p>
                                        </div>

                                        <div className="shop-details__top-content-text2">
                                            <h4>Size & Fit</h4>
                                            <p>The model (height 6′) is perfect for you</p>
                                        </div>

                                        <div className="shop-details__top-content-text3">
                                            <div className="inner">
                                                <div className="product-quantity">
                                                    <div className="product-quantity-box">
                                                        <div className="input-box">
                                                            <QuantityInput />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="cart-btn">
                                                    <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                        <span className="txt">
                                                            Add to Cart
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="shop-details__top-content-text4">
                                            <p><span>SKU:</span> 124224</p>
                                            <p><span>Category:</span> Crux Indoor Fast and Easy</p>
                                            <p><span>Tag:</span> accessories, business</p>
                                        </div>

                                        <div className="shop-details__top-content-text5">
                                            <div className="title-box">
                                                <p>Share:</p>
                                            </div>
                                            <div className="social-links">
                                                <ul>
                                                    <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                                    <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                                    <li><Link href="#"><span className="icon-pinterest"></span></Link></li>
                                                    <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="shop-details__description">
                            <h2>Our Description</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                                provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                                dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>

                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                                provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                                dolorum fuga similique sunt in culpa qui officia deserunt</p>
                        </div>

                        <div className="shop-details__client-reviews">
                            <div className="title-box">
                                <h2>Client Reviews</h2>
                            </div>

                            <div className="inner">
                                <div className="img-box">
                                    <img src="assets/img/shop/shop-details-img2.jpg" alt=""/>
                                </div>

                                <div className="content-box">
                                    <h4><span>by David Parker /</span> March 28, 2022 </h4>
                                    <div className="rating-box">
                                        <Link href="#"><i className="icon-star"></i></Link>
                                        <Link href="#"><i className="icon-star"></i></Link>
                                        <Link href="#"><i className="icon-star"></i></Link>
                                        <Link href="#"><i className="icon-star"></i></Link>
                                        <Link href="#"><i className="icon-star"></i></Link>
                                    </div>
                                    <p>Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Dictum at tempor
                                        commodo ullamcorper. Sed risus pretium quam vulputate dignissim suspendisse. Habitasse
                                        platea dictumst quisque </p>
                                </div>
                            </div>
                        </div>

                        <div className="shop-details__form">
                            <div className="title-box">
                                <h2>Add Your Review</h2>
                            </div>
                            <form method="post" action="/">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="form-group">
                                            <textarea placeholder="Write Your Message"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="username" placeholder="Your Name" required=""/>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" placeholder="Your Email" defaultValue="" name="form_email" required=""/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="button-box">
                                            <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                <span className="txt">
                                                    SUBMIT
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                {/*End Shop Details */}
                </div>

            </Layout>
        </>
    )
}
