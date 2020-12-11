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
import ShopSignUp from './components/ShopComponents/ShopSignUp'
import ShopSignIn from './components/ShopComponents/ShopSignIn'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Switch>
                    <Route exact path="/" component={ShopSignIn} />

                    <Route path="/Shops/:id" component={ResponsiveDrawer} />


                    {/* <Route path="*" component={() => <Redirect to="/" />} /> */}

                </Switch>
     </BrowserRouter> 
      
    
     
    </div>
  );
}

export default App;

