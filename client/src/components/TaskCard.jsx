import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { BsCheckCircle, BsCircle } from 'react-icons/bs';
import { useState, useEffect } from 'react'
import { useTasks } from '../context/TaskContext';
import { useChecks } from '../context/Check.Context';




const TaskCard = (props) => {
    // console.log(props);
    const { deleteTask } = useTasks();
    const { checks, createCheck, deleteOne } = useChecks()
    //  -------------------------------------------------
    const myChecks = checks;
    const [check, setCheck] = useState(false)

    const handleCheck = () => {
        if (check) {
            setCheck(false)
            deleteOne(props.task._id, { check: false })
        } else {
            setCheck(true)
            createCheck(props.task._id, { check: true })
        }
    };

    useEffect(() => {
        myChecks.forEach((fav) => {
            if (fav._id === props.task._id) {
                setCheck(true);
            }
        });
    }, [myChecks]);
    //  -------------------------------------------------


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
                {check
                    ? (<button onClick={handleCheck}> <BsCheckCircle className="text-green-500" /> </button>)
                    : (<button onClick={handleCheck}> <BsCircle className="text-gray-500" /> </button>)}
            </div>
        </div>
    );
};

export default TaskCard;
