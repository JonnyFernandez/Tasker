import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest } from "../api/task";


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
    };

    const deleteTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id)
            if (res.status === 204) setTasks(tasks.filter(item => item._id !== id))


        } catch (error) {
            console.log(error);
        }
    }

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id)
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
    const updateTask = async (id, task) => {
        try {
            await updateTaskRequest(id, task)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, createTask, getTasks, deleteTask, getTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    )
}



export const useTasks = () => useContext(TaskContext)







