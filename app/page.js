import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Services from "@/components/sections/home1/Services"
import Projects from "@/components/sections/home1/Projects"
import Faq from "@/components/sections/home1/Faq"
import Team from "@/components/sections/home1/Team"
import Features from "@/components/sections/home1/Features"
import Features1 from "@/components/sections/home1/Features1"
import FeautureTwo from "@/components/sections/home1/FeautureTwo"
import News from "@/components/sections/home1/News"
import Video from "@/components/sections/home1/Video"
import Brand from "@/components/sections/home1/Brand"
import Testimonial from "@/components/sections/home1/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Features />
                <About />
                <Services />
                <Projects />
                <Team />
                <Faq />
                <FeautureTwo />
                <Video />
                <Brand />
                <Features1 />
                <Testimonial />
                <News />
            </Layout>
        </>
    )
}