import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

const TaskCard = (props) => {

    const { deleteTask } = useTasks()

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md" >
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{props.task.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => { deleteTask(props.task._id) }}>delete</button>
                    <Link to={`/tasks/${props.task._id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" >edit</Link>
                </div>
            </header>

            <p className="text-slate-300">{props.task.description}</p>
            <p>{new Date(props.task.date).toLocaleDateString()}</p>
            {/* pasamos la fecha a un formato mas entendible */}
        </div>
    )
}

export default TaskCard