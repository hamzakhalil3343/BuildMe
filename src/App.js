import React from 'react';
import { Route, Switch,Redirect,BrowserRouter, Router } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignUpAdmin from './components/SignUpAdmin';
import SignUpContractor from './components/SignUpContractor'
import SignInContractor from './components/SignInContractor'
import SignInLabour from './components/SignInLabour';
import SignUpLabour from './components/SignUpLabour';
import SignInCustomers from './components/SignInCustomers';
import SignUpCustomers from './components/SignUpCustomers';
import Wecome from './components/Wecome';
import ResponsiveDrawer from './components/ShopComponents/ResponsiveDrawer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ResponsiveDrawer/>
     </BrowserRouter> 
      
    
     
    </div>
  );
}

export default App;

