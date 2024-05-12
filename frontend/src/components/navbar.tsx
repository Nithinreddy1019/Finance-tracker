import { Menu } from "lucide-react";
import logo from "../../public/ft.svg"
import { Button } from "./ui/button";
import { DarkModeToggle } from "./ui/darkmode-toggle";
import { Link, useLocation } from "react-router-dom";

import { loginAuthRoutes, registerAuthRoutes } from "../utils";

export const NavBar = () => {

    const location = useLocation();
    const { hash, pathname, search } = location;

    return (
        <nav className="flex items-center justify-between p-2 ">
            
            <div className="flex justify-center items-center">
                <Menu 
                    size={32}
                    className="dark:text-dark-primary"
                />
                <Link to={"/"}>
                    <img 
                        src={logo} 
                        className="w-10 pb-2"
                    />
                </Link>
            </div>


            <div className="flex justify-center items-center gap-x-2">

                <DarkModeToggle />

                {loginAuthRoutes.includes(pathname) &&
                    <Button 
                        buttonType="primary" 
                        className="hidden md:block"
                    >
                        <Link to={"/register"}>
                            Signup
                        </Link>
                    </Button>
                }

                {registerAuthRoutes.includes(pathname) &&
                    <Button 
                        buttonType="secondary" 
                    >
                        <Link to={"/login"}>
                            Signin
                        </Link>
                    </Button>
                }
                
            </div>

        </nav>
    )
}