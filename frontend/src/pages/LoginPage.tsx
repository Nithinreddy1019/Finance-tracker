import { NavBar } from "../components/navbar";
import { CardWrapper } from "../components/ui/card-wrapper";

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
                    <p>Login page</p>
                </CardWrapper>

            </section>

        </div>
    )
};


export default LoginPage;