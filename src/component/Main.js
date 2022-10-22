import '../css/Main.css';
import main from '../img/main.jpg'
import main2 from '../img/main2.jpg'
import main22 from '../img/main2-2.jpg'

let mainimg = main2

export default function Main() {
    return(
        <div className='main-cover-container'>

          <div className='main-cover-imgbox'>
              <img src={mainimg} alt='mainimg'></img>
          </div>

          <div className='main-cover-box'>
            <div className='main-cover-sub'></div>
            <div className='main-cover-content'></div>
          </div>

        </div>
    );
}