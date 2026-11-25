import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Faculties from "./components/Faculties";
import News from "./components/News";
import Admission from "./components/Admission";
import Footer from "./components/Footer";

import "./App.css";

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Faculties />
                <News />
                <Admission />
            </main>
            <Footer />
        </>
    );
}

export default App;
