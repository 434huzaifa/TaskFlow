import { Card, Spinner } from "flowbite-react";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

const Completed = ({tasks}) => {
    return (
        <Card className="my-3">
            <p className="text-center text-3xl font-semibold">Completed</p>
            {
                tasks.isLoading ? <Spinner aria-label="Center-aligned Extra large spinner example" size="xl" ></Spinner>:
                tasks.isSuccess? tasks.data.completed.length==0? <p>There is no Data</p>:
                <Droppable droppableId="Completed" type="group">
                {
                    (provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className="grid grid-cols-1 gap-4">
                            {
                                tasks.data.completed.map((x,index)=>{
                                    return(
                                        <TaskCard x={x} index={index} key={index}/>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </Droppable>:
            <p>Failed to load data</p>
            }
        </Card>
    );
};

export default Completed;