import './App.css';
import Employees from './pages/Employees';
import Header from './component/Header';
import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Customers from './pages/Customers';
import Customer from './pages/Customer';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './component/NotFound';

function App() {


  return (
      <BrowserRouter>
        <Header>
            <Routes>
              <Route path='/' element={<Employees/>  } />
              <Route path='/customers' element={<Customers/>} />
              <Route path='/customers/:id' element={<Customer/>} />
              <Route path='/dictionary' element={<Dictionary/>} />
              <Route path='/dictionary/:search' element={<Definition/>} />
              <Route path='/404' element={<NotFound/>} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
        </Header>
      </BrowserRouter>
  );
}

export default App;
