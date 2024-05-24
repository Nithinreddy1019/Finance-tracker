import { useEffect } from "react";
import { useCookies } from "react-cookie";

const HomePage = () => {

    const [cookies, setCookie] = useCookies(["token"]);

    console.log(cookies["token"]);
    useEffect(() => {
        console.log(cookies["token"]);
    }, [])

    return (
        <div>
            Home page
        </div>
    )
};


export default HomePage;