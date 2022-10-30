import '../css/Aboutinfo.css';
import main2 from '../img/main2.jpg'
import main2me from '../img/main2-2.jpg'
import left from '../img/left.jpg'
import right from '../img/right.jpg'
import {Link} from 'react-router-dom';


let mainimg = main2
let mainimg2 = main2me

export default function Aboutinfo() {
    return(
        <div className='about-cover-container'>

          <input type='radio' name='line-radio' id='line-btn1'></input>
          <input type='radio' name='line-radio' id='line-btn2'></input>

          <div className='about-cover-imgbox'>
              <img src={mainimg} alt='mainimg'></img>
          </div>
          <div className='about-cover-imgbox2'>
              <img src={mainimg2} alt='mainimg2'></img>
          </div>

          <div className='about-cover-line-box'>
            <div className='about-cover-line'></div>
          </div>
          <div className='about-cover-line-box2'>
            <div className='about-cover-line2'></div>
            <label for='line-btn1' className='line-button1'></label>
            <label for='line-btn2' className='line-button2'></label>
            <div className='line-btn-click1'></div>
            <div className='line-btn-click2'></div>
            <div className='line-btn-click3'></div>
            <div className='line-btn-click4'></div>
            </div>

          <div className='about-line1'>
            <div className='line-move'>
              <h4>오늘 아침 메뉴는 김치볶음입니다.</h4>
            </div>
          </div>
          <div className='about-line2'>
            <div className='line-move'>
              <h4>맛있는 식사하시길 바랍니다.</h4>
            </div>
          </div>
          <div className='about-line3'>
            <div className='line-move'>
              <h4>출구는 오른쪽입니다.</h4>
            </div>
          </div>

          <Link to='/Project' id='toproject'>
            <div className='toproject-box'></div>
          </Link>

        </div>
    );
}