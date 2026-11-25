
import facultiesData from "../data/faculties.json";
import "./Faculties.css";

function Faculties() {
    return (
        <section className="faculties section" id="faculties">

            <div className="section-heading">

                <span className="section-label">
                    {facultiesData.sectionLabel}
                </span>

                <h2>{facultiesData.title}</h2>

                <p>{facultiesData.description}</p>

            </div>

            <div className="faculties-grid">

                {facultiesData.faculties.map(faculty => (
                    <article
                        className="faculty-card"
                        key={faculty.id}
                    >

                        <img
                            src={faculty.image}
                            alt={faculty.name}
                        />

                        <div className="faculty-content">

                            <span className="faculty-icon">
                                {faculty.icon}
                            </span>

                            <h3>{faculty.name}</h3>

                            <p>{faculty.specialties}</p>

                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
}

export default Faculties;
