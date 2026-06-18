 import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Checkout">
                <div>
                <section className="checkout-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12">
                                <div className="form billing-info">
                                    <div className="title">
                                        <h3>Billing details</h3>
                                    </div>
                                    <form method="post" action="checkout">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="field-label">First name *</div>
                                                <div className="field-input">
                                                    <input type="text" name="fname" placeholder="First Name" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="field-label">Last name *</div>
                                                <div className="field-input">
                                                    <input type="text" name="lname" placeholder="Last Name" required />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="field-label">Country / Region *</div>
                                                <div className="field-input">
                                                    <div className="checkout__select-box">
                                                        <select className="selectpicker" name="subject">
                                                            <option value="*">Select Option</option>
                                                            <option value=".category-1">London</option>
                                                            <option value=".category-2">Bangladesh</option>
                                                            <option value=".category-3">United Kingdom (UK)</option>
                                                            <option value=".category-4">Canada</option>
                                                            <option value=".category-5">France</option>
                                                        </select>
                                                        
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="field-label">Street address *</div>
                                                <div className="field-input address">
                                                    <input type="text" name="address" placeholder="Street address" required />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="field-label">Town / City *</div>
                                                <div className="field-input address">
                                                    <input type="text" name="address" placeholder="Town" required />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="field-label">State *</div>
                                                <div className="field-input">
                                                    <div className="checkout__select-box">
                                                    <select className="selectpicker" name="subject">
                                                            <option value="**">Select Option</option>
                                                            <option value=".category-6">London</option>
                                                            <option value=".category-7">Bangladesh</option>
                                                            <option value=".category-8">United Kingdom (UK)</option>
                                                            <option value=".category-9">Canada</option>
                                                            <option value=".category-10">France</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="field-label">ZIP Code *</div>
                                                <div className="field-input">
                                                    <input type="text" name="zipcode" placeholder="ZIP Code " required />
                                                </div>
                                            </div>


                                            <div className="col-lg-6 col-md-6">
                                                <div className="field-label">Phone *</div>
                                                <div className="field-input">
                                                    <input type="tel" name="phone" placeholder="Phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="field-label">Email address *</div>
                                                <div className="field-input">
                                                    <input type="email" name="email" placeholder="Email address" required />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="checkout-area__checkbox">
                                                        <div className="checkout-area__checkbox-single">
                                                            <input type="checkbox" name="free-parking" id="tag_1" />
                                                            <label htmlFor="tag_1"><span></span>Ship to a different address?</label>
                                                        </div>

                                                        <div className="checkout-area__checkbox-single">
                                                            <input type="checkbox" name="friendly-workspace" id="tag_2" defaultChecked />
                                                            <label htmlFor="tag_2"><span></span>Create an account?</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="field-label style2">Order notes (optional)</div>
                                                <div className="field-input">
                                                    <textarea name="order-notes" placeholder="Note about your order"></textarea>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="checkout-area__sidebar">
                                    <div className="checkout-area__sidebar-single">
                                        <div className="title">
                                            <h3>Order summary</h3>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="text-box">
                                                    <div className="img-box">
                                                        <img src="assets/img/shop/checkout-page-img1.jpg" alt="#" />
                                                    </div>
                                                    <div className="title-one">
                                                        <p>Mike and <br />
                                                            honey 1 pic</p>
                                                    </div>
                                                </div>

                                                <div className="price">
                                                    <p>$300.00</p>
                                                </div>
                                            </li>

                                            <li className="bg">
                                                <div className="text-box">
                                                    <div className="title-box">
                                                        <p>Cart Totals</p>
                                                    </div>
                                                </div>

                                                <div className="price">
                                                    <p>$300.00</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="text-box">
                                                    <div className="title-box">
                                                        <p>SubTotal</p>
                                                    </div>
                                                </div>

                                                <div className="price">
                                                    <p>$300.00</p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="text-box">
                                                    <div className="title-box">
                                                        <p>Shipping</p>
                                                    </div>
                                                </div>

                                                <div className="price">
                                                    <p className="text1">Flat rate: $20.00</p>
                                                    <span>Shipping to USA</span>
                                                    <a href="#">Change address</a>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="text-box">
                                                    <div className="title-box">
                                                        <p>Total</p>
                                                    </div>
                                                </div>

                                                <div className="price">
                                                    <p>$320.00</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="checkout-area__sidebar-single mb0">
                                        <div className="title">
                                            <h3>Payment information</h3>
                                        </div>

                                        <div className="checkout__payment">
                                            <div className="checkout__payment__item checkout__payment__item--active">
                                                <h3 className="checkout__payment__title">Direct bank transfer</h3>
                                                <div className="checkout__payment__content">
                                                    Make your payment directly into our bank account.
                                                </div>
                                            </div>

                                            <div className="checkout__payment__item">
                                                <h3 className="checkout__payment__title">Online Payment </h3>
                                                <div className="checkout__payment__content">
                                                    Make your payment directly into our bank account.
                                                </div>
                                            </div>

                                            <div className="checkout__payment__item mb0">
                                                <h3 className="checkout__payment__title">PayPal</h3>
                                                <div className="checkout__payment__content">
                                                    Make your payment directly into our bank account.
                                                </div>
                                            </div>

                                        </div>

                                        <div className="checkout__payment__checkbox">
                                            <div className="checkout-area__checkbox-single">
                                                <input type="checkbox" name="checkbox" id="tag_3" />
                                                <label htmlFor="tag_3"><span></span>I have read and agree to the <br /> website terms and conditions</label>
                                            </div>
                                        </div>

                                        <div className="checkout__payment-btn clearfix">
                                            <Link className="thm-btn" href="/checkout"><span className="txt">Place order</span></Link>
                                        </div>
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