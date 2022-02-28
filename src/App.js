import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DriveForm from './components/driveForm/DriveForm';
import NavBar from './components/navBar/NavBar';
import HomePage from './pages/homePage/HomePage';
import ProductDetailPage from './pages/productDetail/ProductDetailPage';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <NavBar/>
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/product/:carName' element={<ProductDetailPage/>} />
        <Route path='/driveForm' element={<DriveForm/>} />
      </Routes>
      </Router>

    </div>
  );
}

export default App;
