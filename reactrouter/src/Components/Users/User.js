import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

  const {userid} = useParams()

  return (

    <div><h2 style={{textAlign : 'center'}}>This is User1 : {userid}</h2></div>
    
  )
}

export default User


