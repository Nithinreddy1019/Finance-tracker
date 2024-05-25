import { NavBar } from "../components/navbar";
import { SideBar } from "../components/sidebar";

const HomePage = () => {


return (
    <main>
        <NavBar />

        <section className="h-screen bg-light-background dark:bg-dark-backgroundone">

            <div className="h-full grid grid-cols-12 dark:bg-dark-backgroundone relative">

                {/* sidebar component */}
                <SideBar />
                
                {/* Main section */}
                <div className="h-full col-span-10">

                </div>

            </div>

        </section>
    </main>
);
};

export default HomePage;