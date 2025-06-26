import { HiOutlineChartBar, HiOutlineChat, HiOutlineChatAlt2, HiOutlineCog, HiOutlineUsers } from "react-icons/hi";

import { CiGrid42 } from "react-icons/ci";

export const routes = [
    {
        to: "/dashboard",
        Name: "Dashboard",
        Icon: CiGrid42,
        hasSubitem: false,
        level: 1,
        Component: <div>Dashboard</div>
    },
    {
        to: "/dashboard/reports",
        Name: "Reports",
        Icon: HiOutlineChartBar,
        hasSubitem: false,
        level: 1,
        Component: <div>Reports</div>
    },
    {
        to: "/dashboard/trainings",
        Name: "Trainings",
        Icon: HiOutlineChat,
        hasSubitem: false,
        level: 1,
        Component: <div>Trainings</div>
    },
    {
        to: "/dashboard/faq",
        Name: "FAQS",
        Icon: HiOutlineChatAlt2,
        hasSubitem: false,
        level: 1,
        Component: <div>Faqs</div>
    },
    {
        to: "/dashboard/settings",
        Name: "Settings & Users",
        Icon: HiOutlineCog,
        hasSubitem: false,
        level: 2,
        Component: <div>Settings</div>
    }
]