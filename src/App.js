import './App.css';
import Menu from './component/Menu';
import Home from './Home';
import About from './About';
import Project from './Project';
// import './component/MainClick';
// import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import main2 from './img/main2.jpg'
import main2me from './img/main2-2.jpg'
import keyboard1 from './audio/keyboardsound1.mp3'
import keyboard2 from './audio/keyboardsound2.mp3'
import Projectinfo from './component/Projectinfo';
import { videoPause } from './component/Projectinfo';
// import {projectI} from './component/Projectinfo';
// import './MainClick';
import Keyboardiframe from './component/Keyboardiframe'
import Keyboardiframetwo from './component/Keyboardiframetwo'
import { useRef } from 'react';
import $ from 'jquery';


// document.getElementById('MAP-main').addEventListener('click', function(){
//   document.getElementById('iframeaudio').contentDocument.location.reload(true);
// });
// document.getElementById('MAP-main').addEventListener('click', function(){
//   document.getElementById('project-iframe1').contentDocument.location.reload(true);
// });
// 에러 react cannot read properties of null (reading 'addeventlistener') 

function App() {

  let mainimg = main2
  let mainimg2 = main2me
  // const forClick = document.getElementById('MAP-main');
  // const forAudio = document.getElementById('iframeaudio');
  // const test1 = () => {
  //   document.getElementById(forAudio).contentDocument.location.reload(true);
  // }
  let KS = keyboard1;
  
  // let projectI = document.getElementById('projectIframe1');
  // let PP = projectI;

  function reloadFunction() {
    ("projectIframe1").load(window.location.href + "#projectIframe1");
  }


  function changeSound() {
    // KS = KS === keyboard1 ? keyboard2 : keyboard1;
    // console.log(KS);
    document.getElementById("iframeaudio").contentDocument.location.reload(true);
  }
  // function reloadPreview() {
  //   console.log(PP);
  //   document.getElementById(PP).load(window.location.href + "#projectIframe1");
  // }

  return (
      <div className="main">
        <Menu />
        <iframe src={KS} allow="autoplay" id="iframeaudio" name='audioIframe'>{KS}</iframe>
        <div className='app-cover-container'>

          <input type='radio' name='MAP-radio' id='MAP-main' onClick={changeSound}></input>
          <input type='radio' name='MAP-radio' id='MAP-about'></input>
          <input type='radio' name='MAP-radio' id='line-btn1'></input>
          <input type='radio' name='MAP-radio' id='line-btn2'></input>
          <input type='radio' name='MAP-radio' id='MAP-project'></input>
          <input type='radio' name='MAP-radio' id='project-info'></input>
          <input type='radio' name='MAP-radio' id='project-pre'></input>
          <input type='radio' name='MAP-radio' id='project-eva'></input>
          <input type='radio' name='MAP-radio' id='project-dark'></input>
          <input type='radio' name='MAP-radio' id='MAP-main-project'></input>
          <input type='radio' name='MAP-radio' id='MAP-project-main'></input>

          <div className='app-cover-imgbox'>
              <img src={mainimg} alt='mainimg'></img>
          </div>
          <div className='app-cover-imgbox2'>
              <img src={mainimg2} alt='mainimg2'></img>
          </div>

          <div className='app-container'>
          <Home />
          <About />
          <Projectinfo iframeId={'projectIframe1'} />
          </div>

          
          <label className='main-about' for='MAP-about'/>
          <label className='about-main' for='MAP-main' id='aceCard' />
          <label className='about-project' for='MAP-project' />
          <label className='project-about' for='MAP-about' onClick={videoPause} />
          
        </div>
      </div>
      
  );
  
}

export default App;
