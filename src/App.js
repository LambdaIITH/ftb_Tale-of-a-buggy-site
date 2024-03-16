import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Secret from './Secret';
import Home from './Home';

function App() {
  return (
    <Router>
      <Navbar />
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/secret" element={<Secret />} />
    <Route path="/" element={<Home />} />
  </Routes>
  <Footer />  
</Router>

  );
}

export default App;
