import './App.css';
import Topbar from './components/Topbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Topbar title="Project-01"/>
      <Header project="Project 01"/>
      <About  name="DK"/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
