import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CardList from './components/CardList'
import Card from './components/card'
import data from "./data/data.json"

function App() {
  //const [count, setCount] = useState(0)//

  



  return (
    <>
      <NavBar/>
      <CardList />
     

      <Footer/>
    </>
  )
}

export default App
