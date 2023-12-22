import { Card } from "flowbite-react";
import TaskCard from "./TaskCard";
import { Droppable } from "react-beautiful-dnd";
const Todo = () => {
    return (
        <Card className="my-3">

            <p>Todo</p>
            <Droppable droppableId="Todo" type="group">
                {
                    (provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <TaskCard id="1" />
                        </div>
                    )
                }
            </Droppable>

        </Card>
    );
};

export default Todo;