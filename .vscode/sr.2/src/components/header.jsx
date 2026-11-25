import "./header.css";
import headerData from "../data/header.json";

function Header() {
    return (
        <header className="header" id="home">

            <div className="header-container">

                <a href="#home" className="logo">
                    <span className="logo-name">
                        {headerData.universityName}
                    </span>

                    <span className="logo-subtitle">
                        {headerData.universitySubtitle}
                    </span>
                </a>

                <nav className="navigation">
                    {headerData.menu.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="nav-link"
                        >
                            {item.title}
                        </a>
                    ))}
                </nav>

                <a href="#admission" className="header-button">
                    Вступити
                </a>

            </div>

        </header>
    );
}

export default Header;
