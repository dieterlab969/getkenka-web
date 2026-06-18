import Link from "next/link"

export default function SearchPopup({ isPopup, handlePopup }) {
    return (
        <>
            <div className={`search-popup ${isPopup ? "active" : ""}`}>
            <div className="search-popup__overlay search-toggler" onClick={handlePopup}>
                <div className="search-popup__close-icon">
                    <span className="icon-plus"></span>
                </div>
            </div>
            <div className="search-popup__content">
                <form action="#">
                    <label htmlFor="search" className="sr-only">search here</label>
                    <input type="text" id="search" placeholder="Search Here..." />
                    <button type="submit" aria-label="search submit" className="btn-box">
                        <i className="icon-search-interface-symbol"></i>
                    </button>
                </form>
            </div>
        </div>
        </>
    )
}
