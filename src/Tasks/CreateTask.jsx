import { Button, Card, Label, TextInput, Textarea } from "flowbite-react";
import { useForm } from "react-hook-form"
const CreateTask = ({ type = "Pending" }) => {
    const form = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <Card>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="title" value="Task Title" />
                    </div>
                    <TextInput id="title" {...form.register("title",{
                        required:"Task Title is required.",
                        maxLength:{
                            value:200,
                            message:"Title is more than 200 character"
                        }
                    })} type="text" />
                </div>
                <p>{form.formState?.errors?.title?.message}</p>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="details" value="Task details" />
                    </div>
                    <Textarea id="details" {...form.register("details")} placeholder="details..." />
                </div>
                <Button type="Submit">Submit</Button>
            </form>
        </Card>
    );
};

export default CreateTask;