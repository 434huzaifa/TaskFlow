import { Button, Card, Label, Select, TextInput, Textarea } from "flowbite-react";
import moment from "moment";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { DateTimePicker } from 'react-rainbow-components';

const CreateTask = ({ type = "Pending" }) => {
    const [date, setDate] = useState(new Date())
    const form = useForm()
    const onSubmit = (data) => {
        data.expire = date
        console.log(data);
    }
    return (
        <Card>
            <form onSubmit={form.handleSubmit(onSubmit)}>
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
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="priority" value="Select Task Priority" />
                    </div>
                    <Select id="priority" {...form.register("priority",{
                        required:"Please select a priority",
                        
                    })} defaultValue="Normal">
                        <option value="Normal">Normal</option>
                        <option value="High">High</option>
                        <option value="Low">Low</option>
                    </Select>
                </div>
                <p>{form.formState?.errors?.title?.message}</p>
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
                        locale={{ name: 'en-US', label: 'English (US)' }}
                        borderRadius="semi-square"
                        minDate={new Date()}
                    />
                </div>
                <Button type="Submit">Submit</Button>
            </form>
        </Card>
    );
};

export default CreateTask;