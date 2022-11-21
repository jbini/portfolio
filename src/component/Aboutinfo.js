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

          {/* <input type='radio' name='line-radio' id='line-btn1'></input>
          <input type='radio' name='line-radio' id='line-btn2'></input> */}

          {/* <div className='about-cover-imgbox'>
              <img src={mainimg} alt='mainimg'></img>
          </div> */}
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
              <h4>"낯선 영역은</h4><div className='relative-div'><div className='about-underline'></div><h4 id='underline-h4-2'>기회다."</h4></div>
            </div>
          </div>
          <div className='about-line2'>
            <div className='line-move'>
              <h5>언뜻 봐서는 알 수 없는 문자들의 나열로</h5>
            </div>
          </div>
          <div className='about-line3'>
            <div className='line-move'>
              <h5>온갖 프로그램을 만들 수 있는 것이 흥미로웠습니다.</h5>
            </div>
          </div>
          <div className='about-line4'>
            <div className='line-move'>
              <h5>개발자 입문에 필요한 것은 작은 흥미로 충분했습니다.</h5>
            </div>
          </div>
          <div className='about-line5'>
            <div className='line-move'>
              <h5>배우고 보니 개발자의 영향은 보이는 곳마다 있었습니다.</h5>
            </div>
          </div>
          <div className='about-line6'>
            <div className='line-move'>
              <h5>일상 중에도 웹 페이지가 나타나는 방식과</h5>
            </div>
          </div>
          <div className='about-line7'>
            <div className='line-move'>
              <h5>애플리케이션의 구조에 관심이 생겼습니다.</h5>
            </div>
          </div>
          <div className='about-line8'>
            <div className='line-move'>
              <h5>아쉬운 부분을 발견하면 대안을 유추해보며 배움을 얻었습니다.</h5>
            </div>
          </div>
          <div className='about-line9'>
            <div className='line-move'>
              <h5>배우면 배울수록 익숙한 것들의 안쪽은 낯설었습니다.</h5>
            </div>
          </div>
          <div className='about-line10'>
            <div className='line-move'>
              <h5>새로움을 찾는 개발자로서 깊게 보는 눈을 갖겠습니다.</h5>
            </div>
          </div>


          <div className='about-second-box'>
            <h4>"인생은 배움의 연속"</h4>
            <div className='about-second-line1'>
              <h5>공부하다 죽으라는 말이 있습니다.</h5>
              <h5>보통은 손사래를 치거나 쓴웃음을 짓겠지만</h5>
              <h5>저의 관점에서 공부는 일상에서 얻는 모든 배움입니다.</h5>
              <h5>배움은 언제 어디서나 큰 깨달음이든 사소한 뉘우침이든 끝이 없습니다.</h5>
              <h5>배운 것이 있어야 나를 표현할 수 있고</h5>
              <h5>틀린 것과 다른 것을 구분할 수 있고</h5>
              <h5>이어서 틀린 것을 바로잡을 수 있게 됩니다.</h5>
              <h5>코딩은 같은 결과를 내더라도 다양한 방식이 있고</h5>
              <h5>더 좋은 효율과 편의성을 위한 방식들이 새로 생기고 있습니다.</h5>
              <h5>그렇기에 생산성이 좋은 개발자가 되기 위해선</h5>
              <h5>끝없이 배우는 자세가 필수적입니다.</h5>
              <h5>배움의 중요성을 알기에 안주하지 않는 개발자가 될 것입니다.</h5>
            </div>
            {/* <div className='about-second-line2'>
              <h5>코딩은 같은 결과를 내더라도 다양한 방식이 있고</h5>
              <h5>더 좋은 효율과 편의성을 위한 방식들이 새로 생기고 있습니다.</h5>
              <h5>그렇기에 생산성이 좋은 개발자가 되기 위해선 배움의 자세가 필수적입니다.</h5>
            </div> */}
          </div>


        </div>
    );
}