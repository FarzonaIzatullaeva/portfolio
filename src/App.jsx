import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const fullName = "Farzonakhon Izatullaeva";
const university = "The Ohio State University";
const major = "Computer Science Engineering with AI specialization";
const resume = "/resume.pdf";
const linkedInLink = "https://www.linkedin.com/in/farzonakhon-izatullaeva-19469a248/";
const headshot = "/headshot.jpeg";
const githubLink = "https://github.com/FarzonaIzatullaeva";


  return (
    <>
      <div>
        <img src={headshot} alt={`${fullName} headshot`} />
        <h1>Hello, I am {fullName}</h1>
        
      </div>
    </>
  )
}

export default App
