import axios from "./axios";


export const getChecks = async () => await axios.get('/tasks')

export const addCheck = async (id, task) => await axios.put(`/tasks/${id}`, task)

export const deleteCheck = async (id, task) => await axios.put(`/tasks/${id}`, task)