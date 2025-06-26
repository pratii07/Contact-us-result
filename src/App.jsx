import React from 'react'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from "./components/ContactHeader/ContactHeader"
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
// import Button from './components/Button/Button'

function App() {

  return (
    <div>
      <Navigation />
      <main className='main_container'>
        <ContactHeader />
        <ContactForm />
      </main>
      {/* <Button /> */}
    </div>
  )
}

export default App
