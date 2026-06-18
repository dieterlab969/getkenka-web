import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Services from "@/components/sections/home3/Services"
import Projects from "@/components/sections/home3/Projects"
import Features from "@/components/sections/home3/Features"
import Features1 from "@/components/sections/home3/Features1"
import Awards from "@/components/sections/home3/Awards"
import Brand from "@/components/sections/home3/Brand"
import Video from "@/components/sections/home3/Video"
import Team from "@/components/sections/home3/Team"
import Blog from "@/components/sections/home3/Blog"
import Testimonial from "@/components/sections/home3/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <Features />
                <About />
                <Projects />
                <Awards />
                <Brand />
                <Services />
                <Features1 />
                <Video />
                <Testimonial />
                <Team />
                <Blog />
            </Layout>
        </>
    )
}