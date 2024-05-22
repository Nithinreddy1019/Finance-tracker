import { useEffect } from "react";
import { useCookies } from "react-cookie";

const HomePage = () => {

    const [cookie] = useCookies(["token"]);

    useEffect(() => {
        console.log(cookie["token"]);
    }, [])

    return (
        <div>
            Home page
        </div>
    )
};


export default HomePage;