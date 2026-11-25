
import admissionData from "../data/admission.json";
import "./Admission.css";

function Admission() {
    return (
        <section className="admission section" id="admission">

            <div className="admission-container">

                <div className="admission-info">

                    <span className="section-label">
                        {admissionData.sectionLabel}
                    </span>

                    <h2>{admissionData.title}</h2>

                    <p>{admissionData.description}</p>

                    <a href="#contacts" className="admission-button">
                        {admissionData.button}
                        <span> →</span>
                    </a>

                </div>

                <div className="admission-steps">

                    {admissionData.steps.map(step => (
                        <div
                            className="admission-step"
                            key={step.number}
                        >

                            <span>{step.number}</span>

                            <div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Admission;

