import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";



export const AuthContex = createContext({
    // signup: () => { },
    // user: '',
    // isAutenticated: false
})





export const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [isAutenticated, setIsAutenticated] = useState(false)
    const [errors, setErrors] = useState([])

    const signup = async (values) => {
        try {
            const res = await registerRequest(values);
            setUser(res)
            setIsAutenticated(true)
        } catch (error) {
            setErrors(error.response.data.message)
            // console.log(error);
        }


    }





    return (
        <AuthContex.Provider value={{ signup, user, isAutenticated, errors }}>
            {children}
        </AuthContex.Provider>
    )
}

export const useAuth = () => useContext(AuthContex)