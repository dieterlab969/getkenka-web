import Link from "next/link"
import ProjectSlider2 from '@/components/slider/ProjectSlider2'

export default function Projects() {
    return (
        <>
        {/*Start Project Three */}
        <section className="project-three">
            <div className="shape1"><img src="assets/img/shape/project-v3-shape1.png" alt=""/></div>
            <div className="container">
                <div className="project-three__top">
                    <div className="sec-title">
                        <div className="sub-title">
                            <h5>OUR RECENT PROJECT</h5>
                        </div>
                        <h2>Let’s Check Our Projects</h2>
                    </div>

                    <div className="btn-box">
                        <a href="#">VIEW ALL PROJECTS</a>
                    </div>
                </div>

                <div className="project-three__bottom">
                    <ProjectSlider2/>
                    {/*If we need navigation buttons */}
                    <div className="swiper-pagination" id="project-three__pagination"></div>
                </div>
            </div>
        </section>
        {/*End Project Three */}
        </>
    )
}
