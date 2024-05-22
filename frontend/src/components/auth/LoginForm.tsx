import { useRecoilState } from "recoil";
import { Socials } from "../../components/socials";
import { Button } from "../../components/ui/button";
import { CardWrapper } from "../../components/ui/card-wrapper";
import { InputBox } from "../../components/ui/input-box";
import { LoadFramerMotion } from "../../components/ui/load-framer-motion";
import { emailStateAtom, passwordStateAtom } from "../../store/atoms/Login";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useRecoilState(emailStateAtom);
    const [password, setPassword] = useRecoilState(passwordStateAtom);

    const handleLoginSubmit = async () => {
        
        try {
            
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/auth/login`, {
                email: email,
                password: password
            });

            if(response.status === 200) {
                toast.success(response.data.message);
            };

            navigate("/home")
            
        } catch (error: any) {
            if(axios.isAxiosError(error)) {
                toast.error(error.response?.data.error)
            } else {
                toast.error("An error occured")
            };
            
        };

    };

    return (
        <div className="h-screen bg-white dark:bg-dark-backgroundone dark:text-light-background">
            
            <Toaster 
                position="top-center"
                toastOptions={{
                    className: " dark:bg-dark-backgroundtwo dark:text-white dark:border-dark-bordercolor dark:border"
                }}
            />
            <section className="flex items-center justify-center h-full p-2">
                

                <LoadFramerMotion>
                <CardWrapper
                    headerName="Welcome back"
                    headerCaption="Please login to continue"
                    backLinkDialog="Don't have an account?"
                    backLinkName="Signup"
                    backLink="/register"
                >
                    <InputBox 
                        inputLabel="Email"
                        inputType="email"
                        inputPlaceholder="Johndoe@gmail.com"
                        onChange={ (e) => {
                            setEmail(e.target.value);
                        } }
                    />
                    
                    <InputBox 
                        inputLabel="Password"
                        inputType="password"
                        inputPlaceholder="********"
                        onChange={ (e) => {
                            setPassword(e.target.value);
                        } }
                    />

                    <Button
                        buttonType="primary"
                        className="my-2"
                        onClick={handleLoginSubmit}
                    >
                        Login
                    </Button>

                    <hr className="my-2"/>

                    <Socials />

                </CardWrapper>
                </LoadFramerMotion>

            </section>

        </div>
    )
};


