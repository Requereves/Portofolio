import React from 'react';
import 'boxicons'
import './App.css'
import Contact from './components/contact/contact';
import Home from './components/home/home';
import Skill from './components/skill/skill';
import Work from './components/Project/work';
import About from './components/about/about';

const App = () => {
  return (
    <>
    <main className='main'>

      <Home />
      <About/>
      <Skill/>
      <Work />
      <Contact/>

    </main>
    </>
  )
}

export default App
