import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Home, CreatePost } from './Pages'
import Logo from './assets/logo.png';
function App() {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/">
          <img src={Logo} alt='Logo' className='w-19 h-10 object-contain'/>
        </Link>
        <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
         Create
        </Link>
      </header>
        <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] main-h-[calc(100vh-73px)]">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost/>}/>
          </Routes>
        </main>
     </BrowserRouter>
  )
} 

export default App;
