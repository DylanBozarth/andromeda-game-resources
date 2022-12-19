import './App.css';
import { About } from './rows/about';
import { FAQ } from './rows/faq';
import { Header } from './rows/header';
import { Nav } from './rows/nav';
import Slider from './rows/slideshow';
import { slideData } from './rows/slideshow';
import "./rows/slideshow.scss"
import { Volunteer } from './rows/volunteer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Slider heading="game-features" slides={slideData} />
      <FAQ />
      <About />
      <Volunteer />
    </div>
  );
}

export default App;
