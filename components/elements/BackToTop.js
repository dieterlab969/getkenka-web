
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                // <a className="scroll-to-top scroll-to-target d-block" href="#top">
                //     <i className="fas fa-angle-up"></i>
                // </a>
                <a className="scroll-top scroll-to-target" href="#top">
                <i className="icon-top-arrow"></i>
              </a>
                
            )}
        </>
    )
}