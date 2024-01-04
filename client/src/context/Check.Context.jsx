import { createContext, useContext, useEffect, useState } from "react";
import { getChecks, addCheck, deleteCheck } from "../api/check";

const CheckContext = createContext({});

export const CheckProvider = ({ children }) => {

    const [checks, setChecks] = useState([])

    console.log(checks);

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



    return (
        <CheckContext.Provider value={{ checks, createCheck, deleteOne }}>
            {children}
        </CheckContext.Provider>
    )
}

export const useChecks = () => useContext(CheckContext)