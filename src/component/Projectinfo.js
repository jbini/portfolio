import '../css/Projectinfo.css';
import main from '../img/main.jpg'
import main2 from '../img/main2.jpg'
import main22 from '../img/main2-2.jpg'

let mainimg = main2

export default function Projectinfo() {
    return(
        <div className='project-cover-container'>

          <div className='project-cover-imgbox'>
              <img src={mainimg} alt='mainimg'></img>
          </div>

        </div>
    );
}