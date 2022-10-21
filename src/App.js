// import logo from './logo.svg';
import main from './img/main.jpg'
import main2 from './img/main2.jpg'
import main22 from './img/main2-2.jpg'
import './App.css';
import {Link} from 'react-router-dom'

let mainimg = main2

function App() {
  return (
    <div className="main">
      <div className='container'>

        <div className='menu-container'>

          <div className='menu-list-box'>
            <div className='menu-list-line'>
              <h4>Main</h4>
              <div className='underline-box' id='underline-box1'>
                <div className='underline-1'></div>
                <div className='underline-2'></div>
              </div>
            </div>

            <div className='menu-list-line'>
              <h4>About</h4>
              <div className='underline-box' id='underline-box2'>
                <div className='underline-1'></div>
                <div className='underline-2'></div>
              </div>
            </div>

            <div className='menu-list-line'>
              <h4>Project</h4>
              <div className='underline-box' id='underline-box3'>
                <div className='underline-1'></div>
                <div className='underline-2'></div>
              </div>
            </div>

            <div className='menu-list-line'>
              <a href='https://jbini.github.io/practice/' target='_blank' rel="noreferrer">Practice</a>
              <div className='underline-box' id='underline-box4'>
                <div className='underline-1'></div>
                <div className='underline-2'></div>
              </div>
            </div>

            <div className='menu-list-line'>
              <a href='https://github.com/jbini' target='_blank' rel="noreferrer">GitHub</a>
              <div className='underline-box' id='underline-box5'>
                <div className='underline-1'></div>
                <div className='underline-2'></div>
              </div>
            </div>

          </div>

          <div className='menu-address-box'>
            <div className='menu-address-line'><h5>jbini515@gmail.com</h5></div>
            <div className='menu-address-line'><h5>010-6338-4143</h5></div>
          </div>

        </div>

        <div className='main-cover-container'>

          <div className='main-cover-imgbox'>
              <img src={mainimg} alt='mainimg'></img>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
