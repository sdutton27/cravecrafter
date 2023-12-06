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
import SurpriseOption from './pages/SurpriseOption/SurpriseOption';

import FavoriteRestaurants from './pages/FavoriteRestaurants/FavoriteRestaurants';

import MainWrapper from './context/MainWrapper';
import PrivateRoute from './context/PrivateRoute';
import { OrderDetails } from './pages/OrderDetails/OrderDetails';

function App() {
  return (
    <>
    <MainWrapper>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
      <Route path="/favorites" element={<PrivateRoute><Favorites /></PrivateRoute>}/>
      <Route path="/favorites/restaurants" element={<PrivateRoute><FavoriteRestaurants /></PrivateRoute>}/>
      <Route path="/surprise-order/surprise" element={<PrivateRoute><SurpriseOption /></PrivateRoute>} />
      <Route path="/surprise-order/details" element={<PrivateRoute><OrderDetails /></PrivateRoute>} />
    </Routes>
    <Footer /> 
    </MainWrapper>
    </>
  );
}

export default App;
