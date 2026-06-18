

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error404() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="404 Error">
            {/*Start Error Page */}
            <section className="error-page">
                <div className="error-page__shape1">
                    <img src="assets/img/shape/error-page-bg.png" alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="error-page__wrapper text-center">
                                <div className="error-page__content">
                                    <h2>404</h2>
                                    <h3>Opps! Page Not Found</h3>
                                    <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
                                    <div className="btn-box">
                                        <Link className="thm-btn" href="/">
                                            <span className="txt">back to home</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Error Page */}

            </Layout>
        </>
    )
}
