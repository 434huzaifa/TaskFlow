import { Badge, Card } from "flowbite-react";
import { Draggable } from "react-beautiful-dnd";
const TaskCard = ({ where = "todo", id }) => {
    return (
        <Draggable draggableId={id} key={id} index={1}>
            {
                (provided) => (
                    <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} >
                        <Card >
                            <p>Task1</p>
                            <p>Task1 Lots of task</p>
                            <p>{String(new Date())}</p>
                            <Badge>{where}</Badge>
                            <Badge>{"High"}</Badge>
                        </Card>
                    </div>
                )
            }
        </Draggable>
    );
};

export default TaskCard;