
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const HomePage = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="projects">
        <Projects/>
      </section>


      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
};

export default HomePage;
