import './App.css';
import { useContext, useEffect, useState } from 'react';
import FunctionalComponent from './FunctionalComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapDemo from './BootstrapDemo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import RoutingDemo from './RoutingDemo';
import Products from './Products';
import Login from './Login';
import Signup from './Signup';
import useApi from './useApi';
import { ENDPOINTS } from './apiUtil';
import Loader from './Loader';
import { UserContext } from './UserContextProvider';
import Toast from './Toast';
import CartComponent from './CartComponent';


function App() {

  const { makeRequest: login, message } = useApi(ENDPOINTS.USER.LOGIN);
  const { isLoading } = useContext(UserContext)
  console.log("🚀 ~ App ~ message:", message)

  useEffect(() => {
    login();
  }, [])


  return (
    <>
      <Toast />
      <Loader isLoading={isLoading}/>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/fc' element={<FunctionalComponent />} />
          <Route path='/cart' element={<CartComponent />} />
          <Route path='/bootstrap' element={<BootstrapDemo />} />
          <Route path='/routing/:productId' element={<RoutingDemo />} />
         
        </Routes>

      </BrowserRouter >
      
    </>
   
  )
}

export default App;
