import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/auth";
import Cookies from 'js-cookie'

export const AuthContex = createContext({
    // signup: () => { },
    // user: '',
    // isAutenticated: false
})





export const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [isAutenticated, setIsAutenticated] = useState(false)
    const [errors, setErrors] = useState([])
    console.log(user);
    const signup = async (values) => {
        try {
            const res = await registerRequest(values);
            setUser(res)
            setIsAutenticated(true)
        } catch (error) {
            setErrors(error.response.data.message)
        }

    }
    const signin = async (values) => {
        try {
            const res = await loginRequest(values);
            // console.log(res);
            setUser(res.data)
            setIsAutenticated(true)
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }

    }


    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])


    // useEffect(() => {
    //     const cookies = Cookies.get()
    //     if (cookies.toekn) {
    //         console.log(cookies.token);
    //     }
    // }, [])



    return (
        <AuthContex.Provider value={{ signup, signin, user, isAutenticated, errors }}>
            {children}
        </AuthContex.Provider>
    )
}

export const useAuth = () => useContext(AuthContex)