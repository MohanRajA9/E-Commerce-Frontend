import React, { useContext } from "react"
import { profileNameContext } from "../context/ExampleContext"
import { useGlobalContext } from "../context/context"


export function Sample3() {
    const name3 = useGlobalContext() //this context is imported from context.js
    return (
      <h1>Hi {name3}</h1>
    )
  }

   
   