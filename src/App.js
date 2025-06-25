import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Test from './Test';
import Page2 from './Page2';
import Login from './Login';

function App() {
  return (
    <Router>
       <nav className="navbar">
        <Link to="/" className="nav-link">Trang chủ</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/page1" className="nav-link">Page 1</Link>
        <Link to="/page2" className="nav-link">Page 2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Trang chủ</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/page1" element={<Test />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  
  );
}

export default App;
