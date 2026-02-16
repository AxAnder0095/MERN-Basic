import { Navbar } from "../components/Navbar.jsx";
import "../styles/Settings.scss";

export const Settings = () => {
    return (
        <div className="settings">
            <div className="settings-content-wrapper">
                <div className="settings-content">
                    <div className="navigation">
                        <Navbar />
                    </div>
                    <div className="settings-form">
                        <h1>Settings</h1>
                        <p>Form goes here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}