
import { Spinner } from "flowbite-react";
import useAuth from "./useAuth";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
    const { user,loading } = useAuth()
    if (loading) {
        return(
            <div className="w-full min-h-[70vh]">
                <Spinner className="w-full" color="pink" aria-label="Extra large spinner example Center-aligned" size="xl" ></Spinner>
            </div>
        )
    }
    if (user) {
        return children;
    }
        return (
            <Navigate to="/login"></Navigate>
        )
    
    

};

export default Private;