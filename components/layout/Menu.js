import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            {/* <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home Page 01</Link></li>
                        <li><Link href="/index-2">Home Page 02</Link></li>
                        <li><Link href="/index-3">Home Page 03</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Services</Link>
                    <ul>
                        <li><Link href="/services1">Our Services 1</Link></li>
                        <li><Link href="/services2">Our Services 2</Link></li>
                        <li><Link href="/tax-management">Tax Management</Link></li>
                        <li><Link href="/strategy-planning">Strategy & Planning</Link></li>
                        <li><Link href="/program-manager">Program Manager</Link></li>
                        <li><Link href="/investment-policy">Investment Policy</Link></li>
                        <li><Link href="/financial-advices">Financial Advices</Link></li>
                        <li><Link href="/insurance-strategy">Insurance Strategy</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Pages</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">Team</Link>
                            <ul>
                                <li><Link href="/team">Team Member</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/pricing-table">Pricing Table</Link></li>
                        <li><Link href="/career">Career</Link></li>
                        <li><Link href="/faq">Faq’s</Link></li>
                        <li><Link href="/testimonials">Testimonials</Link></li>
                        <li><Link href="/404">404</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Shop</Link>
                    <ul>
                        <li><Link href="/shop">Products</Link></li>
                        <li><Link href="/product-details">Product Details</Link></li>
                        <li><Link href="/shopping-cart">Shopping Cart</Link></li>
                        <li><Link href="/checkout">Checkout</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-2">Blog Standard</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li> 
                <li><Link href="/contact">Contact</Link></li>
            </ul> */}
                                    <ul className="navigation">
                                        <li className="active menu-item-has-children"><Link href="#">Home</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/">Home One</Link></li>
                                                <li><Link href="/index-2">Home Two</Link></li>
                                                <li><Link href="/index-3">Home Three</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/about">About</Link></li>
                                        <li className="menu-item-has-children"><Link href="#">Services</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/service">Services</Link></li>
                                                <li><Link href="/architecture">Architecture</Link></li>
                                                <li><Link href="/interior-design">Interior Design</Link>
                                                </li>
                                                <li><Link href="/uiux-designing">UiUx Designing</Link>
                                                </li>
                                                <li><Link href="/building-renovation">Building Renovation</Link>
                                                </li>
                                                <li><Link href="/construction-site">Construction Site</Link>
                                                </li>
                                                <li><Link href="/security-system">Security System</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><Link href="#">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/team">Team</Link></li>
                                                <li><Link href="/team-details">Team Details</Link>
                                                </li>
                                                <li><Link href="/projects">Projects</Link></li>
                                                <li><Link href="/project-details">Project
                                                        Details</Link></li>
                                                <li><Link href="/testimonials">Testimonials</Link></li>
                                                <li><Link href="/pricing">Pricing</Link></li>
                                                <li><Link href="/faq">Faq</Link></li>
                                                <li><Link href="/error">Error</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><Link href="#">Shop</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/shop">Shop</Link></li>
                                                <li><Link href="/shop-details">Shop Details</Link>
                                                </li>
                                                <li><Link href="/cart">Cart</Link></li>
                                                <li><Link href="/checkout">Checkout</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><Link href="#">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/blog-sidebar">Blog Sidebar</Link>
                                                </li>
                                                <li><Link href="/blog-details">Blog Details</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
        </>
    )
}
