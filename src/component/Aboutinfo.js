import '../css/Aboutinfo.css';
import main from '../img/main.jpg'
import main2 from '../img/main2.jpg'
import main22 from '../img/main2-2.jpg'

let mainimg = main2

export default function Aboutinfo() {
    return(
        <div className='about-cover-container'>

          <div className='about-cover-imgbox'>
              <img src={mainimg} alt='mainimg'></img>
          </div>

        </div>
    );
}