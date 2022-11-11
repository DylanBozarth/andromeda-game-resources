import './App.css';
import { FAQ } from './rows/faq';
import { Footer } from './rows/footer';
import { Header } from './rows/header';
import Slider from './rows/slideshow';
import { slideData } from './rows/slideshow';
import "./rows/slideshow.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Slider heading="game-features" slides={slideData} />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
