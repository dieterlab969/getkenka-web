import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header4({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header main-header-one style4"> */}
            
            <header className={`main-header main-header-one style4 ${scroll ? "" : ""}`}>
            <div className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
                {/* header-lower */}
                <div className="main-header-four__top">
                    <div className="container">
                        <div className="main-header-four__top-inner">
                            <div className="header-contact-box">
                                <ul>
                                    <li><Link href="tel:123456789">1(800)234-34-45</Link></li>
                                    <li><Link href="mailto:yourmail@email.com">xafrancompany@gmail.com</Link></li>
                                </ul>
                            </div>

                            <div className="header-social-links">
                                <ul>
                                    <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                                    <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                    <li><Link href="#"><span className="icon-tik-tok"></span></Link></li>
                                    <li><Link href="#"><span className="icon-youtube"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                
                <div className="main-header-four__bottom">
                    <div className="container">
                        <div className="menu-area__inner">
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="fas fa-bars"></i></div>
                            <div className="menu-wrap">
                                <nav className="menu-nav">
                                    <div className="main-header-one__inner">
                                        <div className="main-header-one__left">
                                            <div className="logo-box">
                                                <Link href="/"> <img src="assets/img/resource/logo-2.png"
                                                        alt=""/></Link>
                                            </div>
                                        </div>

                                        <div className="main-header-one__middle">
                                            <div className="navbar-wrap main-menu">
                                                <Menu/>
                                            </div>
                                        </div>

                                        <div className="main-header-one__right">
                                            <div className="header-search-box" onClick={handlePopup}>
                                                <Link href="#"
                                                    className="main-menu__search search-toggler icon-search-interface-symbol">
                                                </Link>
                                            </div>

                                            <div className="header-shopping-cart">
                                                <Link href="#"><span className="icon-shopping-cart"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </header>

            <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />
            

            
        </>
    )
}
