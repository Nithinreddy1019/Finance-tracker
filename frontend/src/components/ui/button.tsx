
interface ButtonProps {
    buttonType: 'primary' | 'secondary' | 'link',
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    children: React.ReactNode,
    className?: string
}

export const Button = ({
    buttonType, onClick, children, className
}: ButtonProps) => {

    const isPrimary = buttonType === "primary";
    const isSecondary = buttonType === "secondary";
    const isLink = buttonType === "link";



    return (
        <>

            {isPrimary && 
                <button
                    className={`flex items-center justify-center gap-x-1 px-3 py-2 rounded-xl text-sm font-semibold min-fit  bg-light-primary text-light-background hover:opacity-95 dark:bg-dark-primary ${className}`} 
                    onClick={onClick}
                >
                    {children}
                </button>
            }


            {isSecondary && 
                <button
                    className={`flex items-center justify-center gap-x-1 px-3 py-2 rounded-xl text-sm font-semibold min-fit bg-light-secondary text-black   hover:bg-gray-200 dark:bg-light-secondary ${className}`} 
                    onClick={onClick}
                >
                    {children}
                </button>
            }


            {isLink &&
                <button
                    className={`flex items-center justify-center gap-x-1 px-3 py-2 rounded-xl text-sm font-semibold min-fit underline underline-offset-2 dark:text-light-background hover:opacity-90 ${className}`} 
                    onClick={onClick}
                >
                    {children}
                </button>
            }

            
        </>
    )
}