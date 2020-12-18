import React from 'react';
import { Route, Switch,BrowserRouter } from "react-router-dom";
import './App.css';
import SignUpLabour from './components/LabourComponents/SignUpLabour';
import ResponsiveDrawer from './components/ShopComponents/ResponsiveDrawer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Switch>
                    <Route exact path="/" component={SignUpLabour} />
{/* 
                    <Route path="/Shops/:id" component={ResponsiveDrawer} />


                    <Route path="*" component={() => <Redirect to="/" />} /> */}

                </Switch>
     </BrowserRouter> 
      
    
     
    </div>
  );
}

export default App;

