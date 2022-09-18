import React from 'react'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import { Route } from 'react-router-dom'
import LeftSide from './components/LeftSide'
import Home from './pages/Home';
import { Lesson } from './pages/Lesson';
import Entrance from './pages/Entrance';

export default function App() {

const ToggleBar =()=>{
  console.log("Man bosildim") 
}

  return (
    <>
    <Header/>
    <main className='main'>
      <Route exact path="/" component={Entrance}/>
      <Route exact path="/N5" component={LeftSide}/>
      <Route path="/:slug" component={LeftSide}/>
      <Route exact path="/N5" component={Home}/>
      <Route  path="/N5/:id" component={Lesson}/>
      <div className="toggle-bar" onClick={()=>ToggleBar()}>
      <i className="fas fa-arrow-right"></i>
      </div>
    </main>
    <Footer/>
    </>
  )
}


