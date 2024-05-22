import { ChangeEvent, useState } from "react";

import { Eye, EyeOff } from "lucide-react";

interface InputBoxProps {
    inputLabel: string,
    inputPlaceholder?: string,
    inputType: "text" | "password" | "email",
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
}


export const InputBox = ({
    inputLabel,
    inputPlaceholder,
    inputType,
    onChange
}: InputBoxProps) => {


    const isTextOrEmail = inputType === "text" || inputType ===  "email";
    const isPassword = inputType === "password"
    
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);
    const passwordVisibilityHandler = () => {
        setPasswordIsVisible(!passwordIsVisible)
    }

    return (
        <>
            {isTextOrEmail && 
                <div className="flex flex-col gap-y-1 w-full py-2">
                    <label 
                        className="text-sm font-semibold"
                    >
                        {inputLabel}
                    </label>
                    <input 
                        className="w-full h-9 px-2 rounded-xl placeholder:text-sm border-light-bordercolor border-2 focus:outline-none focus:ring-0 focus:border-light-primary dark:bg-dark-backgroundtwo dark:border-dark-bordercolor focus:dark:border-dark-primary"
                        type={inputType}
                        placeholder={inputPlaceholder}
                        onChange={onChange}
                    />
                </div>
            }

            {isPassword && 
                <div className="flex flex-col gap-y-1 w-full py-2 relative">
                    <label 
                        className="text-sm font-semibold"
                    >
                        {inputLabel}
                    </label>
                    <input 
                        className="w-full h-9 px-2 rounded-xl placeholder:text-sm border-light-bordercolor border-2 focus:outline-none focus:ring-0 focus:border-light-primary dark:bg-dark-backgroundtwo dark:border-dark-bordercolor focus:dark:border-dark-primary"
                        type={passwordIsVisible ? "text" : "password"}
                        placeholder={inputPlaceholder}
                        onChange={onChange}
                    />
                    <button
                        onClick={passwordVisibilityHandler} 
                        className="absolute right-1 -bottom-0.5 -translate-y-1/2 p-1"
                    >
                        {
                            passwordIsVisible ? 
                                <EyeOff color="gray" size={20}/> : 
                                <Eye color="gray" size={20}/>
                        }
                    </button>
                </div>
            }
        </>
        
        
    )
};