import './App.css';
import Menu from './component/Menu';
import Home from './Home';
import About from './About';
import Project from './Project';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Menu />
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/About/' element={<About />} />
          <Route path='/Project/' element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
