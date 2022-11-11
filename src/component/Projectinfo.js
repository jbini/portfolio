import '../css/Projectinfo.css';


export default function Projectinfo() {
    return(
        <div className='project-cover-container'>

            {/* <input type='checkbox' name='boxclick1' id='box-click1' />
            <input type='checkbox' name='boxclick2' id='box-click2' />
            <input type='checkbox' name='boxclick3' id='box-click3' /> */}
            <label className='project-darkbg' id='project-darkbg1' for='project-dark'></label>

            <label className='project-box1' id='projectbox' for='project-info'>
                <div className='project-box-effect1' id='project-box-effect1'></div>
                <div className='project-box-effect2' id='project-box-effect1'></div>
                <div className='project-box-effect3' id='project-box-effect1'></div>
                <div className='project-box-effect4' id='project-box-effect1'></div>
                <div className='project-box-effect5' id='project-box-effect1'></div>
                <div className='project-box-dot1'></div>
                <div className='project-box-dot1-2'></div>
                {/* <div className='project-box-dot4'></div> */}
                <h3>INFORMATION</h3>
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
                <h3>PREVIEW</h3>
            </label>

            <label className='project-box3' id='projectbox' for='project-eva'>
                <div className='project-box-effect1' id='project-box-effect3'></div>
                <div className='project-box-effect2' id='project-box-effect3'></div>
                <div className='project-box-effect3' id='project-box-effect3'></div>
                <div className='project-box-effect4' id='project-box-effect3'></div>
                <div className='project-box-effect5' id='project-box-effect3'></div>
                <div className='project-box-dot3'></div>
                <div className='project-box-dot3-2'></div>
                <h3>EVALUATE</h3>
            </label>

        </div>
    );
}