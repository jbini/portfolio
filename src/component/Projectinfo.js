import '../css/Projectinfo.css';


export default function Projectinfo() {
    return(
        <div className='project-cover-container'>

            <div className='project-box1' id='projectbox'>
                <div className='project-box-effect1'></div>
                <div className='project-box-effect2'></div>
                <div className='project-box-effect3'></div>
                <div className='project-box-effect4'></div>
                <div className='project-box-effect5'></div>
                <div className='project-box-dot1'></div>
                {/* <div className='project-box-dot2'></div>
                <div className='project-box-dot3'></div>
                <div className='project-box-dot4'></div> */}
                <h3>INFORMATION</h3>
            </div>

            <div className='project-box2' id='projectbox'>
                <div className='project-box-effect1'></div>
                <div className='project-box-effect2'></div>
                <div className='project-box-effect3'></div>
                <div className='project-box-effect4'></div>
                <div className='project-box-effect5'></div>
                <div className='project-box-dot2'></div>
                <h3>PREVIEW</h3>
            </div>

            <div className='project-box3' id='projectbox'>
                <div className='project-box-effect1'></div>
                <div className='project-box-effect2'></div>
                <div className='project-box-effect3'></div>
                <div className='project-box-effect4'></div>
                <div className='project-box-effect5'></div>
                <div className='project-box-dot3'></div>
                <h3>EVALUATE</h3>
            </div>

        </div>
    );
}