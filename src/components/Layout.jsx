import { Outlet } from "react-router-dom"
import Sidebar from "src/components/Sidebar";
import Navbar from "src/components/Navbar.jsx";

export default function Layout({}) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="ml-80 flex flex-col flex-1 min-h-screen bg-gray-100">
                <Navbar />
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}