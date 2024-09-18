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
import { useEffect, useState } from "react";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      {isSmallScreen ? (
        <div className="mobile-view">
          <p>Its under the development</p>
          <p>Please use Desktop View</p>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default App;
