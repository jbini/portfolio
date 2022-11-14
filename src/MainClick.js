
// window.onload = function(){
//     document.getElementById('MAP-main').addEventListener('click', function(){
//         document.getElementById('iframeaudio').contentDocument.location.reload(true);
//     });
// };
import {forAudio, forClick} from './App';

document.getElementById(forClick).addEventListener('click', function(){
    document.getElementById(forAudio).contentDocument.location.reload(true);
  });
  
  window.onload = function(){
    console.log(forClick,forAudio);
};