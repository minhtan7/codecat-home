import { useEffect, useRef } from "react";

import DarkTheme from "@/layouts/Dark";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import WorksHeader from "@/components/Works-header/works-header";
import WorksStyle2 from "@/components/Works-style2/works-style2";

const WorksDark = () => {
  const fixedHeader = useRef(null);
  const MainContent = useRef(null);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedHeader, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <WorksHeader sliderRef={fixedHeader} />
      <div ref={MainContent} className="main-content">
        <WorksStyle2 grid={3} filterPosition="center" />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default WorksDark;
