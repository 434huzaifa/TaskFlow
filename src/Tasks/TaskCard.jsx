import { Badge, Card, Tooltip } from "flowbite-react";
import moment from "moment";
import { Draggable } from "react-beautiful-dnd";
const TaskCard = ({ x ,index}) => {
    return (
        <Draggable draggableId={x._id} index={index}>
            {
                (provided) => (
                    <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}  >
                        {provided.placeholder}
                        <Card className={`${x.status=="Ongoing"?"bg-blue-400":x.status=="Completed"?"bg-green-400":"bg-white"}`}>
                            <div className="flex">
                            <div className="flex-1">
                            <p className="text-2xl text-bold">{x.title}</p>
                            <p className="italic font-light">{x.details || "No description"}</p>
                            </div>
                            <div className="flex gap-4">
                                <Tooltip content="CreatedAt">
                            <Badge color="purple">{moment(x.createdAt).format("DD,MMM YY, h:mm a")}</Badge></Tooltip>
                            <Tooltip content="Expire At">
                            <Badge color="warning">{moment(x.expire).format("DD,MMM YY, h:mm a")}</Badge></Tooltip>
                            <Tooltip content="Priority">
                            <Badge color={`${x.priority=="High"?"failure":x.priority=="Low"?"gray":"info"}`}>{x.priority}</Badge></Tooltip>
                            </div>

                            </div>
                        </Card>
                    </div>
                )
            }
        </Draggable>
    );
};

export default TaskCard;