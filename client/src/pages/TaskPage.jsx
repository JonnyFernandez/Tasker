import { useEffect } from "react"
import { useTasks } from "../context/TaskContext"
import { Navigate } from "react-router-dom"

const TaskPage = () => {
    const { getTasks, tasks } = useTasks()

    useEffect(() => {
        getTasks();
    }, [])


    if (tasks.length === 0) return (<h1>No Tasks</h1>)


    return (
        <div>
            {
                tasks && tasks.map(item =>
                (<div key={item._id}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                </div>)
                )
            }
        </div>
    )
}

export default TaskPage