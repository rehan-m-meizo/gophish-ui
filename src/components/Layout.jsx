import { Outlet } from "react-router-dom"


export default function Layout({}) {
    return (
        <main className={`min-h-screen p-4 ${sideNavState ? "ml-80" : ""}`}>
            {/*<NavBar />*/}
            <Outlet />
        </main>
    )
}