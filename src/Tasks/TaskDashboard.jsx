import Completed from "./Completed";
import CreateTask from "./CreateTask";
import Ongoing from "./Ongoing";
import Profile from "./Profile";
import Todo from "./Todo";
import { DragDropContext } from "react-beautiful-dnd";
const TaskDashboard = () => {
    function DragDone(result) {
        console.log(result);
    }
    return (
        <div>
            <DragDropContext onDragEnd={DragDone}>
            <div className="flex flex-col w-full">
                <CreateTask/>
                <Todo/>
                <Ongoing/>
                <Completed/>
                <Profile/>
            </div>
            </DragDropContext>
        </div>
    );
};

export default TaskDashboard;