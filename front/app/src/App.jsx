import { useState } from 'react'
import './App.css'
import SideBar from './components/sidebar/Sidebar'
import './index.css'
import Home from './pages/Home'
import OrderServicesPage from './pages/OrderServicesPage'
import LoginPage from './pages/LoginPage'


function App() {
  return(
    <div className='bg-[#1C1C1C] h-screen'>
      <LoginPage/>
    </div>
  )

}

export default App
