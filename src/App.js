// import logo from './logo.svg';
import main from './img/main.jpg'
import main2 from './img/main2.jpg'
import main22 from './img/main2-2.jpg'
import './App.css';

let mainimg = main2

function App() {
  return (
    <div className="main">
      <div className='container'>

        <div className='menu-container'>

          <div className='menu-list-box'>
            <div className='menu-list-line'><h4>a</h4></div>
            <div className='menu-list-line'>b</div>
            <div className='menu-list-line'>c</div>
            <div className='menu-list-line'>d</div>
            <div className='menu-list-line'>e</div>
          </div>
          <div className='menu-address-box'>
            
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
