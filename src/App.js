import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './components/Info';
import Form from './components/form';
function App() {
  
  return (
    <BrowserRouter>
    <Form />
      <Routes>
        <Route exact path="/:category/:id" element={<Info />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
