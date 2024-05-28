import { ChevronFirst, ChevronLast, EllipsisVertical } from "lucide-react";
import logo from "../../public/ft.svg";
import { DarkModeToggle } from "./ui/darkmode-toggle";
import { useRecoilState } from "recoil";
import { sideBarStateAtom } from "../store/atoms/sideBar";


interface SideBarProps {
    children: React.ReactNode
};

export const SideBar = ({
    children
}: SideBarProps) => {

    const [extended, setExtended] = useRecoilState(sideBarStateAtom);

    return (
        <aside className="h-full w-fit bg-light-background text-black dark:bg-dark-backgroundone dark:text-white">
            <nav className="h-full flex flex-col bg-light-background text-black dark:bg-dark-backgroundone dark:text-white border-r border-light-bordercolor dark:border-dark-bordercolor shadow-sm">

                <div 
                    className={`flex items-center gap-x-2 p-2 h-16 ${extended ? "justify-between border-b border-light-bordercolor dark:border-dark-bordercolor" : "justify-center pr-3"}`}
                >
                    <img 
                        src={logo}
                        className={`overflow-hidden transition-all ${extended ? "w-10 h-10" : "w-0"}`}
                    />
                    <button
                        className="p-1 bg-light-secondary rounded-full dark:bg-dark-primary hover:bg-light-primary hover:text-white dark:hover:opacity-80 dark:text-white"
                        onClick={() => {
                            setExtended(!extended)
                        }}
                    >
                        {
                            extended ? <ChevronFirst /> :
                            <ChevronLast />
                        }
                        
                    </button>
                </div>

                <ul className="flex-1 p-2 flex flex-col gap-y-3 pt-2">
                    {children}
                </ul>

                <div className="flex items-center justify-center gap-x-1 p-2 border-t border-light-bordercolor dark:border-dark-bordercolor">
                    <div className="flex items-center gap-x-2 bg-light-secondary rounded-lg p-1 text-black dark:bg-dark-backgroundone dark:text-white">
                        <div className={`text-xl font-semibold p-1 py-2 rounded-lg
                            bg-light-secondary dark:bg-dark-backgroundtwo`}>
                            KN
                        </div>
                        <div className={`overflow-hidden leading-4 transition-all ${extended? "" : "w-0 hidden"}`}>
                            <h4 className="font-semibold">Nithin</h4>
                            <p className="text-sm">nithin@gmail.com</p>
                        </div>
                        <div className={`overflow-hidden transition-all ${extended ? "" : "w-0 hidden"}`}>
                            <button className="hover:opacity-80 pt-1">
                                <EllipsisVertical size={24}/>
                            </button>
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all ${extended ? "" : "w-0 hidden"}`}>
                        <DarkModeToggle />
                    </div>

                </div>

                

            </nav>
        </aside>
    )
}