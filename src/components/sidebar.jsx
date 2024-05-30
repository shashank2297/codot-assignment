import React from "react";
import indiaflag from "../assets/indianflag.png";
import ola from "../assets/ola.png";
import home from "../assets/home.png";
import usage from "../assets/usage.png";
import settings from "../assets/Settings.png";
import observe from "../assets/observability.png";
import prayaan from "../assets/prayyan.png";
import interference from "../assets/interference.png";
import notification from "../assets/bell.png";
import people from "../assets/people.png";
import { Link } from "react-router-dom";
import "../css/style.css"

const menuItems1 = [
    { icon: home, name: "Home" },
    { icon: settings, name: "Services" },
    { icon: usage, name: "Usage" },
    { icon: observe, name: "Observability" },
    { icon: interference, name: "Interference As Service" },
    { icon: prayaan, name: "Prayan Notebook", path: "/prayaan"},
];

const menuItems2 = [
    { icon: indiaflag, name: "Region" },
    { icon: notification, name: "Notification" },
    { icon: people, name: "Profile" },
];

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="hicons">
                <div className="hicons-1">
                    <img src={ola} alt="ola" className="ola-logo" />
                    {menuItems1.map((item, index) => (
                        <Link to={item.path} className="link">
                        <p key={index}>
                            <img src={item.icon} alt={item.name} className="icon" />
                            <span className="item-name">{item.name}</span>
                        </p>
                        </Link>
                    ))}
                </div>
                <div className="hicons-2">
                    {menuItems2.map((item, index) => (
                        <p key={index}>
                            <img src={item.icon} alt={item.name} className="icon" />
                            <span className="item-name">{item.name}</span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
