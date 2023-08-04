import react, { useState } from 'react'
import './App.css'

function App() {

  const [clicked, setClicked] = useState()

  return(
    <div style={{display: "flex", flexDirection: "column", alignItems:"center", marginTop: "14rem"}}>
      <h1>Guide to get 80LPA+ Package</h1>
      <h3>Click all buttons step by step to get instant reach on twitter 👇</h3>
      <h3>For more tips, tricks and career advice, follow <a href="https://twitter.com/0xSarthak13">me</a></h3>
      <div style={{display:"flex", flexDirection:"column"}}>
        <button onClick={() => setClicked('Development kar, DSA nahi')}>Competitive Programming / DSA</button> <br />
        <button onClick={() => setClicked('Open Source kar, sirf development nahi')}>Development</button> <br />
        <button onClick={() => setClicked('Competitive Programming kar, open source nahi')}>Open Source</button> <br />
        <button onClick={() => setClicked('Padhai karle bhai, e-lafda karne se ghar nahi chalta')}>Others</button> <br />
      </div>
      <h1>
        {clicked}
      </h1>
    </div>
  )
}

export default App
