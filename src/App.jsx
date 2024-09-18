import AboutSection from "./components/landing/about";
import Banner from "./components/landing/banner";
import FeaturedWork from "./components/landing/featuredWork";
import ImageViewer from "./components/landing/imageViewer";
import LineofGitar from "./components/landing/lineofgitar";
import ScrollTrigered from "./components/landing/scrollTrigered";
import Layout from "./components/layout/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./components/landing/contact";
import Cursor from "./components/landing/cursor";
import "./App.css";
import Services from "./components/landing/Services";
import TextScrolling from "./components/landing/textScrolling";
import ThreeFiberBox from "./components/landing/threeFiberBox";

function App() {
  return (
    <div className="App">
      <Layout>
        <Cursor />
        <Banner />
        <ScrollTrigered />
        <ImageViewer />
        <FeaturedWork />
        <Services />
        <TextScrolling />
        <LineofGitar />
        <AboutSection />
        <ThreeFiberBox />
        <ContactForm />
      </Layout>
    </div>
  );
}

export default App;
