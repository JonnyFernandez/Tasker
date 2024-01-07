import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useChecks } from '../context/Check.Context'
import { useTasks } from "../context/TaskContext";



const ProfilePage = () => {

    const { user } = useAuth()
    const { checks, refresh } = useChecks()
    const { tasks, getTasks } = useTasks()
    useEffect(() => {
        getTasks()
        refresh()
    }, [])


    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center' >
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

                <h1 className='text-2xl font-bold'>Username: <span className="text-sky-500 text-4xl dark:text-sky-400">{user.username}</span> </h1>
                <blockquote>
                    <p className="text-lg font-medium">{user.email}</p>
                    <p>Task:  <span className="text-slate-700 dark:text-slate-500">{tasks.length} </span> </p>
                    <p>Checks: <span className="text-slate-700 dark:text-slate-500"> {checks.length}</span> </p>
                </blockquote>

            </div>

        </div>
    );
}

export default ProfilePage