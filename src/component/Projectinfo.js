import '../css/Projectinfo.css';
import ReactPlayer from 'react-player';
import eatmotion from '../video/Eatmotion.mp4';
import eatmotion1 from '../img/eatmotion1.png'
import $ from 'jquery';



export function videoPause() {
    $('#projectIframe1').get(0).pause();
};

let contentimg1 = eatmotion1
                    

export default function Projectinfo() {
    return(
        <div className='project-cover-container'>

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
                    <div className='project-box-content-objective1'><h4>Objective</h4></div>
                    <div className='project-box-content-objective2'><h5>- API를 활용한 맛집 랭킹 사이트</h5></div>
                    <div className='project-box-content-objective3'><h5>- 회원제 이용 기능 구현</h5></div>
                    <div className='project-box-content-objective4'><h5>- 지도, 식당 정보 API 활용 식당 검색 기능 구현</h5></div>
                    <div className='project-box-content-objective5'><h5>- 텍스트 감정 분석 API 활용 평점 기능 구현</h5></div>
                    <div className='project-box-content-objective6'><h5>- 식당 예약 기능 구현</h5></div>
                    <div className='project-box-content-part1'><h4>Jbini Part</h4></div>
                    <div className='project-box-content-part2'><h5>- HTML, CSS 활용 사이트 구현</h5></div>
                    <div className='project-box-content-part3'><h5>- Photoshop 활용 배너, 로고 디자인</h5></div>
                    <div className='project-box-content-part4'><h5>- ReactJS 활용 DB 연동</h5></div>
                </div>
            </label>

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
                <div className='project-box-content3'>
                    <div className='project-box-content-epilogue1'><h4>협업을 하며..</h4></div>
                    <div className='project-box-content-epilogue2'>
                        <h5>프로젝트를 함께 할 때와 혼자 할 때의 차이는 분명했습니다.</h5>
                        <h5>혼자 할 때 만큼의 여유는 없었지만 책임감을 갖고 몰두할 수 있었습니다.</h5>
                        <h5>막히는 부분이 나오면 팀원에게 해결법이나 대안을 받아 실력 향상에 도움이 됐습니다.</h5>
                        <h5>작업 중간에 서로 컨디션 체크를 하고 일상 얘기를 하며 숨을 돌리면 작업 효율이 좋아지기도 했습니다.</h5>
                    </div>
                    <div className='project-box-content-epilogue3'><h4>좋은 개발자 좋은 코드</h4></div>
                    <div className='project-box-content-epilogue4'>
                        <h5>개발자에게 협업이 필수인 만큼 커뮤니케이션 능력이 중요합니다.</h5>
                        <h5>123</h5>
                        <h5>345</h5>
                        <h5>234</h5>
                    </div>
                </div>
            </label>

        </div>
    );
}