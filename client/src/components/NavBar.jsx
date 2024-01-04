import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import Swal from 'sweetalert2';



const NavBar = () => {


    const { isAutenticated, logout, user } = useAuth()


    const exit = async () => {
        const result = await Swal.fire({
            title: 'Sign Out',
            // text: 'No podrás recuperar esta tarea después de eliminarla',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sign Out',
            cancelButtonText: 'Cancel',
            reverseButtons: true,
        });

        if (result.isConfirmed) {
            logout()
        }
    }

    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to={isAutenticated ? '/task' : '/'}>
                <h1 className="text-2xl font-bold">Notes Manager</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAutenticated ? <>
                    <li>
                        <Link className="bg-indigo-500 px-4 py-1 rounded-sm">Checks</Link>
                    </li>
                    <li>
                        <Link to={'/Profile'} className="bg-indigo-500 px-4 py-1 rounded-sm">Profile</Link>
                    </li>
                    <li>
                        <Link to={'/addtask'} className="bg-indigo-500 px-4 py-1 rounded-sm">Add Note</Link>
                    </li>
                    <li>
                        <Link onClick={() => exit()} className="bg-gray-500 px-4 py-1 rounded-sm">Logout</Link>
                    </li>
                </> : <>
                    <li>
                        <Link to='/login' className="bg-indigo-500 px-4 py-1 rounded-sm">Login</Link>
                    </li>
                    <li>
                        <Link to='/register' className="bg-indigo-500 px-4 py-1 rounded-sm">Register</Link>
                    </li></>}
            </ul>
        </nav>
    )
}

export default NavBar