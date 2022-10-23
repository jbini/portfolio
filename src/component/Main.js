import '../css/Main.css';
import main from '../img/main.jpg'
import main2 from '../img/main2.jpg'
import Keyboardiframe from './Keyboardiframe'


let mainimg = main2

export default function Main() {
    return(
        
        <div className='main-cover-container'>
          <Keyboardiframe />

          <div className='main-cover-imgbox'>
              <img src={mainimg} alt='mainimg'></img>
          </div>

          <div className='main-cover-box'>

            <div className='main-cover-sub' id='typing-1'>
              <h3>ㅇ</h3>
            </div>
            <div className='main-cover-sub' id='typing-2'>
              <h3>이</h3>
            </div>
            <div className='main-cover-sub' id='typing-3'>
              <h3>임</h3>
            </div>
            <div className='main-cover-sub' id='typing-4'>
              <h3>임ㅈ</h3>
            </div>
            <div className='main-cover-sub' id='typing-5'>
              <h3>임조</h3>
            </div>
            <div className='main-cover-sub' id='typing-6'>
              <h3>임종</h3>
            </div>
            <div className='main-cover-sub' id='typing-7'>
              <h3>임종ㅂ</h3>
            </div>
            <div className='main-cover-sub' id='typing-8'>
              <h3>임종비</h3>
            </div>
            <div className='main-cover-sub' id='typing-9'>
              <h3>임종빈</h3>
            </div>

            <div className='main-cover-underline'></div>

            <div className='main-cover-content'>
              <h4>인생은 배움이다</h4>
            </div>

          </div>

        </div>
    );
}