import React from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'

import SignUp from './pages/Signup'
import HeaderLayout from './components/HeaderLayout'
import Login from './pages/Login'
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<HeaderLayout/>}>
         <Route path='login' element={<Login/>}/>
         <Route path='signup' element={<SignUp/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
