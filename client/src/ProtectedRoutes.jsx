import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

const ProtectedRoute = () => {

    const { user, isAutenticated } = useAuth()

    if (!isAutenticated) return <Navigate to={'/login'} replace />

    return (
        <Outlet />
    )
}

export default ProtectedRoute