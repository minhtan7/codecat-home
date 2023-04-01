
import Navbar from "@/components/Navbar/navbar";
import Intro3 from "@/components/Intro3/intro3";
import Footer from "@/components/Footer/footer";
import DarkTheme from "@/layouts/Dark";
import FullTestimonials from "@/components/Full-testimonials/full-testimonials";
import Team from "@/components/Team/team";
import Blogs3 from "@/components/blogs/Blogs3/blogs3";
import Services2 from "@/components/Services2/services2";
import Works2 from "@/components/Works2/works2";
import Numbers2 from "@/components/Numbers2/numbers2";
import { useEffect, useRef } from "react";
import Navbar1 from "@/components/Navbar-1/navbar-1";
import PageHeader1 from "@/components/Page-header1/page-header1";


const Homepage3 = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
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
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar1 nr={navbarRef} lr={logoRef} />
      <PageHeader1/>
      <Intro3 />
      <Services2 style="4item" />
      <Works2 />
      <Numbers2 />
      <FullTestimonials withIMG />
      <Team />
      <Blogs3 />
      <Footer hideBGCOLOR />
    </DarkTheme>
  );
};

export default Homepage3;
