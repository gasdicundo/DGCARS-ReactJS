import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Gaston",
        age: 26
    })

    const editUser = (newName, newAge) => {
        setUser({
            name: newName,
            age: newAge
        })
    } 

    const value = {
        user,
        editUser
    }
  return (
   <UserContext.Provider value={value}>
        { children }
   </UserContext.Provider>
  )
}

export default UserContextProvider