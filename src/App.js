import React from 'react';
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

function App() {
  return (
    <div className="App">
     <SignUpCustomers/>
    </div>
  );
}

export default App;

