import { Button, Card, Label, TextInput } from 'flowbite-react';
import { BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from "./useAuth";
const Login = () => {
    const { SignIn, googlemama } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    function GetFromForm(e) {
        e.preventDefault();
        let email = String(e.target.email.value).trim().toLowerCase();
        let password = String(e.target.password.value).trim();
        let error = document.getElementById("error")
        error.textContent = ""
        SignIn(email, password).then(() => {
            if (location.state != null) {
                navigate(location.state)
            } else {
                navigate('/task')
            }
        }
        ).catch(err => error.textContent = err.message)
    }
    async function itsgoogletime() {
        googlemama()
            .then(async () => {
                if (location.state != null) {
                    navigate(location.state)
                } else {
                    navigate('/task')
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="my-4">
            <Card>
                <div className='flex lg:flex-row flex-col justify-center items-center '>

                    <div className='flex-1 w-full'>
                        <form className="flex flex-col gap-4" onSubmit={GetFromForm}>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Your email" />
                                </div>
                                <TextInput id="email" name='email' type="email" required />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="Your password" />
                                </div>
                                <TextInput id="password" name='password' type="password" required />
                            </div>
                            <p id='error' className='text-red-500 font-semibold '></p>
                            <div className='flex gap-2 justify-center'>
                                <Button type="submit">Login</Button>
                                <Button onClick={itsgoogletime}><BsGoogle></BsGoogle></Button>
                            </div>
                        </form>
                        <p>If you do not have a account please, <Link to="/register" className='underline text-cyan-500'>Register</Link></p>
                    </div>
                    <div className='flex-1'>
                        <img src="/login.webp" alt="" />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Login;