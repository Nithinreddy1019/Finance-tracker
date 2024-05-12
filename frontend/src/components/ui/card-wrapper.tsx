import { Link } from "react-router-dom";

interface CardWrapperProps {
    headerName?: string,
    headerCaption?: string,
    backLinkDialog?: string,
    backLinkName?: string,
    backLink: string,
    children: React.ReactNode
}

export const CardWrapper = ({
    headerName,
    headerCaption,
    backLinkDialog,
    backLinkName,
    backLink,
    children
}: CardWrapperProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-4 border-2 rounded-3xl p-4 w-[350px] md:w-[450px] py-8 border-light-bordercolor dark:border-dark-bordercolor dark:bg-dark-backgroundtwo ">

            <div className="flex flex-col items-center w-full">
                <h1 className="text-3xl font-semibold">
                    {headerName}
                </h1>
                <p className="text-sm font-semibold">
                    {headerCaption}
                </p>
            </div>

            <div className="w-full flex flex-col">
                {children}
            </div>

            <div className="flex items-center justify-center w-full">
                <p className="text-xs">
                    {backLinkDialog}
                </p>
                <p className="text-xs italic underline pl-1 hover:cursor-pointer">
                    <Link to={backLink}>
                        {backLinkName}
                    </Link>
                </p>
            </div>

        </div>
    )
};