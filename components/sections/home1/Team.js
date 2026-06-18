import Link from "next/link"
import TeamSlider2 from '@/components/slider/TeamSlider2'


export default function Team() {
    return (
        <>
            
            {/*Start Team One */}
            <section className="team-one">
                <div className="container">
                    <div className="team-one__top">
                        <div className="sec-title">
                            <div className="sub-title">
                                <h5>OUR TEAM MEMBER</h5>
                            </div>
                            <h2>Our Talented Team <br/>
                                Member Behind Xafran</h2>
                        </div>
                        <div className="btn-box">
                            <a className="thm-btn" href="#">
                                <span className="txt">JOIN OUR TEAM</span>
                            </a>
                        </div>
                    </div>

                    <TeamSlider2/>
                    {/*If we need navigatsion button */}
                </div>
            </section>
            {/*End Team One */}

        </>
    )
}
