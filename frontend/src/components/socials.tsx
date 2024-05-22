import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";
import { FaGoogle } from "react-icons/fa";


export const Socials = () => {

    const navigate = useNavigate();

    const handleLogin = useGoogleLogin({
        onSuccess: async (response) => {
            const acces_token = response.access_token;

            const server_response = await axios.post("http://localhost:3000/user/auth/google", { access_token: acces_token }, {withCredentials: true});

            if(server_response.status === 200) {
                navigate("/home")
            } else {
                console.log(server_response.data.error);
            }

        },
        onError: error => console.log(error)
    })
   
    return (
        <div className="flex justify-evenly items-center gap-x-2 py-2">

            <button 
                className="border w-full flex justify-center items-center py-2 rounded-xl bg-light-secondary hover:bg-light-bordercolor transition-all duration-150 dark:border-dark-bordercolor dark:bg-dark-backgroundtwo dark:hover:bg-dark-secondary"
                
                onClick={() => handleLogin()}
            >
                <FaGoogle />
            </button> 

        </div>
    )
};