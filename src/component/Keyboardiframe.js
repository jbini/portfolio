import '../css/Keyboardiframe.css'
import keyboard1 from '../audio/keyboardsound1.mp3'



export default function Keyboardiframe() {
    return(
      <iframe src={keyboard1} allow="autoplay" id="iframeaudio" name='audioIframe'></iframe>
    );
}