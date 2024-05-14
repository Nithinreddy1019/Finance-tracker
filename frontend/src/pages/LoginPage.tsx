import { LoginForm } from "../components/auth/LoginForm";
import { Carousel } from "../components/carousel";
import { NavBar } from "../components/navbar";

import finance from "../assets/carouselImages/finance.svg";
import expenses from "../assets/carouselImages/expenses.svg";
import investments from "../assets/carouselImages/investments.svg";

const LoginPage = () => {

    const imagesList = [finance, expenses, investments];

    return (
        <>
            <NavBar />
            <section className="grid grid-cols-3">
                <div className="hidden md:block md:col-span-1 ">
                    <Carousel 
                        imagesList={imagesList}
                    />
                </div>
                <div className=" col-span-3 md:col-span-2">
                    <LoginForm />
                </div>

            </section>
        </>
    )
};


export default LoginPage;