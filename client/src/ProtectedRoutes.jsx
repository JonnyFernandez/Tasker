import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

const ProtectedRoute = () => {

    const { Loading, isAutenticated } = useAuth()

    // console.log(Loading, isAutenticated);

    if (Loading) return <h1> Loading...</h1>

    if (!Loading && !isAutenticated) return <Navigate to={'/login'} replace />

    return (
        <Outlet />
    )
}

export default ProtectedRoute