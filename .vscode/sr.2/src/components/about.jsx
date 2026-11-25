import aboutData from "../data/about.json";
import "./about.css";

function About() {
    return (
        <section className="about section" id="about">

            <div className="about-container">

                <div className="about-image">
                    <img
                        src={aboutData.image}
                        alt="Студенти університету"
                    />
                </div>

                <div className="about-content">

                    <span className="section-label">
                        {aboutData.sectionLabel}
                    </span>

                    <h2>{aboutData.title}</h2>

                    <p className="about-description">
                        {aboutData.description}
                    </p>

                    <div className="advantages">
                        {aboutData.advantages.map(item => (
                            <div
                                className="advantage"
                                key={item.number}
                            >
                                <span className="advantage-number">
                                    {item.number}
                                </span>

                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

            <div className="statistics">
                {aboutData.statistics.map((item, index) => (
                    <div className="statistic" key={index}>
                        <strong>{item.value}</strong>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default About;
