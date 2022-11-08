import '../css/Menu.css';
import {Link} from 'react-router-dom';


export default function Menu() {

    return(
        <div className='menu-container'>

          <div className='menu-list-box'>
            <div className='menu-list-line'>
              <label for='MAP-main'><h2 id='list-line-1'>M</h2><h2>ain</h2></label>
              <div className='underline-box' id='underline-box1'>
                <div className='underline-1'></div>
                <div className='underline-2'></div>
              </div>
            </div>

            <div className='menu-list-line'>
              <label for='MAP-about'><h2 id='list-line-2'>A</h2><h2>bout</h2></label>
              <div className='underline-box' id='underline-box2'>
                <div className='underline-1'></div>
                <div className='underline-2'></div>
              </div>
            </div>

            <div className='menu-list-line'>
              <label for='MAP-project'><h2 id='list-line-3'>P</h2><h2>roject</h2></label>
              <div className='underline-box' id='underline-box3'>
                <div className='underline-1'></div>
                <div className='underline-2'></div>
              </div>
            </div>

            <div className='menu-list-line'>
              <a href='https://jbini.github.io/practice/' target='_blank' rel="noreferrer" id='list-line-4'>P</a>
              <a href='https://jbini.github.io/practice/' target='_blank' rel="noreferrer">ractice</a>
              <div className='underline-box' id='underline-box4'>
                <div className='underline-1'></div>
                <div className='underline-2'></div>
              </div>
            </div>

            <div className='menu-list-line'>
              <a href='https://github.com/jbini' target='_blank' rel="noreferrer" id='list-line-5'>G</a>
              <a href='https://github.com/jbini' target='_blank' rel="noreferrer">itHub</a>
              <div className='underline-box' id='underline-box5'>
                <div className='underline-1'></div>
                <div className='underline-2'></div>
              </div>
            </div>

          </div>

          <div className='menu-address-box'>
            <div className='menu-address-line'><h5>jbini515@gmail.com</h5></div>
            <div className='menu-address-line'><h5>+82) 10-6338-4143</h5></div>
          </div>

        </div>
    );
}