
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export const Socials = () => {
    return (
        <div className="flex justify-evenly items-center gap-x-2 py-2">
            <button 
                className="border w-full flex justify-center items-center py-2 rounded-xl bg-light-secondary hover:bg-light-bordercolor transition-all duration-150 dark:border-dark-bordercolor dark:bg-dark-backgroundtwo dark:hover:bg-dark-secondary"
            >
                <FaGoogle />
            </button>
            <button
                className="border w-full flex justify-center items-center py-2 rounded-xl bg-light-secondary hover:bg-light-bordercolor transition-all duration-150 dark:border-dark-bordercolor dark:bg-dark-backgroundtwo dark:hover:bg-dark-secondary"
            >
                <FaGithub />
            </button>
        </div>
    )
};