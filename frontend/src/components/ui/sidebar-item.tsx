import { useRecoilState } from "recoil";
import { sideBarStateAtom } from "../../store/atoms/sideBar";

interface SidebarItemProps {
    icon: React.ReactNode,
    text: string,
    active: boolean,
}

export const SidebarItem = ({
    icon,
    text,
    active
}: SidebarItemProps) => {

    const [extended, setExtended] = useRecoilState(sideBarStateAtom);

    return (
        <li
            className="px-2 py-1 relative group"
        >
            <button
                className={`flex items-center gap-x-2 w-full p-2 rounded-lg transition-colors group
                ${active? "bg-light-primary text-light-background" : "hover:bg-light-primary hover:text-light-background"}
                `}
            >
                <div className="transition-colors">
                    {icon}
                </div>
                <span
                    className={`font-semibold overflow-hidden transition-all ${extended ? "" : "w-0 hidden"}`}
                >{text}</span>
            </button>

            {
                !extended && 
                <div
                    className={`
                        absolute left-full ml-6 px-2 py-1 top-2 bg-light-primary text-light-background font-semibold
                        rounded-lg invisible opacity-20 -translate-x-3 transition-all 
                        group-hover:translate-x-0 group-hover:visible group-hover:opacity-100
                    `}
                >
                    {text}
                </div>
            }
        </li>
    )
};

