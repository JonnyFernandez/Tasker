
import { useEffect } from "react";
import TaskCard from '../components/TaskCard'
import { useChecks } from "../context/Check.Context";

const CheckPage = () => {

    const { refresh, checks } = useChecks()


    useEffect(() => {
        refresh()
    }, []);

    if (checks.length === 0) return <h1>No checks</h1>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {checks &&
                checks.map((item) => (
                    <TaskCard task={item} key={item._id} />
                ))}
        </div>
    );
};

export default CheckPage;
