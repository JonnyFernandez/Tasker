import { useEffect } from "react"
import { useTasks } from "../context/TaskContext"
import TaskCard from "../components/TaskCard"

const TaskPage = () => {
    const { getTasks, tasks } = useTasks()

    useEffect(() => {
        getTasks();
    }, [])


    if (tasks.length === 0) return (<h1>No Tasks</h1>)


    return (
        <div className="grid  grid-cols-3 gap-2" >
            {
                tasks && tasks.map(item =>
                    <TaskCard task={item} key={item._id} />
                )
            }
        </div>
    )
}

export default TaskPage