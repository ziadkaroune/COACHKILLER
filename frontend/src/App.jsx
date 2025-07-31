import { useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import Header from './Header'
import Footer from './Footer'
function App() {
 

  return (
    <>
          <Header  />
          <main className='min-h-[60vh]'>
            <InputForm/>
          </main>
          <Footer />
    </>
  )
}

export default App
