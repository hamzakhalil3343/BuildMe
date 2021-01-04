import React from 'react';
import { Route, Switch,Redirect,BrowserRouter, Router } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignUpAdmin from './components/SignUpAdmin';

import SignInLabour from './components/LabourComponents/SignInLabour';
import SignUpLabour from './components/LabourComponents/SignUpLabour';

import Wecome from './components/Wecome';
import ResponsiveDrawer from './components/ShopComponents/ResponsiveDrawer';
import ShopSignUp from './components/ShopComponents/ShopSignUp'
import ShopSignIn from './components/ShopComponents/ShopSignIn'
import LabourHomeComponent from './components/LabourComponents/LabourHomeComponent';
import SignInContractor from './components/Contractor/SignInContractor';
import SignUpContractor from './components/Contractor/SignUpContractor';
import ContractorHomeComponent from './components/Contractor/ContractorHomeComponent';
import SignInCustomers from './components/CustomerComponents/SignInCustomers';
import SignUpCustomers from './components/CustomerComponents/SignUpCustomers';
import CustomerHomeComponent from './components/CustomerComponents/CustomerHomeComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Switch>
                    <Route exact path="/" component={SignInCustomers} />
                    <Route path="/customer" component={CustomerHomeComponent} />
                    {/* <Route path="/contractor" component={ContractorHomeComponent} /> */}
                    {/* <Route path="/labour" component={LabourHomeComponent} /> */}

                    {/* <Route path="/Shops/:id" component={ResponsiveDrawer} />
 */}

                    {/* <Route path="*" component={() => <Redirect to="/" />} /> */}

                </Switch>
     </BrowserRouter> 
      
    
     
    </div>
  );
}

export default App;

