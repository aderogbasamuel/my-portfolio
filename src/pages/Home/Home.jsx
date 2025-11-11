import Contact from "../Contact/Contact";
import EducationSection from "../Education/Education";
import ExperienceSection from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import SkillsSection from "../Skills/Skills";
import About from "@/pages/About/About";
function HomePage() {
    return ( 
        <main>
            <section>
                <Hero />
                <About />
                <Projects/>
                <ExperienceSection />
                <EducationSection />
                <SkillsSection />
                <Contact />
                <Footer/>
            </section>
        </main>
     );
}

export default HomePage;