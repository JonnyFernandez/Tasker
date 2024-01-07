import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='flex items-center justify-center h-screen flex-col mt-1 '  >
            <div className='bg-gray-600 p-8 rounded-md text-center mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20'>
                <h1 className='text-4xl font-bold mb-4'>Notes</h1>
                <p className='mb-4'>Captura tus ideas en segundos, estés donde estés.</p>
                <p className='mb-8'>¡Da rienda suelta a tu creatividad y productividad con Note Manager! <br />  Regístrate ahora para comenzar a tomar el control de tus pensamientos y tareas.</p>
                <NavLink
                    to='/task'
                    className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                >
                    Task
                </NavLink>
            </div>
        </div>
    );
};

export default HomePage;
