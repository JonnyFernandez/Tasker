import { createContext, useContext, useEffect, useState } from "react";
import { getChecks, addCheck, deleteCheck } from "../api/check";

const CheckContext = createContext({});

export const CheckProvider = ({ children }) => {

    const [checks, setChecks] = useState([])


    const createCheck = async (id, task) => {
        // console.log(task);
        try {
            const res = await addCheck(id, task)

        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        const getAllChecks = async () => {
            try {
                const res = await getChecks()
                const info = res.data
                // console.log(info);
                if (info.length > 0) {
                    setChecks(info.filter(item => item.check === true))
                } else {
                    console.log("you need make a Task");
                }
            } catch (error) {
                console.log(error);
            }
        };
        getAllChecks()
    }, [])

    const deleteOne = async (id, task) => {
        // console.log(task);
        try {
            await deleteCheck(id, task)
            setChecks(checks.filter(item => item._id !== id))
        } catch (error) {
            console.log(error);
        }
    }

    const refresh = async () => {
        try {
            const res = await getChecks()
            const info = res.data
            setChecks(info.filter(item => item.check === true))
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <CheckContext.Provider value={{ checks, createCheck, deleteOne, refresh }}>
            {children}
        </CheckContext.Provider>
    )
}

export const useChecks = () => useContext(CheckContext)