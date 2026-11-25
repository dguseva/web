import "./hero.css";
import headerData from "../data/header.json";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <span className="hero-label">
                    ЛАСКАВО ПРОСИМО ДО УНІВЕРСИТЕТУ
                </span>

                <h1>{headerData.heroTitle}</h1>

                <p>{headerData.heroDescription}</p>

                <a href="#faculties" className="hero-button">
                    {headerData.heroButton}
                    <span> →</span>
                </a>

            </div>

        </section>
    );
}

export default Hero;
