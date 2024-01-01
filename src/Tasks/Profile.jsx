import { Avatar, Button, Card } from "flowbite-react";
import useAuth from "../useAuth";
import {  useNavigate } from 'react-router-dom';
const customtheme = {
    "root": {
      "size": {
        "xl": "lg:w-36 lg:h-36 w-24 h-24"
      },
    },
  }
const Profile = () => {
    const {user,LogOut}=useAuth()
    const navigate = useNavigate()
    function loggingout() {
        LogOut().then(() => {
            navigate('/login')
        })
    }
    return (
        <Card className="my-3">
            <Avatar img={user.photoURL} theme={customtheme} rounded size="xl" />
            <p className="text-2xl font-bold">{user.displayName}</p>
            <p>{user.email}</p>
            <Button onClick={()=>loggingout}>Logout</Button>
        </Card>
    );
};

export default Profile;