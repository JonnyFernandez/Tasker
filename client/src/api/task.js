import axios from './axios'



export const getTasksRequest = async () => await axios.get('/tasks')

export const getTaskRequest = async (id) => await axios.get(`/tasks/${id}`)

export const createTaskRequest = async (task) => await axios.post('/tasks', task)

export const updateTaskRequest = async (id, task) => await axios.put(`/tasks/${id}`, task)

export const deleteTaskRequest = async (id) => await axios.delete(`/tasks/${id}`)
