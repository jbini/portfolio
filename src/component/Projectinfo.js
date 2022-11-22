import '../css/Projectinfo.css';
import ReactPlayer from 'react-player';
import eatmotion from '../video/Eatmotion.mp4';
import eatmotion1 from '../img/eatmotion1.png'
import $ from 'jquery';


// export let projectI = document.getElementById('projectIframe1');

export function videoPause() {
    $('#projectIframe1').get(0).pause();
};

let contentimg1 = eatmotion1
                    

export default function Projectinfo() {
    return(
        <div className='project-cover-container'>

            {/* <input type='checkbox' name='boxclick1' id='box-click1' />
            <input type='checkbox' name='boxclick2' id='box-click2' />
            <input type='checkbox' name='boxclick3' id='box-click3' /> */}
            <label className='project-darkbg' id='project-darkbg1' for='project-dark' onClick={videoPause}></label>

            <label className='project-box1' id='projectbox' for='project-info'>
                <div className='project-box-effect1' id='project-box-effect1'></div>
                <div className='project-box-effect2' id='project-box-effect1'></div>
                <div className='project-box-effect3' id='project-box-effect1'></div>
                <div className='project-box-effect4' id='project-box-effect1'></div>
                <div className='project-box-effect5' id='project-box-effect1'></div>
                <div className='project-box-dot1'></div>
                <div className='project-box-dot1-2'></div>
                <label className='project-box-X1' for='project-dark'><h3>X</h3></label>
                {/* <div className='project-box-dot4'></div> */}
                <h3>INFORMATION</h3>
                <div className='project-box-content1'>
                    <div className='project-box-content-img'><img src={contentimg1} alt='eatmotion'/></div>
                    <div className='project-box-content-name1'><h4>Project Name</h4></div>
                    <div className='project-box-content-name2'><h5>Eatmotion</h5></div>
                    <div className='project-box-content-sdate1'><h4>Date</h4></div>
                    <div className='project-box-content-sdate2'><h5>2021.12.03 ~ 2021.12.24</h5></div>
                    <div className='project-box-content-back1'><h4>Back-end</h4></div>
                    <div className='project-box-content-back2'><h5>Java, Javascript, AWS, MariaDB, MySQL</h5></div>
                    <div className='project-box-content-front1'><h4>Front-end</h4></div>
                    <div className='project-box-content-front2'><h5>ReactJS, HTML, CSS</h5></div>
                    <div className='project-box-content-member1'><h4>Member</h4></div>
                    <div className='project-box-content-member2'><h5>jbini, xljhax, dev-thug, delpotro96</h5></div>
                </div>
            </label>

            {/* <div className='project-box1-up' id='projectboxup'>
                <div className='project-box-dot1-2'></div>
                <h3>INFORMATION</h3>
            </div> */}

            <label className='project-box2' id='projectbox' for='project-pre'>
                <div className='project-box-effect1' id='project-box-effect2'></div>
                <div className='project-box-effect2' id='project-box-effect2'></div>
                <div className='project-box-effect3' id='project-box-effect2'></div>
                <div className='project-box-effect4' id='project-box-effect2'></div>
                <div className='project-box-effect5' id='project-box-effect2'></div>
                <div className='project-box-dot2'></div>
                <div className='project-box-dot2-2'></div>
                <label className='project-box-X2' for='project-dark' onClick={videoPause}><h3>X</h3></label>
                <h3>PREVIEW</h3>
                <div className='project-box-content2'>
                    {/* <iframe id='projectIframe1' width="100%" height="100%" src="https://www.youtube.com/embed/qOqlykY3bWE" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    {/* <ReactPlayer id='projectIframe1' url='https://www.youtube.com/embed/qOqlykY3bWE' width="100%" height="100%" controls /> */}
                    <video id='projectIframe1' src={eatmotion} controls width="100%" height="100%" />
                </div>
                
                
            </label>

            <label className='project-box3' id='projectbox' for='project-eva'>
                <div className='project-box-effect1' id='project-box-effect3'></div>
                <div className='project-box-effect2' id='project-box-effect3'></div>
                <div className='project-box-effect3' id='project-box-effect3'></div>
                <div className='project-box-effect4' id='project-box-effect3'></div>
                <div className='project-box-effect5' id='project-box-effect3'></div>
                <div className='project-box-dot3'></div>
                <div className='project-box-dot3-2'></div>
                <label className='project-box-X3' for='project-dark'><h3>X</h3></label>
                <h3>EVALUATION</h3>
                <div className='project-box-content3'></div>
            </label>

        </div>
    );
}