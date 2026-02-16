import { NavLink } from "react-router-dom";
import { Logout } from "../components/Logout.jsx";
import "../styles/Navbar.scss";
import { MdDashboard } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
// import { CiSettings } from "react-icons/ci";
import penguin from "../imgs/penguin.jpg";




export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-intro">
                <p className="nav-title">LifeBook</p>
                <div className="nav-image">
                    <img src={penguin} alt="Penguin" className="pfp"/>
                </div>
            </div>
            <div className="nav-links">
                <NavLink
                    to="/dashboard"
                    className={({isActive}) => isActive ? 'link active' : 'link'}><MdDashboard /> Dashboard</NavLink>
                <NavLink
                    to="/entry"
                    className={({isActive}) => isActive ? 'link active' : 'link'}><FiBookOpen /> Entry</NavLink>
            </div>
            <div className="nav-logout">
                <Logout />
            </div>
        </nav>
    )
}