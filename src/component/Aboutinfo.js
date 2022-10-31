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
              <h4>"낯선 영역은 기회다."</h4>
            </div>
          </div>
          <div className='about-line2'>
            <div className='line-move'>
              <h5>아직 작성중아직 작성중아직 작성중아직 작성중아직 작성중</h5>
              <h5>그아직 작성중아직 작성중아직 작성중아직 작성중아직 작성중</h5>
              <h5>모든 프아직 작성중아직 작성중아직 작성중</h5>
              <h5>그 말은아직 작성중아직 작성중아직 작성중다.</h5>
              <h5>코아직 작성중 방식이 있었고,아직 작성중고아직 작성중니다.</h5>
              <h5>전아직 작성중아아직 작성중아직 작성아직 작성중</h5>
              <h5>유추아직 작성중아직 작성중아직 작성중</h5>
              <h5>모아직 작성중들 아직 작성중아직 작성중다.</h5>
            </div>
          </div>
          <div className='about-line3'>
            <div className='line-move'>
              {/* <h5>그 말은 저에게 작은 흥미를 주었고,코딩 입문에 필요한 것은 작은 흥미로 충분했습니다.</h5> */}
            </div>
          </div>

          <Link to='/Project' id='toproject'>
            <div className='toproject-box'></div>
          </Link>

        </div>
    );
}