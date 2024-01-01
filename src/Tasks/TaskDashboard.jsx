import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Completed from "./Completed";
import CreateTask from "./CreateTask";
import Ongoing from "./Ongoing";
import Profile from "./Profile";
import Todo from "./Todo";
import { DragDropContext } from "react-beautiful-dnd";
import useAxios from "../useAxios";
import useAuth from "../useAuth";
import { useState } from "react";
const TaskDashboard = () => {
    const {user}=useAuth()
    const caxios = useAxios()
    const [todo,setTodo]=useState(null)
    const[ongoing,setOngoing]=useState(null)
    const[completed,setCompleted]=useState(null)
    const tasks = useQuery(
        {
            queryKey: ['tasks'],
            queryFn: async () => {
                let res = await caxios.get(`/tasks`)
                setTodo(res.data.pending)
                setOngoing(res.data.ongoing)
                setCompleted(res.data.completed)
                return res.data
            },
            enabled:!!user?.email
        }
    )

    async function DragDone(results) {
        console.log(results);
        const {source,destination,type,draggableId}=results
        if(!destination) return;
        if (source.droppableId===destination.droppableId && source.index===destination.index) {
            return
        }
        if(type==="group"){
            let newTodo=[...todo]
            const [removeTodo]=newTodo.splice(source.index,1)
            newTodo.splice(destination.index,0,removeTodo)
            console.log(newTodo);
            return setTodo(newTodo)
        }
    }
    return (
        <div>
            <DragDropContext onDragEnd={DragDone}>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <CreateTask type="Pending" tasks={tasks} />
                        <Todo tasks={tasks} todo={todo}  />
                    </div>
                    <div>
                        <CreateTask type="Ongoing" tasks={tasks} />
                        <Ongoing tasks={tasks} ongoing={ongoing}/>
                    </div>

                    <div>
                        <CreateTask type="Completed"  tasks={tasks}/>
                        <Completed tasks={tasks}  completed={completed}/>
                    </div>
                </div>
            </DragDropContext>
            <Profile tasks={tasks} />
        </div>
    );
};

export default TaskDashboard;