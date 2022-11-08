import './App.css';
import Menu from './component/Menu';
import Home from './Home';
import About from './About';
import Project from './Project';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import main2 from './img/main2.jpg'
import main2me from './img/main2-2.jpg'

let mainimg = main2
let mainimg2 = main2me


function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Menu />
        
        <div className='app-cover-container'>

          <input type='radio' name='MAP-radio' id='MAP-main'></input>
          <input type='radio' name='MAP-radio' id='MAP-about'></input>
          <input type='radio' name='MAP-radio' id='line-btn1'></input>
          <input type='radio' name='MAP-radio' id='line-btn2'></input>
          <input type='radio' name='MAP-radio' id='MAP-project'></input>

          <div className='app-cover-imgbox'>
              <img src={mainimg} alt='mainimg'></img>
          </div>
          <div className='app-cover-imgbox2'>
              <img src={mainimg2} alt='mainimg2'></img>
          </div>

          <div className='app-container'>
          <Home />
          <About />
          <Project />
          </div>

          
          <label className='main-about' for='MAP-about' />
          <label className='about-main' for='MAP-main' />
          <label className='about-project' for='MAP-project' />
          <label className='project-about' for='MAP-about' />

        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
