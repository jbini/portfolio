import '../css/Menu.css';
import {Link} from 'react-router-dom';


export default function Menu() {

    return(
        <div className='menu-container'>

          <div className='menu-list-box'>
            <div className='menu-list-line'>
              <Link to='/' id='list-line-1'>M</Link><Link to='/'>ain</Link>
              <div className='underline-box' id='underline-box1'>
                <div className='underline-1'></div>
                <div className='underline-2'></div>
              </div>
            </div>

            <div className='menu-list-line'>
              <Link to='/About' id='list-line-2'>A</Link><Link to='/About'>bout</Link>
              <div className='underline-box' id='underline-box2'>
                <div className='underline-1'></div>
                <div className='underline-2'></div>
              </div>
            </div>

            <div className='menu-list-line'>
              <Link to='/Project' id='list-line-3'>P</Link><Link to='/Project'>roject</Link>
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
            <div className='menu-address-line'><h5>010-6338-4143</h5></div>
          </div>

        </div>
    );
}