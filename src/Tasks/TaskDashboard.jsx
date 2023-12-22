import Completed from "./Completed";
import CreateTask from "./CreateTask";
import Ongoing from "./Ongoing";
import Todo from "./Todo";

const TaskDashboard = () => {
    return (
        <div>
            <div className="flex flex-col w-full">
                <CreateTask/>
                <Todo/>
                <Ongoing/>
                <Completed/>
            </div>
        </div>
    );
};

export default TaskDashboard;