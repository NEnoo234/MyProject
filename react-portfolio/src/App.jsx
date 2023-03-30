import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimonials from "./sections/testimonials/Testimonials";
import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import { useRef, useState, useEffect } from "react";
const App = () => {
  const mainref = useRef();

  const { themeState } = useThemeContext();
  const [showFloatingNav, SetShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPostion] = useState(0);
  const showFloatingNavHandler = () => {
    setSiteYPostion(true);
  };
  const hideFloatingNavHandler = () => {
    setSiteYPostion(false);
  };

  const floatingNav = () => {
    if (
      siteYPostion < mainref?.current?.getBoundingClientReact().y - 20 ||
      siteYPostion > mainref?.current?.getBoundingClientReact().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }
    SetShowFloatingNav(mainref?.current?.getBoundingClientReact().y);
  };
  useEffect(() => {
    setInterval(floatingNav, 2000);
  }, [siteYPostion]);
  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainref}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
