import './App.css';
import { About } from './rows/about';
import { FAQ } from './rows/faq';
import { Header } from './rows/header';
import { Nav } from './rows/nav';
import Slider from './rows/slideshow';
import { slideData } from './rows/slideshow';
import "./rows/slideshow.scss"

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Slider heading="game-features" slides={slideData} />
      <FAQ />
      <About />
    </div>
  );
}

export default App;
