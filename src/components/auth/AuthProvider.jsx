import React, {createContext, useState } from 'react'
import jwt_decode from "jwt-decode" 

export const AuthContext = createContext({
    user : null,
    handleLogin : (token) =>  {},
    handleLogout : () = {}
})

const AuthProvider = ({children}) => {
 const[user, setUser] = useState(null)
 
 const handleLogin = (token) =>{
    const decodedToken = jwt_decode(token)
        localStorage.setItem("userId", decodedToken.sub)
		localStorage.setItem("userRole", decodedToken.roles)
		localStorage.setItem("token", token)
		setUser(decodedToken)
 }
 const handleLogout = (token) =>{
    const decodedToken = jwt_decode(token)
        localStorage.removeItem("userId")
		localStorage.removeItem("userRole" )
		localStorage.removeItem("token")
		setUser(null)
 }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
	return useContext(AuthContext)
}
