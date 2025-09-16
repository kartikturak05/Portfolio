
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Experience from './Experience';

const HomePage = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="experience">
        <Experience/>
      </section>

      <section id="projects">
        <Projects/>
      </section>


      <section id="contact">
        <Contact/>
      </section>

      <section id="footer">
        <Footer/>
      </section>
    </div>
  );
};

export default HomePage;
