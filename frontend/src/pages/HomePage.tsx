import { SideBar } from "../components/sidebar";

import { Home, BarChart3, Wallet, ShoppingCart } from "lucide-react";
import { SidebarItem } from "../components/ui/sidebar-item";

const HomePage = () => {


return (
    <main className="h-screen flex">
        
        {/* Need to add link prop to sidebar item */}
        <SideBar>
            <SidebarItem 
                icon={<Home size={24}/>}
                text="Home"
                active={true}
            />
            <SidebarItem 
                icon={<BarChart3 size={24}/>}
                text="statistics"
                active={false}
            />
            <SidebarItem 
                icon={<Wallet size={24}/>}
                text="Expenses"
                active={false}
            />
            <SidebarItem 
                icon={<ShoppingCart size={24}/>}
                text="Savings"
                active={false}
            />
        </SideBar>

        <div className="w-full h-full bg-light-background text-black dark:bg-dark-backgroundone dark:text-white">
            Home section

        </div>

    </main>
);
};

export default HomePage;