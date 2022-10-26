import '../css/Aboutinfo.css';
import main2 from '../img/main2.jpg'
import main2me from '../img/main2-2.jpg'


let mainimg = main2
let mainimg2 = main2me

export default function Aboutinfo() {
    return(
        <div className='about-cover-container'>

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

        </div>
    );
}