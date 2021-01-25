import './App.css';
import Hero from './components/hero-area/hero.component';
import AboutUs from './components/about-us/about-us.component';
import Creations from './components/creations/creations.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;
