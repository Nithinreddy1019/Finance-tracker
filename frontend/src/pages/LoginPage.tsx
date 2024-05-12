import { NavBar } from "../components/navbar";
import { Socials } from "../components/socials";
import { Button } from "../components/ui/button";
import { CardWrapper } from "../components/ui/card-wrapper";
import { InputBox } from "../components/ui/input-box";

const LoginPage = () => {
    return (
        <div className="h-screen bg-white dark:bg-dark-backgroundone dark:text-light-background">
            <NavBar />
            
            <section className="flex items-center justify-center h-full p-2">

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
                    />
                    
                    <InputBox 
                        inputLabel="Password"
                        inputType="password"
                        inputPlaceholder="********"
                    />

                    <Button
                        buttonType="primary"
                        className="my-2"
                    >
                        Login
                    </Button>

                    <hr className="my-2"/>

                    <Socials />

                </CardWrapper>

            </section>

        </div>
    )
};


export default LoginPage;