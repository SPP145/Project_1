import { useState } from 'react'
//*import reactLogo from './assets/react.svg'
//*import viteLogo from '/vite.svg'
import './index.css'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App
