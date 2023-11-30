import { useState } from 'react'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { TestComponent } from './components/Test/Test';
import { AppRoutes } from './routes';

import './styles/index.css'
function App() {

  const token = localStorage.getItem('accessToken');

  const isValidToken = (token) => {
    console.log(token)
    return true;
    
  }

  return (
    <>
      {/* <TestComponent/> */}
      <AppRoutes/>
    </>
  )
}

export default App
