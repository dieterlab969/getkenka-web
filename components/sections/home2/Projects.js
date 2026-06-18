import ProjectSlider0 from '@/components/slider/ProjectSlider0'

export default function Projects() {
    return (
        <>            
            {/*Start Project Two */}
            <section className="project-two">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h5>OUR RECENT PROJECT</h5>
                        </div>
                        <h2>Last Projects We Designed <br/>
                            Check Our Work</h2>
                    </div>
                    <ProjectSlider0/>
                </div>
            </section>
            {/*End Project Two */}
        </>
    )
}

