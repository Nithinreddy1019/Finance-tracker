import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/home' element={<HomePage />}/>
    </Routes>
  )
}

export default App
