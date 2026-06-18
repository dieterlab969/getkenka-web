'use client'
import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Cart">
                <div>
                <section className="cart-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="cart-page__left">
                                    <div className="table-responsive">
                                        <table className="table cart-table">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    <th>Subtotal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="product-box">
                                                            <div className="img-box">
                                                                <div className="inner">
                                                                    <img src="assets/img/shop/cart-page-img1.jpg" alt="#" />
                                                                </div>
                                                                <div className="product-box-croos-icon">
                                                                    <i className="fas fa-times"></i>
                                                                </div>
                                                            </div>
                                                            <h3><Link href="/product-details">Cereal</Link></h3>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="product-quantity">
                                                            <div className="product-quantity-box">
                                                                <div className="input-box">
                                                                <QuantityInput />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        $300.00
                                                    </td>
                                                    <td>
                                                        $300.00
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="cart-cupon__form-box">
                                        <p className="cart-cupon__sub-title">Coupon code:</p>
                                        <form action="#" className="default-form cart-cupon__form">
                                            <input type="text" placeholder="Type Your Coupon Code" className="cart-cupon__input" />
                                            <button className="thm-btn" type="submit">
                                                <span className="txt">Add Code</span>
                                            </button>
                                        </form>
                                        <a href="#" className="cart-cupon__btn">Continue Shopping</a>
                                    </div>

                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-5">
                                <div className="cart-page__right">
                                    <div className="cart-page__total-box">
                                        <div className="cart-page__total-table-outer">
                                            <table className="cart-page__total-table">
                                                <tbody>
                                                    <tr>
                                                        <td>Cart totals</td>
                                                        <td>$300.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Subtotal</td>
                                                        <td>$300.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shipping</td>
                                                        <td>
                                                            <p className="flat-rate">Flat rate: $20.00</p>
                                                            <p className="shipping-usa">Shipping to USA</p>
                                                            <p className="change-address"><a href="#">Change address</a></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Total</td>
                                                        <td>$320.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <button className="proceed-checkout thm-btn" type="button"><span className="txt">Proceed to checkout</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>

            </Layout>
        </>
    )
}