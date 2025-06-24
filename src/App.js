import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Test from './Test';
import Page2 from './Page2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Trang chủ</h1>} />
        <Route path="/page1" element={<Test />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  
  );
}

export default App;
