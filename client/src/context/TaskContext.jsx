import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../api/task";


const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([])

    const createTask = async (task) => {
        const res = await createTaskRequest(task)
        console.log(res);
    }

    const getTasks = async () => {
        try {
            const res = await getTasksRequest()
            setTasks(res.data)
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <TaskContext.Provider value={{ tasks, createTask, getTasks }}>
            {children}
        </TaskContext.Provider>
    )
}



export const useTasks = () => useContext(TaskContext)







