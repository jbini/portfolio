import '../css/Main.css';
import main2 from '../img/main2.jpg'
import main2me from '../img/main2-2.jpg'
import Keyboardiframe from './Keyboardiframe'
import {Link} from 'react-router-dom';



let mainimg = main2
let mainimg2 = main2me

export default function Main() {
    return(
        
        <div className='main-cover-container' id='twoPair'>
          <Keyboardiframe />

          {/* <div className='main-cover-imgbox'>
              <img src={mainimg} alt='mainimg'></img>
          </div>
          <div className='main-cover-imgbox2'>
              <img src={mainimg2} alt='mainimg2'></img>
          </div> */}

          {/* <div className='main-cover-line-box'>
            <div className='main-cover-line'></div>
          </div> */}

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
            
            <div className='main-cover-content2'>
              <h5>배움을 얻을수록 전에는 보이지 않던 것들이 보여 자신감이 생겼습니다.</h5>
              <h5>끊임없이 배우는 개발자의 영역에서 새로운 역량을 키워낼 것입니다.</h5></div>

          </div>

          {/* <Link to='/About' id='toabout'>
            <div className='toabout-box'></div>
          </Link> */}

        </div>
    );
}