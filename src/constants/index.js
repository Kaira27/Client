//PAGES
import SuperAdminHome from "../pages/SuperAdminHome"
import IciciHome from "../pages/IciciHome";
import Dashboard from "../pages/superAdmin/Dashboard";
import Profile from "../pages/superAdmin/Profile"
import Settings from "../pages/superAdmin/Settings";
import Tickets from "../pages/superAdmin/Tickets";
import UserManage from "../pages/superAdmin/UserManage";
import Login from "../pages/Login";

//COMPONENTS
import SuperSideBar from "../components/SuperSideBar";
import IciciSidebar from "../components/IciciSidebar";
import Executions from "../components/shared/dashboard/Executions";
import MonthlyOverview from "../components/shared/dashboard/MonthlyOverview";
import RecentExecutions from "../components/shared/dashboard/RecentExecutions";
import TicketCard from "../components/shared/tickets/TicketCard";
import Nav from "../components/Nav";
import PieChart from "../components/shared/dashboard/PieChart";

//IMAGES, ICONS
import checkmed from "../assets/checkmedLogo.svg"
import message from "../assets/message.svg"
import notification from "../assets/notification.svg"
import dashboard from "../assets/dashboard.svg"
import profile from "../assets/profile.svg"
import settings from "../assets/settings.svg"
import ticket from "../assets/ticket.svg"
import user from "../assets/user.svg"
import download from "../assets/download.svg"
import menLogo from "../assets/menLogo.svg"
import sort from "../assets/sort.svg"
import loginBg from "../assets/loginBg.svg"
import passwordIcon from "../assets/password.svg"
import cross from "../assets/cross.svg"
import filter from "../assets/filter.svg"
import drop from "../assets/drop.svg"
import menu from "../assets/menu.svg"

export const navLinks = [
    {
      id: "/admin/ticket",
      title: "Tickets",
    },
    {
      id: "features",
      title: "Features",
    },
    {
      id: "product",
      title: "Product",
    },
    {
      id: "clients",
      title: "Clients",
    },
  ];

export {
    SuperAdminHome,
    IciciHome,
    Dashboard,
    Profile,
    Settings,
    Tickets,
    UserManage,
    SuperSideBar,
    IciciSidebar,
    Executions,
    MonthlyOverview,
    RecentExecutions,
    TicketCard,
    Nav,
    PieChart,
    Login,
    notification,
    message,
    checkmed,
    dashboard,
    profile,
    settings,
    ticket,
    user,
    download,
    menLogo,
    sort,
    loginBg,
    passwordIcon,
    cross,
    filter,
    drop,
    menu,
}