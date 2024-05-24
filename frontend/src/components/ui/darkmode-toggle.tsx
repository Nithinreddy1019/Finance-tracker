import { useCallback, useEffect, useState } from "react";


import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export const DarkModeToggle = () => {

    const [dark, setDark] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
        const handleDefault = () => {
            setDark(mediaQuery.matches);
            if(mediaQuery.matches) document.body.classList.toggle("dark");
        };

        handleDefault();

    }, [])

    // const handleDarkModeToggle = () => {
    //     setDark(!dark);
    //     document.body.classList.toggle("dark")
    // };

    const handleDarkModeToggle = useCallback(() => {
        setDark(e => !e);
        document.body.classList.toggle("dark")
    }, [])

    return (
        <div>
            <button onClick={handleDarkModeToggle} className="transition-all duration-100 border-2 border-light-primary rounded-xl px-2 py-2 dark:border-dark-primary hover:bg-gray-200 dark:hover:bg-gray-900">
                {dark && <Sun fill="#7C3AED" color="#7C3AED" size={16}/>}
                {!dark && <Moon fill="#7C3AED" color="#7C3AED" size={16}/>}
            </button>
        </div>
    )
};

