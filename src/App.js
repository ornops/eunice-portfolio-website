import HeroSection from './components/hero-section/hero-section';
import AboutSection from './components/about-section/about-section';
import ExperienceSection from './components/experience-section/experience-section';
import './index.scss'
function App() {
  return (
    <div className="App">
      <HeroSection/>
      <ExperienceSection/>
    </div>
  );
}

export default App;
