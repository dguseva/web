
import footerData from "../data/footer.json";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer" id="contacts">

            <div className="footer-container">

                <div className="footer-about">

                    <h2>{footerData.universityName}</h2>

                    <p>{footerData.description}</p>

                </div>

                <div className="footer-contacts">

                    <h3>Контакти</h3>

                    <p>Адреса: {footerData.address}</p>

                    <p>
                        Email:{" "}
                        <a href={`mailto:${footerData.email}`}>
                            {footerData.email}
                        </a>
                    </p>

                    <p>
                        Телефон:{" "}
                        <a href={`tel:${footerData.phone}`}>
                            {footerData.phone}
                        </a>
                    </p>

                </div>

                <div className="footer-socials">

                    <h3>Ми в соціальних мережах</h3>

                    <div className="social-links">

                        {footerData.socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.name}
                            </a>
                        ))}

                    </div>

                </div>

            </div>

            <div className="footer-bottom">
                <p>{footerData.copyright}</p>
            </div>

        </footer>
    );
}

export default Footer;
