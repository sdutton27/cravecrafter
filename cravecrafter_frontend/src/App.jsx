import React, { useLayoutEffect } from 'react';
import './assets/css/App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import FavoriteEntrees from './pages/FavoriteEntrees/FavoriteEntrees';

import MainWrapper from './context/MainWrapper';
import PrivateRoute from './context/PrivateRoute';
import { OrderDetails } from './pages/OrderDetails/OrderDetails';

import { AnimatePresence } from 'framer-motion'

import { SurpriseLoading } from "./pages/SurpriseLoading/SurpriseLoading";
import { OrderSuccess } from "./components/OrderSuccess";
import { Tracker } from "./components/Tracker";
import SurprisePreview from './pages/SurprisePreview/SurprisePreview';

import AnimatedPage from './context/AnimatedPage';


function App() {
  const location = useLocation();

  // Always scrolls back up when on a new page
  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 
  return (
    <>
    <MainWrapper>
      <Wrapper>
      <AnimatePresence mode='wait'>

    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
      <Route path="/favorites" element={<PrivateRoute><AnimatedPage><Favorites /></AnimatedPage></PrivateRoute>}/>
      <Route path="/favorites/restaurants" element={<PrivateRoute><FavoriteRestaurants /></PrivateRoute>}/>
      <Route path="/favorites/menu-items" element={<PrivateRoute><FavoriteEntrees /></PrivateRoute>}/>
      <Route path="/surprise-order/surprise" element={<PrivateRoute><AnimatedPage><SurpriseOption /></AnimatedPage></PrivateRoute>} />
      <Route path="/surprise-order/details" element={<PrivateRoute><OrderDetails /></PrivateRoute>} />
      <Route path="/surprise-order/loading" element={<PrivateRoute><AnimatedPage><SurpriseLoading /></AnimatedPage></PrivateRoute>} />
      <Route path="/surprise-order/preview" element={<PrivateRoute><AnimatedPage><SurprisePreview /></AnimatedPage></PrivateRoute>} />
      <Route path="/surprise-order/success" element={<PrivateRoute><OrderSuccess /></PrivateRoute>} />
      <Route path="/surprise-order/tracker" element={<PrivateRoute><Tracker /></PrivateRoute>} />
      
      </Routes>
      
    </AnimatePresence>
    </Wrapper>
    <Footer /> 
    </MainWrapper>
    </>
  );
}

export default App;
