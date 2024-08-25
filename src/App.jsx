import { useState } from 'react'
import './App.css'
import { Fragment } from 'react'
import Layout from './components/layout/layout'
import Food from './components/food/Food'

import Help from './pages/Help'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/pages/Login" element={<Login/>}/> // Update the route path here

        </Routes>
      </Layout>
    </Fragment>
  )
}

export default App