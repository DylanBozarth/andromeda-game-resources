import './App.css';
import { Header } from './rows/header';
import Slider from './rows/slideshow';
import { slideData } from './rows/slideshow';
import "./rows/slideshow.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Slider heading="Example Slider" slides={slideData} />
    </div>
  );
}

export default App;
