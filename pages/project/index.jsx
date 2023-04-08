import scrollyNavbar from "@/common/scrollyNavbar";
import DarkTheme from "@/layouts/Dark";
import { useEffect, useRef, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Slider from "react-slick";

const Project = () => {
  useEffect(() => {
    scrollyNavbar();
  }, []);
  return (
    <DarkTheme>
      <Header />
      <Slider3 />
      <Feature3 />
      <Product3 />
      <Category />
      <ProductSliderStart />
      <CallActionStart />
      <BannerStart />
      <BrandLogoStart />
      <Footer />
    </DarkTheme>
  );
};
//HEADER AREA START (header-3)
export const Header = () => {
  const languages = [
    { label: "Arabic" },
    { label: "Bengali" },
    { label: "Chinese" },
    { label: "English" },
    { label: "French" },
    { label: "Hindi" },
  ];
  const iconSocialMedia = [
    { icon: <i className="fab fa-facebook-f"></i>, title: "Facebook" },
    { icon: <i className="fab fa-twitter"></i>, title: "Twitter" },
    { icon: <i className="fab fa-instagram"></i>, title: "Instagram" },
    { icon: <i className="fab fa-dribbble"></i>, title: "Dribbble" },
  ];
  const currencys = [
    { label: "USD - US Dollar", ref: "login.html" },
    { label: "CAD - Canada Dollar", ref: "wishlist.html" },
    { label: "EUR - Euro", ref: "register.html" },
    { label: "GBP - British Pound", ref: "account.html" },
    { label: "INR - Indian Rupee", ref: "wishlist.html" },
    { label: "BDT - Bangladesh Taka", ref: "wishlist.html" },
    { label: "JPY - Japan Yen", ref: "wishlist.html" },
    { label: "AUD - Australian Dollar", ref: "wishlist.html" },
  ];

  const userMenus = [
    { label: "Sign in" },
    { label: "Register" },
    { label: "My Account" },
    { label: "Wishlist" },
  ];
  const homeDemosImg = [
    { img: "home-1.jpg", label: "Home Style 01", ref: "index.html" },
    { img: "home-2.jpg", label: "Home Style 02", ref: "index-2.html" },
    { img: "home-3.jpg", label: "Home Style 03", ref: "index-3.html" },
    { img: "home-4.jpg", label: "Home Style 04", ref: "index-4.html" },
    {
      img: "home-5.jpg",
      label: "Home Style 05",
      span: <span className="menu-item-badge">video</span>,
      ref: "index-5.html",
    },
    { img: "home-6.jpg", label: "Home Style 06", ref: "index-6.html" },
    { img: "home-7.jpg", label: "Home Style 07", ref: "index-7.html" },
    { img: "home-8.jpg", label: "Home Style 08", ref: "index-8.html" },
    { img: "home-9.jpg", label: "Home Style 09", ref: "index-9.html" },
    { img: "home-10.jpg", label: "Home Style 10", ref: "index-10.html" },
    {
      img: "home-11.jpg",
      label: "Home Style 11",
      span: <span className="menu-item-badge">Service</span>,
      ref: "index-11.html",
    },
  ];
  const menuAbouts = [
    { label: "About", ref: "about.html" },
    { label: "Services", ref: "service.html" },
    { label: "Service Details", ref: "service-details.html" },
    { label: "Gallery", ref: "portfolio.html" },
    { label: "Gallery - 02", ref: "portfolio-2.html" },
    { label: "Gallery Details", ref: "portfolio-details.html" },
    { label: "Team", ref: "team.html" },
    { label: "Team Detailst", ref: "team-details.html" },
    { label: "FAQ", ref: "faq.html" },
    { label: "Google Map Locations", ref: "locations.html" },
  ];
  const menuShops = [
    { label: "Shop", ref: "shop.html" },
    { label: "Shop Grid", ref: "shop-grid.html" },
    { label: "Shop Left sidebar", ref: "shop-left-sidebar.html" },
    { label: "Shop right sidebar", ref: "shop-right-sidebar.html" },
    { label: "Shop details", ref: "product-details.html" },
    {
      label: "Shop details no sidebar",
      ref: "product-details-no-sidebar.html",
    },
  ];
  const otherPageListShop = [
    { label: "Cart", ref: "cart.html" },
    { label: "Wishlist", ref: "wishlist.html" },
    { label: "Checkout", ref: "checkout.html" },
    { label: "Order Tracking", ref: "order-tracking.html" },
    { label: "My Account", ref: "account.html" },
    {
      label: "Sign in",
      ref: "account.html",
    },
    {
      label: "Register",
      ref: "register.html",
    },
  ];
  const news = [
    { label: "News", ref: "blog.html" },
    { label: "News Grid", ref: "blog-grid.html" },
    { label: "News Left sidebar", ref: "blog-left-sidebar.html" },
    { label: "News Right sidebar", ref: "blog-right-sidebar.html" },
    { label: "News details", ref: "blog-details.html" },
  ];
  const innerPages1 = [
    { label: "Gallery", ref: "portfolio.html" },
    { label: "Gallery - 02", ref: "portfolio-2.html" },
    { label: "Gallery Details", ref: "portfolio-details.html" },
    { label: "Team", ref: "team.html" },
    { label: "Team Detailst", ref: "team-details.html" },
    { label: "FAQ", ref: "faq.html" },
  ];
  const innerPages2 = [
    { label: "History", ref: "history.html" },
    { label: "Appointment", ref: "contact.html" },
    { label: " Google Map Locations", ref: "locations.html.html" },
    { label: "404", ref: "404.html" },
    { label: "404", ref: "404.html" },
    { label: "Coming Soon", ref: "coming-soon.html" },
  ];
  const shopPages = [
    { label: "Shop", ref: "shop.html" },
    { label: "Shop Grid", ref: "shop-grid.html" },
    { label: "Shop Left sidebar", ref: "shop-left-sidebar.html" },
    { label: "Shop right sidebar", ref: "shop-right-sidebar.html" },
    { label: "Shop details", ref: "product-details.html" },
    {
      label: "Cart",
      ref: "cart.html",
    },
  ];
  return (
    <header className="ltn__header-area ltn__header-3 section-bg-6">
      {/* <!-- ltn__header-top-area start --> */}
      <div className="ltn__header-top-area ">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="ltn__top-bar-menu">
                <ul>
                  <li>
                    <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                      <i className="bi bi-envelope"></i> info@webmail.com
                    </a>
                  </li>
                  <li>
                    <a href="locations.html">
                      <i className="bi bi-geo-alt"></i> 15/A, Nest Tower, NYC
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="top-bar-right text-right">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>
                      {/* <!-- ltn__language-menu --> */}
                      <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                        <ul>
                          <li>
                            <a href="#" className="dropdown-toggle">
                              <span className="active-currency">English</span>
                              <i className="bi bi-arrow-down"></i>
                            </a>
                            <ul>
                              {languages.length &&
                                languages.map((language) => {
                                  return (
                                    <li key={language.label}>
                                      <a href="#">{language.label}</a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      {/* <!-- ltn__social-media --> */}
                      <div className="ltn__social-media">
                        <ul>
                          {iconSocialMedia.length &&
                            iconSocialMedia.map((icon, index) => {
                              return (
                                <li key={index}>
                                  <a href="#" title="Facebook">
                                    {icon.icon}
                                  </a>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ltn__header-top-area end -->
        <!-- ltn__header-middle-area start --> */}
      <div className="ltn__header-middle-area">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="site-logo">
                <a href="index.html">
                  <img src="./img/logoBrocoli.png" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col header-contact-serarch-column d-none d-lg-block">
              <div className="header-contact-search">
                {/* <!-- header-feature-item --> */}
                <div className="header-feature-item">
                  <div className="header-feature-icon">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className="header-feature-info">
                    <h6>Phone</h6>
                    <p>
                      <a href="tel:0123456789">+0123-456-789</a>
                    </p>
                  </div>
                </div>
                {/* <!-- header-search-2 --> */}
                <div className="header-search-2">
                  <form id="#123" method="get" action="#">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search here..."
                    />
                    <button type="submit">
                      <span>
                        <i className="bi bi-search"></i>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col">
              {/* <!-- header-options --> */}
              <div className="ltn__header-options">
                <ul>
                  <li className="d-none">
                    {/* <!-- ltn__currency-menu --> */}
                    <div className="ltn__drop-menu ltn__currency-menu">
                      <ul>
                        <li>
                          <a href="#" className="dropdown-toggle">
                            <span className="active-currency">USD</span>
                          </a>
                          <ul>
                            {currencys.length &&
                              currencys.map((currency, index) => {
                                return (
                                  <li key={index}>
                                    <a href={currency.ref}>{currency.label}</a>
                                  </li>
                                );
                              })}
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="d-lg-none">
                    {/* <!-- header-search-1 --> */}
                    <div className="header-search-wrap">
                      <div className="header-search-1">
                        <div className="search-icon">
                          <i className="bi bi-search  for-search-show"></i>
                          <i className="icon-cancel  for-search-close"></i>
                        </div>
                      </div>
                      <div className="header-search-1-form">
                        <form id="#" method="get" action="#">
                          <input
                            type="text"
                            name="search"
                            placeholder="Search here..."
                          />
                          <button type="submit">
                            <span>
                              <i className="bi bi-search"></i>
                            </span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </li>
                  <li className="d-none---">
                    {/* <!-- user-menu --> */}
                    <div className="ltn__drop-menu user-menu">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="bi bi-person"></i>
                          </a>
                          <ul>
                            {userMenus.length &&
                              userMenus.map((userMenu, index) => {
                                return (
                                  <li key={index}>
                                    <a href="login.html">{userMenu.label}</a>
                                  </li>
                                );
                              })}
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    {/* <!-- mini-cart 2 --> */}
                    <div className="mini-cart-icon mini-cart-icon-2">
                      <a
                        href="#ltn__utilize-cart-menu"
                        className="ltn__utilize-toggle"
                      >
                        <span className="mini-cart-icon">
                          <i className="bi bi-cart3"></i>
                          <sup>2</sup>
                        </span>
                        <h6>
                          <span>Your Cart</span>{" "}
                          <span className="ltn__secondary-color">$89.25</span>
                        </h6>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ltn__header-middle-area end -->
        <!-- header-bottom-area start --> */}
      <div className="header-bottom-area  ltn__border-top ltn__header-sticky  ltn__sticky-bg-white ltn__primary-bg--- section-bg-1 menu-color-white--- d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col header-menu-column justify-content-center">
              <div className="sticky-logo">
                <div className="site-logo">
                  <a href="index.html">
                    <img src="img/logoBrocoli.png" alt="Logo" />
                  </a>
                </div>
              </div>
              <div className="header-menu header-menu-2">
                <nav>
                  <div className="ltn__main-menu">
                    <ul>
                      <li className="menu-icon">
                        <a href="#">Home</a>
                        <ul className="sub-menu menu-pages-img-show ltn__sub-menu-col-2---">
                          {homeDemosImg.length &&
                            homeDemosImg.map((img, index) => {
                              return (
                                <li key={index}>
                                  <a href={img.ref}>
                                    {img.label} {img.span ? img.span : ""}
                                  </a>
                                  <img
                                    src={`./img/home-demos/${img.img}`}
                                    alt="#"
                                  />
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="menu-icon">
                        <a href="#">About</a>
                        <ul>
                          {menuAbouts.length &&
                            menuAbouts.map((menuIcon, index) => {
                              return (
                                <li key={index}>
                                  <a href={menuIcon.ref}>{menuIcon.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="menu-icon">
                        <a href="#">Shop</a>
                        <ul>
                          {menuShops.length &&
                            menuShops.map((menuHome, index) => {
                              return (
                                <li key={index}>
                                  <a href={menuHome.ref}>{menuHome.label}</a>
                                </li>
                              );
                            })}
                          <li>
                            <a
                              href="#"
                              className="d-flex flex-row justify-content-between"
                            >
                              Other Pages{" "}
                              <span className="float-end">{`>>`}</span>
                            </a>
                            <ul>
                              {otherPageListShop.length &&
                                otherPageListShop.map((list, index) => {
                                  return (
                                    <li key={index}>
                                      <a href={list.ref}>{list.label}</a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-icon">
                        <a href="#">News</a>
                        <ul>
                          {news.length &&
                            news.map((eNew, index) => {
                              return (
                                <li key={index}>
                                  <a href={eNew.ref}>{eNew.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="menu-icon mega-menu-parent">
                        <a href="#">Pages</a>
                        <ul className="mega-menu column-4">
                          <li>
                            <a href="#">Inner Pages</a>
                            <ul>
                              {innerPages1.length &&
                                innerPages1.map((inner, index) => {
                                  return (
                                    <li key={index}>
                                      <a href={inner.ref}>{inner.label}</a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </li>
                          <li>
                            <a href="#">Inner Pages</a>
                            <ul>
                              {innerPages2.length &&
                                innerPages2.map((inner, index) => {
                                  return (
                                    <li key={index}>
                                      <a href={inner.ref}>{inner.label}</a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </li>
                          <li>
                            <a href="#">Shop Pages</a>
                            <ul>
                              {shopPages.length &&
                                shopPages.map((page, index) => {
                                  return (
                                    <li key={index}>
                                      <a href={page.ref}>{page.label}</a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </li>
                          <li>
                            <a href="shop.html">
                              <img
                                src="./img/banner/menu-banner-1.png"
                                alt="#"
                              />
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- header-bottom-area end --> */}
    </header>
  );
};
//FOOTER AREA START
export const Footer = () => {
  const iconSocialMedia = [
    { icon: <i className="fab fa-facebook-f"></i>, title: "Facebook" },
    { icon: <i className="fab fa-twitter"></i>, title: "Twitter" },
    { icon: <i className="fab fa-linkedin"></i>, title: "Linkedin" },
    { icon: <i className="fab fa-youtube"></i>, title: "Youtube" },
  ];
  const companys = [
    { label: " About", ref: "about.html" },
    { label: "Blog", ref: "blog.html" },
    { label: "All Products", ref: "shop.html" },
    { label: "Locations", ref: "locations.html" },
    { label: "FAQ", ref: "faq.html" },
    { label: "Contact us", ref: "contact.html" },
  ];
  const servicess = [
    { label: "Order tracking", ref: "order-tracking.html" },
    { label: "Wish List", ref: "wishlist.html" },
    { label: "Login", ref: "login.html" },
    { label: "My account", ref: "account.html" },
    { label: "Terms & Conditions", ref: "about.html" },
    { label: "Promotional Offers", ref: "about.html" },
  ];
  const customerCares = [
    { label: "Login", ref: "login.html" },
    { label: "My account", ref: "account.html" },
    { label: "Wish List", ref: "wishlist.html" },
    { label: "Order tracking", ref: "order-tracking.html" },
    { label: "FAQ", ref: "faq.html" },
    { label: "Contact us", ref: "contact.html" },
  ];
  return (
    <footer className="ltn__footer-area">
      <div className="footer-top-area section-bg-1 plr--5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-about-widget">
                <div className="footer-logo mb-10">
                  <div className="site-logo">
                    <img src="./img/logoBrocoli.png" alt="Logo" />
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the and typesetting
                  industry. Lorem Ipsum is dummy text of the printing.
                </p>
                <div className="footer-address">
                  <ul>
                    <li>
                      <div className="footer-address-icon">
                        <i className="bi bi-geo-alt" />
                      </div>
                      <div className="footer-address-info">
                        <p>Brooklyn, New York, United States</p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon">
                        <i class="fa-solid fa-phone-volume"></i>
                      </div>
                      <div className="footer-address-info">
                        <p>
                          <a href="tel:+0123-456789">+0123-456789</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon">
                        <i className="bi bi-envelope"></i>
                      </div>
                      <div className="footer-address-info">
                        <p>
                          <a href="mailto:example@example.com">
                            example@example.com
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="ltn__social-media mt-20">
                  <ul>
                    {iconSocialMedia.length &&
                      iconSocialMedia.map((icon, index) => {
                        return (
                          <li key={index}>
                            <a href="#" title={icon.title}>
                              {icon.icon}
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-menu-widget clearfix">
                <h4 className="footer-title">Company</h4>
                <div className="footer-menu">
                  <ul>
                    {companys.length &&
                      companys.map((company, index) => {
                        return (
                          <li key={index}>
                            <a href={company.ref}>{company.label}</a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-menu-widget clearfix">
                <h4 className="footer-title">Services.</h4>
                <div className="footer-menu">
                  <ul>
                    {servicess.length &&
                      servicess.map((services, index) => {
                        return (
                          <li key={index}>
                            <a href={services.ref}>{services.label}</a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-menu-widget clearfix">
                <h4 className="footer-title">Customer Care</h4>
                <div className="footer-menu">
                  <ul>
                    {customerCares.length &&
                      customerCares.map((customerCare, index) => {
                        return (
                          <li key={index}>
                            <a href={customerCare.ref}>{customerCare.label}</a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12 col-12">
              <div className="footer-widget footer-newsletter-widget">
                <h4 className="footer-title">Newsletter</h4>
                <p>
                  Subscribe to our weekly Newsletter and receive updates via
                  email.
                </p>
                <div className="footer-newsletter">
                  <form action="#">
                    <input type="email" name="email" placeholder="Email*" />
                    <div className="btn-wrapper">
                      <button className="theme-btn-1 btn" type="submit">
                        <i className="fas fa-location-arrow"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <h5 className="mt-30">We Accept</h5>
                <img src="./img/icons/payment-4.png" alt="Payment Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__copyright-area ltn__copyright-2 section-bg-1 border-top ltn__border-top-2--- plr--5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="ltn__copyright-design clearfix">
                <p>
                  All Rights Reserved @ Company
                  <span className="current-year"></span>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 align-self-center">
              <div className="ltn__copyright-menu text-right">
                <ul>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Claim</a>
                  </li>
                  <li>
                    <a href="#">Privacy & Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
//SLIDER AREA START (slider-3)
export const Slider3 = () => {
  const handleClickCatergoryMenu = () => {
    const category = document.querySelector(".ltn__category-menu-toggle");
    if (category.classList.contains("categorytoggleUPDown")) {
      category.classList.remove("categorytoggleUPDown");
    } else {
      category.classList.add("categorytoggleUPDown");
    }
  };
  const handleMoreCater = () => {
    const category = document.querySelectorAll(
      ".ltn__category-menu-more-item-child"
    );
    // category.style.display = "block";
    category.forEach((e) => {
      if (e.style.display === "none") {
        e.style.display = "block";
      } else {
        e.style.display = "none";
      }
    });
  };
  const handbags = [
    { label: "Clutches Clutches Clutches Clutches" },
    { label: "Cross Body" },
    { label: " Satchels" },
    { label: " Sholuder" },
    { label: "  Toter" },
  ];
  const freshMeats = [
    { label: "Clutches" },
    { label: "Cross Body" },
    { label: " Satchels" },
    { label: " Sholuder" },
    { label: "  Toter" },
  ];

  return (
    <div className="ltn__slider-area ltn__slider-3--- section-bg-1--- mt-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 ">
            {/* <!-- CATEGORY-MENU-LIST START --> */}
            <div className="ltn__category-menu-wrap">
              <div
                className="ltn__category-menu-title"
                onClick={handleClickCatergoryMenu}
              >
                <h2 className="section-bg-1 text-color-white---">categories</h2>
              </div>
              <div className="ltn__category-menu-toggle ltn__one-line-active">
                <ul>
                  {/* <!-- Submenu Column - unlimited --> */}
                  <li className="ltn__category-menu-item ltn__category-menu-drop">
                    <a href="shop.html">
                      <i className="bi bi-bag"></i>Vegetables and Fruits
                    </a>
                    <ul className="ltn__category-submenu ltn__category-column-5">
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {handbags.length &&
                            handbags.map((handbag, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{handbag.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Fresh Meat</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Fish and Seafood</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Submenu Column - 4 --> */}
                  <li className="ltn__category-menu-item ltn__category-menu-drop">
                    <a href="shop.html">
                      <i className="bi bi-gear"></i>Fresh Meat
                    </a>
                    <ul className="ltn__category-submenu ltn__category-column-4">
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Submenu Column - 3 --> */}
                  <li className="ltn__category-menu-item ltn__category-menu-drop">
                    <a href="shop.html">
                      <i className="fa-solid fa-trophy"></i>Fish and Seafood
                    </a>
                    <ul className="ltn__category-submenu ltn__category-column-3">
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Submenu Column - 2 --> */}
                  <li className="ltn__category-menu-item ltn__category-menu-drop">
                    <a href="shop.html">
                      <i className="fa-regular fa-user"></i>Butter and Cream
                    </a>
                    <ul className="ltn__category-submenu ltn__category-column-2">
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Submenu --> */}
                  <li className="ltn__category-menu-item ltn__category-menu-drop">
                    <a href="shop.html">
                      <i className="bi bi-cart3"></i>Oil and Vinegar
                    </a>
                    <ul className="ltn__category-submenu">
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Submenu --> */}
                  <li className="ltn__category-menu-item ltn__category-menu-drop">
                    <a href="shop.html">
                      <i className="bi bi-tags"></i>Breads
                    </a>
                    <ul className="ltn__category-submenu">
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Submenu --> */}
                  <li className="ltn__category-menu-item ltn__category-menu-drop">
                    <a Juicea href="shop.html">
                      <i className="bi bi-bag"></i>Apple Juice
                    </a>
                    <ul className="ltn__category-submenu">
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Submenu --> */}
                  <li className="ltn__category-menu-item ltn__category-menu-drop">
                    <a href="shop.html">
                      <i className="bi bi-gear"></i>Dry Nuts
                    </a>
                    <ul className="ltn__category-submenu">
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- Show more menu --> */}
                  <li className="ltn__category-menu-more-item-child">
                    <a href="shop.html">
                      <i className="bi bi-bag"></i>Apple Juice
                    </a>
                    <ul className="ltn__category-submenu">
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="ltn__category-menu-more-item-child">
                    <a href="shop.html">
                      <i className="bi bi-gear"></i> Dry Nuts
                    </a>
                    <ul className="ltn__category-submenu">
                      <li className="ltn__category-submenu-title ltn__category-menu-drop">
                        <a href="#">Handbags</a>
                        <ul className="ltn__category-submenu-children">
                          {freshMeats.length &&
                            freshMeats.map((freshMeat, index) => {
                              return (
                                <li key={index}>
                                  <a href="#">{freshMeat.label}</a>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="ltn__category-menu-more-item-parent">
                    <a className="rx-default" onClick={handleMoreCater}>
                      More categories
                      <i className="bi bi-plus-lg cat-thumb icon-plus"></i>
                    </a>
                    <a className="rx-show">
                      close menu{" "}
                      <i className="bi bi-dash cat-thumb icon-remove"></i>
                    </a>
                  </li>
                  {/* <!-- Single menu end --> */}
                </ul>
              </div>
            </div>
            {/* <!-- END CATEGORY-MENU-LIST --> */}
          </div>
          <div className="col-lg-9">
            <div className="ltn__slide-active-2 slick-slide-arrow-1 slick-slide-dots-1">
              {/* <!-- ltn__slide-item --> */}
              <div className="ltn__slide-item ltn__slide-item-10 section-bg-1 bg-image">
                <div className="ltn__slide-item-inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7 col-md-7 col-sm-7 align-self-center">
                        <div className="slide-item-info">
                          <div className="slide-item-info-inner ltn__slide-animation">
                            <h5 className="slide-sub-title ltn__secondary-color animated text-uppercase">
                              Up To 50% Off Today Only!
                            </h5>
                            <h1 className="slide-title animated">
                              Tasty & Healthy <br />
                              Organic Food
                            </h1>
                            <div className="slide-brief animated d-none">
                              <p>
                                Predictive analytics is drastically changing the
                                real estate industry. In the past, providing
                                data for quick
                              </p>
                            </div>
                            <div className="btn-wrapper animated">
                              <a
                                href="shop.html"
                                className="theme-btn-1 btn btn-effect-1 text-uppercase"
                              >
                                Shop now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-5 align-self-center">
                        <div className="slide-item-img">
                          {/* <!-- <a href="shop.html"><img src="img/product/1.png" alt="Image"/></a> --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ltn__slide-item --> */}
              {/* <div
                className="ltn__slide-item ltn__slide-item-10 section-bg-1 bg-image"
                data-bg="img/slider/62.jpg"
              >
                <div className="ltn__slide-item-inner">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7 col-md-7 col-sm-7 align-self-center">
                        <div className="slide-item-info">
                          <div className="slide-item-info-inner ltn__slide-animation">
                            <h4 className="slide-sub-title ltn__secondary-color animated text-uppercase">
                              Welcome to our shop
                            </h4>
                            <h1 className="slide-title animated">
                              Tasty & Healthy <br />
                              Organic Food
                            </h1>
                            <div className="slide-brief animated d-none">
                              <p>
                                Predictive analytics is drastically changing the
                                real estate industry. In the past, providing
                                data for quick
                              </p>
                            </div>
                            <div className="btn-wrapper animated">
                              <a
                                href="shop.html"
                                className="theme-btn-1 btn btn-effect-1 text-uppercase"
                              >
                                Shop now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-5 align-self-center">
                        <div className="slide-item-img"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//FEATURE AREA START ( Feature - 3)
export const Feature3 = () => {
  return (
    <div className="ltn__feature-area mt-35 mt--65---">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__feature-item-box-wrap ltn__feature-item-box-wrap-2 ltn__border section-bg-6">
              <div className="ltn__feature-item ltn__feature-item-8">
                <div className="ltn__feature-icon">
                  <img src="img/icons/svg/8-trolley.svg" alt="#" />
                </div>
                <div className="ltn__feature-info">
                  <h4>Free shipping</h4>
                  <p>On all orders over $49.00</p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-8">
                <div className="ltn__feature-icon">
                  <img src="img/icons/svg/9-money.svg" alt="#" />
                </div>
                <div className="ltn__feature-info">
                  <h4>15 days returns</h4>
                  <p>Moneyback guarantee</p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-8">
                <div className="ltn__feature-icon">
                  <img src="img/icons/svg/10-credit-card.svg" alt="#" />
                </div>
                <div className="ltn__feature-info">
                  <h4>Secure checkout</h4>
                  <p>Protected by Paypal</p>
                </div>
              </div>
              <div className="ltn__feature-item ltn__feature-item-8">
                <div className="ltn__feature-icon">
                  <img src="img/icons/svg/11-gift-card.svg" alt="#" />
                </div>
                <div className="ltn__feature-info">
                  <h4>Offer & gift here</h4>
                  <p>On all orders over</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//PRODUCT TAB AREA START (product-item-3)
export const Product3 = () => {
  const [key, setKey] = useState("Food & Drinks");
  const ref = useRef({});
  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const ourProducts = [
    { label: "Food & Drinks" },
    { label: "Vegetables" },
    { label: "Dried Foods" },
    { label: "Bread & Cake" },
    { label: "Fish & Meat" },
  ];
  const iconAction = [
    { icon: <i className="far fa-eye"></i>, title: "Quick View" },
    { icon: <i className="fas fa-shopping-cart"></i>, title: "Add to Cart" },
    { icon: <i className="far fa-heart"></i>, title: "Wishlist" },
  ];
  const rattings = [
    {
      label: (
        <li>
          <a href="#">
            <i className="fas fa-star"></i>
          </a>
        </li>
      ),
    },
    {
      label: (
        <li>
          <a href="#">
            <i className="fas fa-star"></i>
          </a>
        </li>
      ),
    },
    {
      label: (
        <li>
          <a href="#">
            <i className="fas fa-star"></i>
          </a>
        </li>
      ),
    },
    {
      label: (
        <li>
          <a href="#">
            <i className="fas fa-star-half-alt"></i>
          </a>
        </li>
      ),
    },
    {
      label: (
        <li>
          <a href="#">
            <i className="far fa-star"></i>
          </a>
        </li>
      ),
    },
    {
      label: (
        <li className="review-total">
          <a href="#"> (24)</a>
        </li>
      ),
    },
  ];
  return (
    <div className="ltn__product-tab-area ltn__product-gutter pt-115 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              {/* <!-- <h6 className="section-subtitle ltn__secondary-color">// Cars</h6> --> */}
              <h1 className="section-title">Our Products</h1>
              <p>
                A highly efficient slip-ring scanner for today{"'"}s diagnostic
                requirements.
              </p>
            </div>
            <div className="ltn__tab-menu ltn__tab-menu-2 ltn__tab-menu-top-right-- text-uppercase text-center">
              <div className="nav">
                <Tabs className="" defaultActiveKey={key}>
                  {ourProducts.length &&
                    ourProducts.map((ourProduct, index) => {
                      return (
                        <Tab
                          key={index}
                          activeKey={ourProduct.label}
                          onSelect={(k) => setKey(k)}
                          eventKey={ourProduct.label}
                          title={ourProduct.label.toLocaleUpperCase()}
                          className=""
                        ></Tab>
                      );
                    })}
                </Tabs>
              </div>
            </div>
            <div className="tab-content">
              <div className="tab-pane fade active show" id="liton_tab_3_1">
                <div
                  className="ltn__product-tab-content-inner"
                  style={{ position: "relative" }}
                >
                  <div className="row ltn__tab-product-slider-one-active slick-arrow-1 ">
                    <Slider ref={ref} {...settings}>
                      {/* <!-- ltn__product-item --> */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/11.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                {iconAction.length &&
                                  iconAction.map((icon, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href="#"
                                          title={icon.title}
                                          data-toggle="modal"
                                          data-target="#quick_view_modal"
                                        >
                                          {icon.icon}
                                        </a>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                {rattings.length &&
                                  rattings.map((ratting) => {
                                    return ratting.label;
                                  })}
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/7.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                {iconAction.length &&
                                  iconAction.map((icon, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href="#"
                                          title={icon.title}
                                          data-toggle="modal"
                                          data-target="#quick_view_modal"
                                        >
                                          {icon.icon}
                                        </a>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                {rattings.length &&
                                  rattings.map((ratting) => {
                                    return ratting.label;
                                  })}
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Poltry Farm Meat
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$78.00</span>
                              <del>$85.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- ltn__product-item --> */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/12.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                {iconAction.length &&
                                  iconAction.map((icon, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href="#"
                                          title={icon.title}
                                          data-toggle="modal"
                                          data-target="#quick_view_modal"
                                        >
                                          {icon.icon}
                                        </a>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                {rattings.length &&
                                  rattings.map((ratting) => {
                                    return ratting.label;
                                  })}
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/8.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                {iconAction.length &&
                                  iconAction.map((icon, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href="#"
                                          title={icon.title}
                                          data-toggle="modal"
                                          data-target="#quick_view_modal"
                                        >
                                          {icon.icon}
                                        </a>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                {rattings.length &&
                                  rattings.map((ratting) => {
                                    return ratting.label;
                                  })}
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Sliced Mix
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- ltn__product-item --> */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/13.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                {iconAction.length &&
                                  iconAction.map((icon, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href="#"
                                          title={icon.title}
                                          data-toggle="modal"
                                          data-target="#quick_view_modal"
                                        >
                                          {icon.icon}
                                        </a>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                {rattings.length &&
                                  rattings.map((ratting) => {
                                    return ratting.label;
                                  })}
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Fresh Juice
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$75.00</span>
                              <del>$92.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/9.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                {iconAction.length &&
                                  iconAction.map((icon, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href="#"
                                          title={icon.title}
                                          data-toggle="modal"
                                          data-target="#quick_view_modal"
                                        >
                                          {icon.icon}
                                        </a>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                {rattings.length &&
                                  rattings.map((ratting) => {
                                    return ratting.label;
                                  })}
                                <li className="review-total">
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- ltn__product-item --> */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/14.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                {iconAction.length &&
                                  iconAction.map((icon, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href="#"
                                          title={icon.title}
                                          data-toggle="modal"
                                          data-target="#quick_view_modal"
                                        >
                                          {icon.icon}
                                        </a>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                {rattings.length &&
                                  rattings.map((ratting) => {
                                    return ratting.label;
                                  })}
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Poltry Farm Meat
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$78.00</span>
                              <del>$85.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/10.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                {iconAction.length &&
                                  iconAction.map((icon, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href="#"
                                          title={icon.title}
                                          data-toggle="modal"
                                          data-target="#quick_view_modal"
                                        >
                                          {icon.icon}
                                        </a>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                {rattings.length &&
                                  rattings.map((ratting) => {
                                    return ratting.label;
                                  })}
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Fresh Juice
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$75.00</span>
                              <del>$92.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- ltn__product-item --> */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/15.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                {iconAction.length &&
                                  iconAction.map((icon, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href="#"
                                          title={icon.title}
                                          data-toggle="modal"
                                          data-target="#quick_view_modal"
                                        >
                                          {icon.icon}
                                        </a>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                {rattings.length &&
                                  rattings.map((ratting) => {
                                    return ratting.label;
                                  })}
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Fresh Butter Cake
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/6.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                {iconAction.length &&
                                  iconAction.map((icon, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href="#"
                                          title={icon.title}
                                          data-toggle="modal"
                                          data-target="#quick_view_modal"
                                        >
                                          {icon.icon}
                                        </a>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                {rattings.length &&
                                  rattings.map((ratting) => {
                                    return ratting.label;
                                  })}
                                <li className="review-total">
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- ltn__product-item --> */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/7.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                {iconAction.length &&
                                  iconAction.map((icon, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href="#"
                                          title={icon.title}
                                          data-toggle="modal"
                                          data-target="#quick_view_modal"
                                        >
                                          {icon.icon}
                                        </a>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                {rattings.length &&
                                  rattings.map((ratting) => {
                                    return ratting.label;
                                  })}
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Orange Sliced Mix
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$150.00</span>
                              <del>$180.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/11.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                {iconAction.length &&
                                  iconAction.map((icon, index) => {
                                    return (
                                      <li key={index}>
                                        <a
                                          href="#"
                                          title={icon.title}
                                          data-toggle="modal"
                                          data-target="#quick_view_modal"
                                        >
                                          {icon.icon}
                                        </a>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                {rattings.length &&
                                  rattings.map((ratting) => {
                                    return ratting.label;
                                  })}
                                <li className="review-total">
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Carrots Group Scal
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>$32.00</span>
                              <del>$46.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!--  --> */}
                    </Slider>
                    <button className="slick-btn-previons" onClick={previous}>
                      <i class="bi bi-arrow-left-short"></i>
                    </button>
                    <button className="slick-btn-next" onClick={next}>
                      <i class="bi bi-arrow-right-short"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="liton_tab_3_2">
                <div className="ltn__product-tab-content-inner">
                  <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/16.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/10.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Poltry Farm Meat</a>
                          </h2>
                          <div className="product-price">
                            <span>$78.00</span>
                            <del>$85.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/15.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/9.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Orange Sliced Mix</a>
                          </h2>
                          <div className="product-price">
                            <span>$150.00</span>
                            <del>$180.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/14.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Orange Fresh Juice
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$75.00</span>
                            <del>$92.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/8.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/13.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Poltry Farm Meat</a>
                          </h2>
                          <div className="product-price">
                            <span>$78.00</span>
                            <del>$85.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/10.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Orange Fresh Juice
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$75.00</span>
                            <del>$92.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/15.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Fresh Butter Cake</a>
                          </h2>
                          <div className="product-price">
                            <span>$150.00</span>
                            <del>$180.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/6.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/7.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Orange Sliced Mix</a>
                          </h2>
                          <div className="product-price">
                            <span>$150.00</span>
                            <del>$180.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/11.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--  --> */}
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="liton_tab_3_3">
                <div className="ltn__product-tab-content-inner">
                  <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/6.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/12.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Poltry Farm Meat</a>
                          </h2>
                          <div className="product-price">
                            <span>$78.00</span>
                            <del>$85.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/8.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/15.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Orange Sliced Mix</a>
                          </h2>
                          <div className="product-price">
                            <span>$150.00</span>
                            <del>$180.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/9.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Orange Fresh Juice
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$75.00</span>
                            <del>$92.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/11.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/14.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Poltry Farm Meat</a>
                          </h2>
                          <div className="product-price">
                            <span>$78.00</span>
                            <del>$85.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/10.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Orange Fresh Juice
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$75.00</span>
                            <del>$92.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/15.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Fresh Butter Cake</a>
                          </h2>
                          <div className="product-price">
                            <span>$150.00</span>
                            <del>$180.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/6.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/7.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Orange Sliced Mix</a>
                          </h2>
                          <div className="product-price">
                            <span>$150.00</span>
                            <del>$180.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/11.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--  --> */}
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="liton_tab_3_4">
                <div className="ltn__product-tab-content-inner">
                  <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/3.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/5.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Poltry Farm Meat</a>
                          </h2>
                          <div className="product-price">
                            <span>$78.00</span>
                            <del>$85.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/2.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/16.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Orange Sliced Mix</a>
                          </h2>
                          <div className="product-price">
                            <span>$150.00</span>
                            <del>$180.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/6.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Orange Fresh Juice
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$75.00</span>
                            <del>$92.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/14.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/14.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Poltry Farm Meat</a>
                          </h2>
                          <div className="product-price">
                            <span>$78.00</span>
                            <del>$85.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/10.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Orange Fresh Juice
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$75.00</span>
                            <del>$92.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/15.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Fresh Butter Cake</a>
                          </h2>
                          <div className="product-price">
                            <span>$150.00</span>
                            <del>$180.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/6.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/7.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Orange Sliced Mix</a>
                          </h2>
                          <div className="product-price">
                            <span>$150.00</span>
                            <del>$180.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/11.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--  --> */}
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="liton_tab_3_5">
                <div className="ltn__product-tab-content-inner">
                  <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/7.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/13.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Poltry Farm Meat</a>
                          </h2>
                          <div className="product-price">
                            <span>$78.00</span>
                            <del>$85.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/5.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/15.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Orange Sliced Mix</a>
                          </h2>
                          <div className="product-price">
                            <span>$150.00</span>
                            <del>$180.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/9.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Orange Fresh Juice
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$75.00</span>
                            <del>$92.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/14.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/12.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Poltry Farm Meat</a>
                          </h2>
                          <div className="product-price">
                            <span>$78.00</span>
                            <del>$85.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/10.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Orange Fresh Juice
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$75.00</span>
                            <del>$92.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/15.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Fresh Butter Cake</a>
                          </h2>
                          <div className="product-price">
                            <span>$150.00</span>
                            <del>$180.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/6.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- ltn__product-item --> */}
                    <div className="col-lg-12">
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/7.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">New</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">Orange Sliced Mix</a>
                          </h2>
                          <div className="product-price">
                            <span>$150.00</span>
                            <del>$180.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="ltn__product-item ltn__product-item-3 text-center">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src="img/product/11.png" alt="#" />
                          </a>
                          <div className="product-badge">
                            <ul>
                              <li className="sale-badge">-19%</li>
                            </ul>
                          </div>
                          <div className="product-hover-action">
                            <ul>
                              {iconAction.length &&
                                iconAction.map((icon, index) => {
                                  return (
                                    <li key={index}>
                                      <a
                                        href="#"
                                        title={icon.title}
                                        data-toggle="modal"
                                        data-target="#quick_view_modal"
                                      >
                                        {icon.icon}
                                      </a>
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-ratting">
                            <ul>
                              {rattings.length &&
                                rattings.map((ratting) => {
                                  return ratting.label;
                                })}
                              <li className="review-total">
                                <a href="#"> (24)</a>
                              </li>
                            </ul>
                          </div>
                          <h2 className="product-title">
                            <a href="product-details.html">
                              Carrots Group Scal
                            </a>
                          </h2>
                          <div className="product-price">
                            <span>$32.00</span>
                            <del>$46.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--  --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//  CATEGORY AREA START
export const Category = () => {
  const ref = useRef({});
  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [isAlly, setIsAlly] = useState(false);
  const categoryItems = [
    {
      img: <img src="img/icons/icon-img/category-1.png" alt="Image" />,
      label: "Browse all",
      countItem: "(235 item)",
    },
    {
      img: <img src="img/icons/icon-img/category-2.png" alt="Image" />,
      label: "Vegetables",
      countItem: "(78 item)",
    },
    {
      img: <img src="img/icons/icon-img/category-3.png" alt="Image" />,
      label: "Fruits",
      countItem: "(45 item)",
    },
    {
      img: <img src="img/icons/icon-img/category-4.png" alt="Image" />,
      label: "Meat",
      countItem: "(15 item)",
    },
    {
      img: <img src="img/icons/icon-img/category-5.png" alt="Image" />,
      label: "Fish",
      countItem: "(25 item)",
    },
    {
      img: <img src="img/icons/icon-img/category-3.png" alt="Image" />,
      label: "Others",
      countItem: "(85 item)",
    },
  ];
  return (
    <div className="ltn__category-area section-bg-1 pt-110 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h1 className="section-title white-color---">Top Catagories</h1>
              <p className="white-color---">
                A highly efficient slip-ring scanner for today{"'"}s diagnostic
                requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="row ltn__category-slider-active slick-arrow-1">
          <Slider ref={ref} {...settings}>
            {categoryItems.length &&
              categoryItems.map((categoryItem, index) => {
                return (
                  <div className="" key={index}>
                    <div className="ltn__category-item ltn__category-item-3 text-center">
                      <div className="ltn__category-item-img">
                        <a href="shop.html">{categoryItem.img}</a>
                      </div>
                      <div className="ltn__category-item-name">
                        <h5>
                          <a href="shop.html">{categoryItem.label}</a>
                        </h5>
                        <h6>{categoryItem.countItem}</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>

          <button className="slick-btn-previons" onClick={previous}>
            <i class="bi bi-arrow-left-short"></i>
          </button>
          <button className="slick-btn-next" onClick={next}>
            <i class="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
//PRODUCT SLIDER AREA STAR
export const ProductSliderStart = () => {
  const ref = useRef({});
  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-70">
      <div className="container ">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h1 className="section-title">Special Offers</h1>
            </div>
          </div>
        </div>
        <div className="row ltn__category-slider-active ltn__product-slider-item-four-active slick-arrow-1">
          <Slider ref={ref} {...settings}>
            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="img/product/7.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">-25%</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#quick_view_modal"
                        >
                          <i className="far fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-toggle="modal"
                          data-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-toggle="modal"
                          data-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Orange Sliced Mix</a>
                  </h2>
                  <div className="product-price">
                    <span>$150.00</span>
                    <del>$180.00</del>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="img/product/1.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">-30%</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#quick_view_modal"
                        >
                          <i className="far fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-toggle="modal"
                          data-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-toggle="modal"
                          data-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Red Hot Tomato</a>
                  </h2>
                  <div className="product-price">
                    <span>$149.00</span>
                    <del>$162.00</del>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="img/product/4.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">-15%</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#quick_view_modal"
                        >
                          <i className="far fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-toggle="modal"
                          data-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-toggle="modal"
                          data-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Poltry Farm Meat</a>
                  </h2>
                  <div className="product-price">
                    <span>$78.00</span>
                    <del>$85.00</del>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="img/product/5.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">-18%</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#quick_view_modal"
                        >
                          <i className="far fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-toggle="modal"
                          data-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-toggle="modal"
                          data-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Fresh Butter Cake</a>
                  </h2>
                  <div className="product-price">
                    <span>$150.00</span>
                    <del>$180.00</del>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="img/product/2.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">-35%</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#quick_view_modal"
                        >
                          <i className="far fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-toggle="modal"
                          data-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-toggle="modal"
                          data-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Vegetables Juices</a>
                  </h2>
                  <div className="product-price">
                    <span>$62.00</span>
                    <del>$85.00</del>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- ltn__product-item --> */}
            <div className="col-lg-12">
              <div className="ltn__product-item ltn__product-item-3 text-center">
                <div className="product-img">
                  <a href="product-details.html">
                    <img src="img/product/3.png" alt="#" />
                  </a>
                  <div className="product-badge">
                    <ul>
                      <li className="sale-badge">New</li>
                    </ul>
                  </div>
                  <div className="product-hover-action">
                    <ul>
                      <li>
                        <a
                          href="#"
                          title="Quick View"
                          data-toggle="modal"
                          data-target="#quick_view_modal"
                        >
                          <i className="far fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Add to Cart"
                          data-toggle="modal"
                          data-target="#add_to_cart_modal"
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Wishlist"
                          data-toggle="modal"
                          data-target="#liton_wishlist_modal"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-ratting">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star-half-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-star"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="product-title">
                    <a href="product-details.html">Orange Fresh Juice</a>
                  </h2>
                  <div className="product-price">
                    <span>$75.00</span>
                    <del>$92.00</del>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--  --> */}
          </Slider>
          <button className="slick-btn-previons" onClick={previous}>
            <i className="bi bi-arrow-left-short"></i>
          </button>
          <button className="slick-btn-next" onClick={next}>
            <i className="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
// CALL TO ACTION START
export const CallActionStart = () => {
  return (
    <div
      class="ltn__call-to-action-area call-to-action-2 pt-20 pb-20"
      data-bg="img/1.jpg--"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="call-to-action-inner call-to-action-inner-2 text-center">
              <h2>Get A Free Service Or Make A Call</h2>
              <div class="btn-wrapper">
                <a class="btn btn-effect-4 btn-white" href="contact.html">
                  <i class="fas fa-phone-volume"></i> MAKE A CALL
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// BANNER AREA START
export const BannerStart = () => {
  return (
    <div class="ltn__banner-area mt-120">
      <div class="container">
        <div class="row ltn__custom-gutter--- justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="ltn__banner-item">
              <div class="ltn__banner-img">
                <a href="shop.html">
                  <img src="img/banner/1.jpg" alt="Banner Image" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="ltn__banner-item">
              <div class="ltn__banner-img">
                <a href="shop.html">
                  <img src="img/banner/2.jpg" alt="Banner Image" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="ltn__banner-item">
              <div class="ltn__banner-img">
                <a href="shop.html">
                  <img src="img/banner/1.jpg" alt="Banner Image" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// BRAND LOGO AREA START
export const BrandLogoStart = () => {
  return (
    <div class="ltn__brand-logo-area ltn__brand-logo-1 section-bg-1 pt-110 pb-110 plr--9 d-none">
      <div class="container-fluid">
        <div class="row ltn__brand-logo-active">
          <div class="col-lg-12">
            <div class="ltn__brand-logo-item">
              <img src="img/brand-logo/1.png" alt="Brand Logo" />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="ltn__brand-logo-item">
              <img src="img/brand-logo/2.png" alt="Brand Logo" />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="ltn__brand-logo-item">
              <img src="img/brand-logo/3.png" alt="Brand Logo" />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="ltn__brand-logo-item">
              <img src="img/brand-logo/4.png" alt="Brand Logo" />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="ltn__brand-logo-item">
              <img src="img/brand-logo/5.png" alt="Brand Logo" />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="ltn__brand-logo-item">
              <img src="img/brand-logo/3.png" alt="Brand Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
