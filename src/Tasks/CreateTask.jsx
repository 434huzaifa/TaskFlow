import { Button, Label, Modal, Select, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { DateTimePicker } from 'react-rainbow-components';
import { FaPlusSquare } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../useAxios";
const CreateTask = ({ type = "Pending" ,tasks}) => {
    const [date, setDate] = useState(new Date())
    const [openModal, setOpenModal] = useState(false);
    const form = useForm()
    const caxios=useAxios()
    const taskCreate=useMutation({
        mutationFn:async (data)=>{
            let res=await caxios.post("/task",data)
            return res.data
        },
        onSuccess: async ()=>{
           await tasks.refetch()
        }
    })
     const onSubmit = async (data) => {
        setOpenModal(false)
        data.expire = date
        data.status = type
        await taskCreate.mutateAsync(data)
        console.log(data);
    }
    return (
        <>
            <div className='my-3 rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex justify-between items-center p-2' onClick={() => setOpenModal(true)}>
                <p>Create Task for {type}</p>
                <FaPlusSquare />
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Modal.Header>Create Task for {type}</Modal.Header>
                <Modal.Body>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="title" value="Task Title" />
                                </div>
                                <TextInput id="title" {...form.register("title", {
                                    required: "Task Title is required.",
                                    maxLength: {
                                        value: 200,
                                        message: "Title is more than 200 character"
                                    }
                                })} type="text" />
                            </div>
                            <p className="italic bold text-red-500">{form.formState?.errors?.title?.message}</p>
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="priority" value="Select Task Priority" />
                                </div>
                                <Select id="priority" {...form.register("priority", {
                                    required: "Please select a priority",

                                })} defaultValue="Normal">
                                    <option value="Normal">Normal</option>
                                    <option value="High">High</option>
                                    <option value="Low">Low</option>
                                </Select>
                            </div>
                            <p>{form.formState?.errors?.priority?.message}</p>
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="details" value="Task details" />
                                </div>
                                <Textarea id="details" {...form.register("details")} placeholder="details..." />
                            </div>
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label htmlFor="expire" value="Expire" />
                                </div>
                                <DateTimePicker
                                    id="expire"
                                    value={date}
                                    onChange={value => setDate(value)}
                                    formatStyle="large"
                                    borderRadius="semi-square"
                                    minDate={new Date()}
                                />
                            </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit">Create Task</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
                </form>
            </Modal>

        </>
    );
};

export default CreateTask;