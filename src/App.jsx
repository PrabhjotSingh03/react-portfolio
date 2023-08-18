import './App.css'
import Nav from '../components/nav/nav';
import Header from '../components/header/header';
import About from '../components/about/about';
import Skills from '../components/skills/skills';
import Projects from '../components/projects/projects';
import Experience from '../components/experience/experience';
import Education from '../components/Education/education';
import Footer from '../components/footer/footer';

function App() {

  return (
    <div className='app'>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects /> 
      <Experience />
      <Education />
      <Footer />
    </div>
  )
}

export default App