import './App.css'
import Nav from '../components/nav/nav';
import Header from '../components/header/header';
import About from '../components/about/about';
import Skills from '../components/skills/skills';
import Projects from '../components/projects/projects';

function App() {

  return (
    <div className='app'>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects /> 
    </div>
  )
}

export default App