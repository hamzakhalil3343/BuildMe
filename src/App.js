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
import SignUpInt_D from './components/InteriorDesigners/SignUpInt_D';
import SignInInt_D from './components/InteriorDesigners/SignInInt_D';
import IntDesHomeComponent from './components/InteriorDesigners/IntDesHomeComponent';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/SignInInteriorDesigner" component={SignInInt_D} />
                    <Route exact path="/ShopSignUp" component={ShopSignUp} />
                    <Route exact path="/SignUpInteriorDesigner" component={SignUpInt_D} />

                    <Route path="/interiorDesigner" component={IntDesHomeComponent} />
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

