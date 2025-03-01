import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h2>Noctura</h2>
            <nav>
                <Link to = "/">Home</Link>
                <Link to = "/excuses">Excuses</Link>
                <Link to = "/profile">Profile</Link>
            </nav>
        </header>
    );
};

export default Header;
