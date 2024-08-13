import HeroSection from './components/hero-section/hero-section';
import AboutSection from './components/about-section/about-section';
import ExperienceSection from './components/experience-section/experience-section';
import SkillsEducationSection from './components/skills-education-section/skills-education-section';
import ContactsSection from './components/contacts-section/contacts-section';
import './index.scss'
function App() {
  return (
    <div className="App">
      <HeroSection/>
      <ExperienceSection/>
      <SkillsEducationSection/>
      <ContactsSection/>
    </div>
  );
}

export default App;
