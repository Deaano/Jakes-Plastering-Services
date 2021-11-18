import Nav from "./Components/Nav/Nav";
import './App.css';
import Header from "./Components/Header";
import Carousel from './Components/Carousel'
import Qualities from "./Components/Qualities";
import About from "./Components/About";





function App() {
  return (
    <div className='app'>
      <Nav />
      <div className='page-wrapper'>
      <Carousel />
      <Header />
     
      <Qualities />
      <About />
      </div>
    </div>
  );
}

export default App;
