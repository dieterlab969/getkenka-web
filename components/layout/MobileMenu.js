'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>           
            {/*Mobile Menu */}
            <div className="mobile-menu">
                <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times"></i></div>
                    <div className="nav-logo">
                        <Link href="/"><img src="assets/img/resource/logo-2.png" alt="Logo"/></Link>
                    </div>
                    <div className="menu-outer">
                        <ul className="navigation clearfix">
                            <li className="active menu-item-has-children"> <Link href="#" onClick={handleMobileMenu}>Home</Link>
                                <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                    <li><Link href="/" onClick={handleMobileMenu}>Home One</Link></li>
                                    <li><Link href="/index-2" onClick={handleMobileMenu}>Home Two</Link></li>
                                    <li><Link href="/index-3" onClick={handleMobileMenu}>Home Three</Link></li>
                                </ul>
                                <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                            </li>
                            <li><Link href="/about">About</Link></li>
                            <li className="menu-item-has-children"><Link href="#" onClick={handleMobileMenu}>Services</Link>
                                <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <li><Link href="/service" onClick={handleMobileMenu}>Services</Link></li>
                                    <li><Link href="/architecture" onClick={handleMobileMenu}>Architecture</Link></li>
                                    <li><Link href="/interior-design" onClick={handleMobileMenu}>Interior Design</Link>
                                    </li>
                                    <li><Link href="/uiux-designing" onClick={handleMobileMenu}>UiUx Designing</Link>
                                    </li>
                                    <li><Link href="/building-renovation" onClick={handleMobileMenu}>Building Renovation</Link>
                                    </li>
                                    <li><Link href="/construction-site" onClick={handleMobileMenu}>Construction Site</Link>
                                    </li>
                                    <li><Link href="/security-system" onClick={handleMobileMenu}>Security System</Link>
                                    </li>
                                </ul>
                                <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                            </li>
                            <li className="menu-item-has-children"><Link href="#" onClick={handleMobileMenu}>Pages</Link>
                                <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                    <li><Link href="/team" onClick={handleMobileMenu}>Team</Link></li>
                                    <li><Link href="/team-details" onClick={handleMobileMenu}>Team Details</Link>
                                    </li>
                                    <li><Link href="/projects" onClick={handleMobileMenu}>Projects</Link></li>
                                    <li><Link href="/project-details" onClick={handleMobileMenu}>Project
                                            Details</Link></li>
                                    <li><Link href="/testimonials" onClick={handleMobileMenu}>Testimonials</Link></li>
                                    <li><Link href="/pricing" onClick={handleMobileMenu}>Pricing</Link></li>
                                    <li><Link href="/faq" onClick={handleMobileMenu}>Faq</Link></li>
                                    <li><Link href="/error" onClick={handleMobileMenu}>Error</Link></li>
                                </ul>
                                <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                            </li>
                            <li className="menu-item-has-children" onClick={handleMobileMenu}><Link href="#">Shop</Link>
                                <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                    <li><Link href="/shop" onClick={handleMobileMenu}>Shop</Link></li>
                                    <li><Link href="/shop-details" onClick={handleMobileMenu}>Shop Details</Link>
                                    </li>
                                    <li><Link href="/cart" onClick={handleMobileMenu}>Cart</Link></li>
                                    <li><Link href="checkout" onClick={handleMobileMenu}>Checkout</Link></li>
                                </ul>
                                <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                            </li>
                            <li className="menu-item-has-children"><Link href="#" onClick={handleMobileMenu}>Blog</Link>
                                <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                    <li><Link href="/blog" onClick={handleMobileMenu}>Blog</Link></li>
                                    <li><Link href="/blog-sidebar" onClick={handleMobileMenu}>Blog Sidebar</Link>
                                    </li>
                                    <li><Link href="/blog-details" onClick={handleMobileMenu}>Blog Details</Link>
                                    </li>
                                </ul>
                                <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div>
                            </li>
                            <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
                        </ul>
                        {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
                    </div>
                    <div className="contact-info">
                        <div className="icon-box"><span className="icon-call"></span>
                        </div>
                        <p><Link href="tel:123456789">(629) 555-0129</Link></p>
                    </div>
                    <div className="social-links">
                        <ul className="clearfix list-wrap">
                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="menu-backdrop" onClick={handleMobileMenu}></div>
            {/*End Mobile Menu */}
            {/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
        </>
    )
}
