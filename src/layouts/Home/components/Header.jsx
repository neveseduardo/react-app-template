import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="home-header">
            <nav className="home-nav">
                <ul>
                    <li>
                        <NavLink to={"/home"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/home/about"}>Sobre</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
