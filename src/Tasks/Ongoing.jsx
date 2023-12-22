import { Card } from "flowbite-react";
import { Droppable } from "react-beautiful-dnd";
const Ongoing = () => {
    return (
        <Card className="my-3">
            <p>Ongoing</p>
            <Droppable droppableId="ongoing">
            {
                    (provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                        </div>
                    )
                }
            </Droppable>
        </Card>
    );
};

export default Ongoing;