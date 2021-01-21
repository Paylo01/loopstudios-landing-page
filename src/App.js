import './App.css';
import Hero from './components/hero-area/hero.component';
import AboutUs from './components/about-us/about-us.component';
import Creations from './components/creations/creations.component';

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <Creations />
    </div>
  );
}

export default App;
