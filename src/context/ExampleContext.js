import React, { createContext, useContext, useState } from 'react'
import { Sample3 } from '../components/Sample3'
import { useGlobalContext } from './context'
import Ref from './Ref'
import Reducer from './Reducer'
  //1.creating - createcontext
  //2.publisher - provider - context.provider
  //3.subscriber - usecontext - useContext(context)

  export const profileNameContext = createContext()//method
  function ExampleContext() {
  const [profileName, setProfileName] = useState("Mohan")
  const [newName, setNewName] = useState("")
  const handleInputChange = (e) => {
    setNewName(e.target.value)
  }
  const handleClick = () => {
    setProfileName(newName)
  }
  return (
    <profileNameContext.Provider value={profileName}> 
    <div>ExampleContext
      <Reducer />
      {/* <Ref /> */}
      {/* <h1>{profileName}</h1>
      <input type="text" value={newName} onChange={handleInputChange} />
      <button onClick={handleClick} >Change Name</button> */}
      {/* <Sample1 />
      <Sample2 />
      <Sample3 /> */}
    </div>
    </profileNameContext.Provider>
  )
}

function Sample1() {
  const name1 = useGlobalContext()// it is imported from context.js
  return (
    <h1>welcome {name1}</h1>
  )
}

function Sample2() {
  // const name2 = useContext(profileNameContext) // subscribtion metod
  const name2 = useGlobalContext() // it is imported from context.js
  return (
    <h1>Hey {name2}</h1>
  )
}




export default ExampleContext