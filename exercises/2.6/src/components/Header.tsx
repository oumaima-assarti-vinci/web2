import "./Header.css";
import type React from "react";

interface HeaderProps{
    urlLogo: string;
    children: React.ReactNode;
}

const Header = (Props: HeaderProps) => {
    return(
        <header className="header">
            <img src= {Props.urlLogo} alt="logo" className="logo" />
            <div>{Props.children}</div>
        </header>
    )
};
export default Header;