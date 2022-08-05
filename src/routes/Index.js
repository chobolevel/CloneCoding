import styles from "./Index.module.css";
import Header from "../components/Header";
import Download from "../components/Download";
import Section from "../components/Section";
import Footer from "../components/Footer";

function Index() {
    return (
        <div>
            <Download />
            <Header />
            <Section />
            <Footer />
        </div>
    )
}
export default Index;