
import newsData from "../data/news.json";
import "./News.css";

function News() {
    return (
        <section className="news section" id="news">

            <div className="section-heading">

                <span className="section-label">
                    {newsData.sectionLabel}
                </span>

                <h2>{newsData.title}</h2>

                <p>{newsData.description}</p>

            </div>

            <div className="news-grid">

                {newsData.news.map(item => (
                    <article className="news-card" key={item.id}>

                        <img
                            src={item.image}
                            alt={item.title}
                        />

                        <div className="news-content">

                            <div className="news-meta">
                                <span>{item.date}</span>
                                <span>{item.category}</span>
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                            <a href="#contacts">
                                Детальніше →
                            </a>

                        </div>

                    </article>
                ))}

            </div>

        </section>
    );
}

export default News;
