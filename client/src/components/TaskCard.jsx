import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import { BsCheckCircle, BsCircle } from 'react-icons/bs';
import { useState } from 'react'
const TaskCard = (props) => {
    const { deleteTask } = useTasks();


    const [check, setCheck] = useState(true)

    const confirmDelete = async () => {
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'No podrás recuperar esta tarea después de eliminarla',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true,
        });

        if (result.isConfirmed) {
            deleteTask(props.task._id);
        }
    };

    return (
        <div className="bg-zinc-800 max-w-md w-full p-4 rounded-md mx-auto mb-4 sm:mb-0 relative">
            <header className="relative z-10">
                <h1 className="text-lg sm:text-xl font-bold w-full sm:w-auto">{props.task.title}</h1>
                <div className="absolute top-0 right-0 flex gap-x-2">
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs sm:text-sm"
                        onClick={confirmDelete}
                    >
                        delete
                    </button>
                    <Link
                        to={`/tasks/${props.task._id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs sm:text-sm"
                    >
                        edit
                    </Link>
                </div>
            </header>
            <p className="text-slate-300">{props.task.description}</p>
            <p>{new Date(props.task.date).toLocaleDateString()}</p>
            <div className="absolute bottom-0 right-0 flex gap-x-2 p-2">
                {check === true ? (
                    <button onClick={() => checkTask(false)}>
                        <BsCheckCircle className="text-green-500" />
                    </button>
                ) : (
                    <button onClick={() => checkTask(true)}>
                        <BsCircle className="text-gray-500" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default TaskCard;
