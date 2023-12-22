import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Completed from "./Completed";
import CreateTask from "./CreateTask";
import Ongoing from "./Ongoing";
import Profile from "./Profile";
import Todo from "./Todo";
import { DragDropContext } from "react-beautiful-dnd";
import useAxios from "../useAxios";
const TaskDashboard = () => {
    const caxios = useAxios()
    const qc=useQueryClient()
    const tasks = useQuery(
        {
            queryKey: ['tasks'],
            queryFn: async () => {
                let res = await caxios.get("/tasks")
                return res.data
            }
        }
    )
    const changepos=useMutation({
        mutationFn:async (data)=>{
            let res=await caxios.put("/changepos",data)
            return res.data
        },
        onSuccess:()=>{
            tasks.refetch()
        }
    })
    async function DragDone(results) {
        console.log(results);
        const {source,destination,type,draggableId}=results
        if(!destination) return;
        if (source.droppableId===destination.droppableId && source.index===destination.index) {
            return
        }
        if(type==="group"){
            tasks.data.pending[source.index]
            await changepos.mutateAsync({
                s_id:draggableId,
                s_index:tasks.data.pending[source.index],
                d_index:tasks.data.pending[destination.index]
            })
            qc.invalidateQueries(["tasks"])
            
        }
    }
    return (
        <div>
            <DragDropContext onDragEnd={DragDone}>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <CreateTask type="Pending" tasks={tasks} />
                        <Todo tasks={tasks} />
                    </div>
                    <div>
                        <CreateTask type="Ongoing" tasks={tasks} />
                        <Ongoing tasks={tasks} />
                    </div>

                    <div>
                        <CreateTask type="Completed"  tasks={tasks}/>
                        <Completed tasks={tasks} />
                    </div>
                </div>
            </DragDropContext>
            <Profile tasks={tasks} />
        </div>
    );
};

export default TaskDashboard;