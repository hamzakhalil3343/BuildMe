import React from 'react';
import { Route, Switch,BrowserRouter } from "react-router-dom";
import './App.css';
<<<<<<< HEAD
import SignIn from './components/SignIn';
import SignUpAdmin from './components/SignUpAdmin';
import SignUpContractor from './components/SignUpContractor'
import SignInContractor from './components/SignInContractor'
import SignInLabour from './components/LabourComponents/SignInLabour';
import SignUpLabour from './components/LabourComponents/SignUpLabour';
import SignInCustomers from './components/SignInCustomers';
import SignUpCustomers from './components/SignUpCustomers';
import Wecome from './components/Wecome';
import ResponsiveDrawer from './components/ShopComponents/ResponsiveDrawer';
import ShopSignUp from './components/ShopComponents/ShopSignUp'
import ShopSignIn from './components/ShopComponents/ShopSignIn'
import LabourHomeComponent from './components/LabourComponents/LabourHomeComponent';
=======
import SignUpLabour from './components/LabourComponents/SignUpLabour';
import ResponsiveDrawer from './components/ShopComponents/ResponsiveDrawer';
>>>>>>> ae1294a1ea301bf5c747d9173ead6f24a52a4ad7

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Switch>
<<<<<<< HEAD
                    <Route exact path="/" component={SignInLabour} />
                    <Route path="/labour" component={LabourHomeComponent} />
=======
                    <Route exact path="/" component={SignUpLabour} />
{/* 
                    <Route path="/Shops/:id" component={ResponsiveDrawer} />
>>>>>>> ae1294a1ea301bf5c747d9173ead6f24a52a4ad7

                    {/* <Route path="/Shops/:id" component={ResponsiveDrawer} />
 */}

                    <Route path="*" component={() => <Redirect to="/" />} /> */}

                </Switch>
     </BrowserRouter> 
      
    
     
    </div>
  );
}

export default App;

