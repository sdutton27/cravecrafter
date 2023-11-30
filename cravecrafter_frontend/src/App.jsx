import './assets/css/App.css';
import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { Signin } from './pages/Signin/Signin';
import { Login } from './pages/Login/Login';
import { Signup } from './pages/Signup/Signup';
import Favorites from './pages/Favorites/Favorites';
import Footer from './components/Footer/Footer';
// import {Footer} from './components/Footer';
import { Checkout } from './pages/Checkout/Checkout';

import FavoriteRestaurants from './pages/FavoriteRestaurants/FavoriteRestaurants';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/favorites" element={<Favorites />}/>
      <Route path="/favorites/restaurants" element={<FavoriteRestaurants />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
