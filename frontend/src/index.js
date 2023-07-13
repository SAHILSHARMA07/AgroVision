import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';
import { useEffect } from 'react';
import {Route, Routes,BrowserRouter} from "react-router-dom"
import MainScreen from './components/MainPage/mainScreen';
import Login from './components/LoginScreen/login';
import SignUp from './components/SignupScreen/Signup';
import Landing from './components/landingScreen/landing';
import Crop from './components/CropRec/CropRec';
import Disease from './components/Disease/Disease';
import Fertiliser from './components/Fertiliser/Fertiliser';
import WeatherComponent from '../src/components/Weather/WeatherData'
import WeatherComponent1 from '../src/components/Weather/WeatherDataByCurrentLoc';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <BrowserRouter>
   
  <Routes>
    
  <Route path='/' element={<MainScreen/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/landing' element={<Landing/>}/>
  <Route path='/crop' element={<Crop/>}/>
  <Route path='/disease' element={<Disease/>}/>
  <Route path='/fertiliser' element={<Fertiliser/>}/>
  <Route path='/weather' element={<WeatherComponent/>}/>
  <Route path='/weatherLive' element={<WeatherComponent1/>}/>
   </Routes>

  </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

