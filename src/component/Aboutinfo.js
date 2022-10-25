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

        </div>
    );
}