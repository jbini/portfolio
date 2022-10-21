import './App.css';
import Menu from './component/Menu';
import Home from './Home';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Menu />
        <Routes>
          <Route path='/*' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
