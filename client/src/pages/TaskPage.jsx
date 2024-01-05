import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import { useChecks } from "../context/Check.Context";

const TaskPage = () => {
    const { getTasks, tasks } = useTasks();

    const { refresh } = useChecks()


    useEffect(() => {
        getTasks();
        refresh()
    }, []);

    if (tasks.length === 0) return <h1>No Tasks</h1>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {tasks &&
                tasks.map((item) => (
                    <TaskCard task={item} key={item._id} />
                ))}
        </div>
    );
};

export default TaskPage;
