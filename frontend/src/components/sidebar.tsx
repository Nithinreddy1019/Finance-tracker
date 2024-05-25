import { BarChart3, Menu } from "lucide-react";
import { X } from "lucide-react";
import { Home } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Wallet } from "lucide-react";

import { useRecoilState } from "recoil";
import { hamburgerActiveStateAtom } from "../store/atoms/HamburgerActive";
import { SidebarLink } from "./ui/sidebar-link";
import { useLocation } from "react-router-dom";



export const SideBar = () => {

    const location = useLocation();

    const { hash, pathname, search } =location;

    const [hamburgerActive, setHamburgerActive] = useRecoilState(hamburgerActiveStateAtom);

    return (
        <nav className={`absolute -left-12 md:col-span-2 md:flex md:flex-col md:gap-y-6 md:pl-3 md:items-start md:overflow-hidden h-full md:p-2 bg-white border-r border-light-bordercolor text-black dark:bg-dark-backgroundtwo dark:border-dark-bordercolor dark:text-white  md:sticky md:left-0 ${hamburgerActive? "-left-0 md:min-w-[150px] w-full z-10 p-4" : "md:max-w-[68px]"}`}>
            

            <div 
                className={`w-full h-8 hidden md:flex relative p-2`}
            >
                
                <button
                    onClick={() => {
                        setHamburgerActive(change => !change);
                    }}
                >
                    {
                        hamburgerActive ? 
                        <X 
                            size={28}
                            className="absolute right-0 bottom-0"
                        /> : 
                        <Menu 
                            size={28}
                            className="absolute bottom-0"
                        />
                    }
                </button>
                
            </div>


            <div className=" w-full flex flex-col gap-y-6 pr-2">
                
                <SidebarLink 
                    isActive={pathname === "/home" ? true : false}
                    isFullSize={hamburgerActive}
                    linkText={"Home"}
                >
                    <Home />
                </SidebarLink>

                <SidebarLink 
                    isActive={false}
                    isFullSize={hamburgerActive}
                    linkText={"Savings"}
                >
                    <ShoppingCart />
                </SidebarLink>

                <SidebarLink 
                    isActive={false}
                    isFullSize={hamburgerActive}
                    linkText={"Expenses"}
                >
                    <Wallet />
                </SidebarLink>

                <SidebarLink 
                    isActive={false}
                    isFullSize={hamburgerActive}
                    linkText={"Portfolio"}
                >
                    <BarChart3 />
                </SidebarLink>

            </div>

        </nav>
    )
};


