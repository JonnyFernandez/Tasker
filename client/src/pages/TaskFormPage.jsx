import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTasks } from '../context/TaskContext'


const TaskFormPage = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createTask } = useTasks()



    const onSubmit = async (values) => {
        createTask(values)
    };



    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center' >
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                {/* {
                signinrErrors.length >= 1 ? signinrErrors.map((item, i) => <div key={i} className='bg-red-500 p-2 text-white text-center'>{item}</div>) : ''
            } */}
                <h1 className='text-2xl font-bold'>Task Form</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type='title'
                        {...register('title', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Title'
                        autoFocus
                    />
                    {errors.title && <p className='text-red-500'>Title is required</p>}
                    <textarea
                        type='description'
                        {...register('description', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Description'
                    />
                    {errors.description && <p className='text-red-500'>Description is required</p>}


                    <button type='submit'>Save</button>
                </form>
                {/* <p className='flex gap-x-2 justify-between'>Don´t have acount? <Link className='text-sky-500' to={'/register'}>Sign up</Link> </p> */}
            </div>

        </div>
    )
}

export default TaskFormPage