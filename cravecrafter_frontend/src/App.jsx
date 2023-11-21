import './assets/css/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { Signin } from './pages/Signin/Signin';
import { Login } from './pages/Login/Login';
import Favorites from './pages/Favorites/Favorites';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/favorites" element={<Favorites />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
