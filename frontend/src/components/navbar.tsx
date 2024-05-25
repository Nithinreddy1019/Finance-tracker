import { Menu } from "lucide-react";
import { X } from "lucide-react";
import logo from "../../public/ft.svg"
import { Button } from "./ui/button";
import { DarkModeToggle } from "./ui/darkmode-toggle";
import { Link, useLocation } from "react-router-dom";

import { authRoutes, loginAuthRoutes, registerAuthRoutes } from "../utils";
import { useRecoilState } from "recoil";
import { hamburgerActiveStateAtom } from "../store/atoms/HamburgerActive";

export const NavBar = () => {

    const location = useLocation();
    const { hash, pathname, search } = location;
    

    const [ hamburgerActive, setHamburgerActive ] = useRecoilState(hamburgerActiveStateAtom);

    

    return (
        <nav className="flex items-center justify-between p-2 border-b dark:border-b-dark-bordercolor dark:bg-dark-backgroundtwo sticky top-0 left-0 z-10 bg-white">
            {/* make it tensculent in darkmode */}
            {/* backdrop-filter backdrop-blur-lg z-10 dark:backdrop-blur-lg dark:backdrop-filter */}
            {/* add thee sonditionally onl if logged in */}
            
            <div className="flex justify-center items-center gap-x-2 relative">
                
                {
                    !authRoutes.includes(pathname) && 
                        <button 
                            className="text-light-primary dark:text-dark-primary block md:hidden"
                            onClick={() => {
                                setHamburgerActive(change => !change);
                            }}
                        >
                            
                            {
                                hamburgerActive ? 
                                <X 
                                    size={32}
                                /> :
                                <Menu 
                                    size={32}
                                    className=""
                                />
                            }
                        </button>
                }
                <Link to={"/"} className="left-0 h-8 w-8">
                    <img 
                        src={logo} 
                        className=" pb-0.5 absolute -top-0 h-8 w-8"
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