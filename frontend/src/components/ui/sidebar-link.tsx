
interface sidebarLinkProps {
    children: React.ReactNode,
    isFullSize: boolean,
    isActive: boolean,
    linkText: string
}


export const SidebarLink = ({
    children,
    isFullSize,
    isActive,
    linkText
}: sidebarLinkProps) => {
    return (
        <button
            className={`flex items-center gap-x-3 p-2 w-full h-12 rounded-lg hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary transition-colors duration-100 ${!isFullSize && "w-fit"} ${isActive && "bg-light-primary text-white"}`}
        >
            <div className="">
                {children}
            </div>

            {
                isFullSize && 
                <div className="text-md font-semibold overflow-hidden">
                    {linkText}
                </div>
            }
            
        </button>
    )
};