import Dashboard from "../Components/Dashboard";
import Sidebar from "../Components/Sidebar";

const Home = () => {
   return (
      <div className="flex h-screen">
         <aside className="h-full overflow-auto bg-gray-100">
            <Sidebar />
         </aside>
         <main className="flex-1 p-2 h-full overflow-auto bg-gray-100">
            <Dashboard />
         </main>
      </div>
   )
};

export default Home;
