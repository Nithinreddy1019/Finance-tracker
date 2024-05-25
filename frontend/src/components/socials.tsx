import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";
import { FaGoogle } from "react-icons/fa";


export const Socials = () => {

    const navigate = useNavigate();

    // const handleLogin = useGoogleLogin({
    //     onSuccess: async (response) => {
    //         const acces_token = response.access_token;

    //         const server_response = await axios.post("http://localhost:3000/user/auth/google", { access_token: acces_token }, {withCredentials: true});

    //         if(server_response.status === 200) {
    //             navigate("/home")
    //         } else {
    //             console.log(server_response.data.error);
    //         }

    //     },
    //     onError: error => console.log(error)
    // })
   

    const handleLogin = async () => {
        try {
            const response = await axios.post(
            `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&include_granted_scopes=true&response_type=token&redirect_uri=http://localhost:5173/home&client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}`, {"Access-Control-Allow-Origin": "http://localhost:5173"});

            console.log(response.data)
        } catch (error) {
            
        }
    }

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