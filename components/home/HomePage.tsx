import HeroSection from "./HeroSection"
import About from "./About"
import Projects from "./Projects"
import Products from "./Products"
import TrustSection from "./TrustSection"
import StrengthSection from "./StrengthSection"
import Blogs from "./Blogs"

function HomePage() {
  return (
    <section>
      <HeroSection/>
      <About />
      <Projects />
      <Products />
      <TrustSection />
      <StrengthSection />
      <Blogs />
    </section>
  )
}

export default HomePage