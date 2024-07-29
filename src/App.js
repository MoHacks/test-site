import './App.css';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactUs from './components/ContactUs.jsx';

function App() {
  return (
    <div className="App">
      <Hero />
      <Skills />
      <Testimonials />
      <ContactUs  />
    </div>
  );
}

export default App;
