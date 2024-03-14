import React, { useCallback, useEffect, useRef, useState } from 'react'
import './Password.css'

function Passwordgen() {

    const [length , setLength] = useState(6)
    const [numbersallow, setNumberallow] = useState(false)
    const [charAllow, setcharAllow] = useState(false)
    const [password, setPassword] = useState('')

    const passwordGen = useCallback( (passwordGen) => {

        let pass = ''
        let str =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz'

        if (numbersallow) str += '0123456789'
        if (charAllow) str += '!@#$%^&-+_=~`'

        for (let i = 1; i <= length; i++){
            
        let char  =  Math.floor(Math.random() * str.length + 1)

        pass += str.charAt(char) // to concitinate 

        }

        setPassword(pass)


    } ,[length, numbersallow, charAllow])

    const passwordRef = useRef(null)

    const copyPass  = () => {

        passwordRef.current?.select();

        // passwordRef.current?.setSelectionRange(0,5); // to selct a range whatever you want


        window.navigator.clipboard.writeText(password)

    }

    useEffect( () => {

        passwordGen()

    } , [length, numbersallow, charAllow, passwordGen])

  return (
    <>
    <div className="container">
    <div className="password-panel">
      <input 
      type="text" 
      id="password-input" 
      value={password}
      className="password-input"
      placeholder='Password'
      ref={passwordRef}
      readonly/>

      <button id="copy-button" onClick={copyPass} className="copy-button">Copy</button>
    </div>
    <div className="options">
      <div className="length-slider">
        <label for="password-length">Password Length:</label>
        <input 
        type="range" 
        id="password-length"
        min={6}
        max={12}
        value={length}
        onChange={ (e) => {setLength(e.target.value)}}
        />
        <span id="length-display">{length}</span>
      </div>

      <div className="checkboxes">
        <input 
        type="checkbox" 
        id="include-numbers" 
        defaultChecked={numbersallow}
        onChange={ () => {setNumberallow( (prev) => !prev)}}
        />

        <label for="include-numbers">Include Numbers</label>

        <input 
        type="checkbox" 
        id="include-characters" 
        defaultChecked = {charAllow}
        onChange={ () => {setcharAllow( (prev) => !prev)}}
        />

        <label for="include-characters">Include Special Characters</label>

      </div>
    </div>
  </div>
  </>
  )
}

export default Passwordgen