import { NavBar } from "../components/navbar";
import { Socials } from "../components/socials";
import { Button } from "../components/ui/button";
import { CardWrapper } from "../components/ui/card-wrapper";
import { InputBox } from "../components/ui/input-box";

const RegisterPage = () => {
    return (
        <div className="h-screen bg-white dark:bg-dark-backgroundone dark:text-light-background">
            <NavBar />
            
            <section className="flex items-center justify-center h-full p-2">

                <CardWrapper
                    headerName="Hola! from FT"
                    headerCaption="Please signin to continue"
                    backLinkDialog="Already have an account?"
                    backLinkName="Signin"
                    backLink="/login"
                >
                    <InputBox 
                        inputLabel="Email"
                        inputType="email"
                        inputPlaceholder="Johndoe@gmail.com"
                    />

                    <InputBox 
                        inputLabel="Name"
                        inputType="text"
                        inputPlaceholder="John doe"
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
                        Signup
                    </Button>

                    <hr className="my-2"/>

                    <Socials />

                </CardWrapper>

            </section>

        </div>
    )
};


export default RegisterPage;