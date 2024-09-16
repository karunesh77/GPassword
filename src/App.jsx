import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [lenght, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charactorAllowed, setCharactorAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789" 
    if(charactorAllowed) str += "!@#$%^&*()"



    for (let i = 1; i <= length; i++) {

        let char = str.charAt(Math.floor(Math.random() * str.length + 1))
        
        pass += str.charAt(char)

  }
    setPassword(pass)

  },[lenght,numberAllowed,charactorAllowed,setPassword])

  useEffect(()=>{
    generatePassword()
  },[lenght,numberAllowed,charactorAllowed,generatePassword])

  return (

    <>
   <div className="w-full max-w-md center mx-auto shadow-md rounded-lg px-4  my-8 text-orange-500 bg-gray-700"> Generate Password


    <div className='flex-shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={password} className="w-full px-4 py-3 focus:outline-none" placeholder=" Password"
      readOnly />

      <button className='px-4 py-3 w-full bg-gray-800 outline-none text-white'>Copy</button>

    </div>

     <div className='flex text-sm gap-x-2'>

      <div className='flex items-center gap-x-1'>

        <input type="range"
        min="4" max="32"
       value={lenght}
       className='cursor-pointer'
       onChange={(e)=>setLenght(e.target.value)}
        
        />

        <label>Lenght:{lenght}</label>

     </div>

     <div className='flex items-center gap-x-1'>

     <input type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
          setNumberAllowed((prev) => !prev)
        }}
      
       />
       <label htmlFor="numberInput">Number</label>


     </div>


     <input type="checkbox"
        defaultChecked={charactorAllowed}
        id="charactorInput"
        onChange={() => {
        setCharactorAllowed((prev) => !prev)
        }}
      
       />
       <label htmlFor="charactorInput">Charator</label>

   </div>

    </div>



    </>
  )
}

export default App
