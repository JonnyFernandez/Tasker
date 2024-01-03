import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTasks } from '../context/TaskContext'

const TaskFormPage = () => {
    const navigate = useNavigate()
    const params = useParams()

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const { createTask, getTask, updateTask } = useTasks()

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id)
                // seteo los valores del input 
                setValue('title', task.title)
                setValue('description', task.description)
            }
        }
        loadTask()
    }, [])

    const onSubmit = async (values) => {
        if (params.id) {
            updateTask(params.id, values)
        } else {
            createTask(values)
        }
        navigate('/task')
    };



    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center' >
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

                <h1 className='text-2xl font-bold'>Task Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="title">Title</label>
                    <input
                        type='title'
                        {...register('title', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Title'
                        autoFocus
                    />
                    {errors.title && <p className='text-red-500'>Title is required</p>}
                    <label htmlFor="description">Description</label>

                    <textarea
                        type='description'
                        {...register('description', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Description'
                    />
                    {errors.description && <p className='text-red-500'>Description is required</p>}


                    <button type='submit' className='bg-indigo-500 px-10 py-2 rounded-md'>Save</button>
                </form>
            </div>

        </div>
    )
}

export default TaskFormPage