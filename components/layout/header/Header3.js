import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-three"> */}
            
            <header className={`main-header main-header-one style2 style3 ${scroll ? "" : ""}`}>
                <div className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
                    {/* header-lower */}
                    <div className="auto-container">
                    <div className="menu-area__inner">
                        <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="fas fa-bars"></i></div>
                        <div className="menu-wrap">
                            <nav className="menu-nav">
                                <div className="main-header-one__inner">
                                    <div className="main-header-one__left">
                                        <div className="logo-box">
                                            <a href="/"> <img src="assets/img/resource/logo-2.png" alt=""/></a>
                                        </div>
                                    </div>

                                    <div className="main-header-three__middle">
                                        <div className="navbar-wrap main-menu">
                                            <Menu/>
                                        </div>
                                    </div>

                                    <div className="main-header-one__right">
                                        <div className="header-search-box" onClick={handlePopup}>
                                            <a href="#"
                                                className="main-menu__search search-toggler icon-search-interface-symbol">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                </div>
                <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />
            </header>
            
        </>
    )
}
