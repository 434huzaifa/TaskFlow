import { Button, Card, Carousel } from 'flowbite-react';
import task1 from "./assets/task1.jpg"
import task2 from "./assets/task2.jpg"
import task3 from "./assets/task3.jpg"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const customtheme = {
    "indicators": {
        "active": {
            "off": "bg-black/50 hover:bg-black dark:bg-gray-800/50 dark:hover:bg-gray-800",
            "on": "bg-black dark:bg-gray-800"
        },
        "base": "h-3 w-3 rounded-full",
        "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    }
}
const ExplorerNow = () => {
    return (
        <Button ><Link to="/task">Explore Now</Link></Button>
    )
}

const Banner = () => {
    return (
        <Card className="h-[70vh] my-3 ">
            <Carousel slide={false} theme={customtheme} pauseOnHover rightControl={<FaArrowAltCircleRight className='text-3xl' />} leftControl={<FaArrowAltCircleLeft className='text-3xl' />}>
                <div className='w-full h-full flex'>
                    <img src={task1} alt="" className='h-full flex-1 object-contain' />
                    <div className='flex-1 flex justify-center items-center flex-col'>
                        <p className='text-5xl font-bold my-3'>TaskFlow: Unleash Productivity, Simplify Management.</p>
                        <p className='light my-3'>Introducing TaskFlow, where productivity meets simplicity! Say goodbye to the complexities of task management. With TaskFlow, you can effortlessly create, organize, and track your tasks. Experience a seamless flow of productivity as you unleash the full potential of your projects. Try TaskFlow today and simplify your task management journey!</p>
                        <ExplorerNow></ExplorerNow>
                    </div>

                </div>
                <div className='w-full h-full flex'>
                    <img src={task2} alt="" className='w-full h-full object-contain flex-1' />
                    <div  className='flex-1 flex justify-center items-center flex-col'>
                        <p className='text-5xl font-bold my-3'>Seamless Task Mastery: Plan, Execute, Achieve.</p>
                        <p  className='light my-3'>Welcome to Seamless Task Mastery! Planning, executing, and achieving your goals has never been smoother. Our platform empowers you to create tasks effortlessly, execute them seamlessly, and ultimately achieve success. Experience the ease of task management with Seamless Task Mastery. Start planning your success story today!</p>
                        <ExplorerNow></ExplorerNow>
                    </div>

                </div>
                <div className='w-full h-full flex'>
                    <img src={task3} alt="" className='w-full h-full object-contain flex-1' />
                    <div  className='flex-1 flex justify-center items-center flex-col'>
                        <p className='text-5xl font-bold my-3'>Effortless Productivity: Your Tasks, Your Way.</p>
                        <p  className='light my-3'>Unlock effortless productivity with YourTasks, YourWay! Tailor your task management experience to suit your unique style. Create tasks with ease, change statuses effortlessly with a simple drag-and-drop, and watch your productivity soar. YourTasks, YourWay is not just a tool; it is your personalized path to productivity. Start managing your tasks the way you want and achieve more with ease!</p>
                        <ExplorerNow></ExplorerNow>
                    </div>

                </div>
            </Carousel>

        </Card>
    );
};

export default Banner;