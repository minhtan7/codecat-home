/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "@/data/app.json";
import { handleDropdown, handleMobileDropdown } from "@/common/navbar";

const Navbar1 = ({ lr, nr, theme }) => {
  return (
   <nav ref={nr} class="main-header header-5">
			<div class="container">
				<div class="top-header top-header-5">
					<div class="header-social header-social-5">
						<ul class="social-media">
							<li><a class="social-facebook" href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
							<li><a class="social-twitter" href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
							<li><a class="social-instagram" href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
							<li><a class="social-email" href="mailto:#" target="_blank"><i class="far fa-envelope"></i></a></li>
						</ul>
					</div>
					<div class="logo logo-5 logo-white"><a href="index.html"><img class="img-fluid" src="/images/logo-tilia.png" alt="Tilia" width="139" height="90"/></a></div>
					<div class="logo logo-5 logo-dark"><a href="index.html"><img class="img-fluid" src="/images/logo-dark-tilia.png" alt="Tilia" width="139" height="90"/></a></div>
					<div class="btn-header btn-header-5"> <a href="contact.html" class="read-more">Book Now</a></div>
					<div class="nav-button-holder nav-button-holder-5">
						<button type="button" class="nav-button">
							<img ref={lr} src="/img/photoshoot/svg/logo.svg" alt="logo"/>
						</button>
					</div>
				</div>
				<div class="header-container5">
					<nav class="nav-holder nav-holder-5">
						<ul class="menu-nav">
							<li class="menu-item menu-item-has-children current-menu-item">
								<a href="index.html">Home</a>
								<ul class="sub-menu">
									<li class="menu-item"><a href="index.html">Home 1</a></li>
									<li class="menu-item"><a href="home-2.html">Home 2</a></li>
									<li class="menu-item"><a href="home-3.html">Home 3</a></li>
									<li class="menu-item"><a href="home-4.html">Home 4</a></li>
									<li class="menu-item"><a href="home-5.html">Home 5</a></li>
									<li class="menu-item"><a href="home-6.html">Home 6</a></li>
									<li class="menu-item"><a href="home-7.html">Home 7</a></li>
									<li class="menu-item"><a href="home-8.html">Home 8</a></li>
									<li class="menu-item"><a href="home-9.html">Home 9</a></li>
									<li class="menu-item"><a href="home-10.html">Home 10</a></li>
									<li class="menu-item"><a href="home-video.html">Home Video</a></li>
								</ul>
							</li>
							<li class="menu-item menu-item-has-children">
								<a href="#">Pages</a>
								<ul class="sub-menu">
									<li class="menu-item menu-item-has-children menu-item-parent-2level">
										<a href="top-header-1.html">Headers</a>
										<ul class="sub-menu">
											<li class="menu-item"><a href="top-header-1.html">Header 1</a></li>
											<li class="menu-item"><a href="top-header-2.html">Header 2</a></li>
											<li class="menu-item"><a href="top-header-3.html">Header 3</a></li>
											<li class="menu-item"><a href="top-header-4.html">Header 4</a></li>
											<li class="menu-item"><a href="index.html">Header 5</a></li>
										</ul>
									</li>
									<li class="menu-item"><a href="about-me.html">About Me</a></li>
									<li class="menu-item"><a href="about-us.html">About Us</a></li>
									<li class="menu-item"><a href="about-us-2.html">About Us 2</a></li>
									<li class="menu-item menu-item-has-children menu-item-parent-2level">
										<a href="team-1.html">Team</a>
										<ul class="sub-menu">
											<li class="menu-item"><a href="team-1.html">Team 1</a></li>
											<li class="menu-item"><a href="team-2.html">Team 2</a></li>
											<li class="menu-item"><a href="team-3.html">Team 3</a></li>
										</ul>
									</li>
									<li class="menu-item"><a href="pricing-plans.html">Pricing Plans</a></li>
									<li class="menu-item"><a href="faq-page.html">FAQ Page</a></li>
									<li class="menu-item"><a href="testimonials.html">Testimonials</a></li>
									<li class="menu-item"><a href="testimonials-2.html">Testimonials 2</a></li>
								</ul>
							</li>
							<li class="menu-item menu-item-has-children">
								<a href="portfolio-grid-v1-3-cols.html">Portfolios</a>
								<ul class="sub-menu">
									<li class="menu-item menu-item-has-children menu-item-parent-2level">
										<a href="portfolio-grid-v1-3-cols.html">Portfolio Grid v1</a>
										<ul class="sub-menu">
											<li class="menu-item"><a href="portfolio-grid-v1-2-cols.html">Portfolio Grid v1 2 Cols</a></li>
											<li class="menu-item"><a href="portfolio-grid-v1-3-cols.html">Portfolio Grid v1 3 Cols</a></li>
											<li class="menu-item"><a href="portfolio-grid-v1-4-cols.html">Portfolio Grid v1 4 Cols</a></li>
											<li class="menu-item"><a href="portfolio-grid-v1-5-cols.html">Portfolio Grid v1 5 Cols</a></li>
										</ul>
									</li>
									<li class="menu-item menu-item-has-children menu-item-parent-2level">
										<a href="portfolio-grid-v2-4-cols.html">Portfolio Grid v2</a>
										<ul class="sub-menu">
											<li class="menu-item"><a href="portfolio-grid-v2-2-cols.html">Portfolio Grid v2 2 Cols</a></li>
											<li class="menu-item"><a href="portfolio-grid-v2-3-cols.html">Portfolio Grid v2 3 Cols</a></li>
											<li class="menu-item"><a href="portfolio-grid-v2-4-cols.html">Portfolio Grid v2 4 Cols</a></li>
											<li class="menu-item"><a href="portfolio-grid-v2-5-cols.html">Portfolio Grid v2 5 Cols</a></li>
										</ul>
									</li>
									<li class="menu-item menu-item-has-children menu-item-parent-2level">
										<a href="portfolio-masonry-v1-3-cols.html">Portfolio Masonry v1</a>
										<ul class="sub-menu">
											<li class="menu-item"><a href="portfolio-masonry-v1-2-cols.html">Portfolio Masonry v1 2 Cols</a></li>
											<li class="menu-item"><a href="portfolio-masonry-v1-3-cols.html">Portfolio Masonry v1 3 Cols</a></li>
											<li class="menu-item"><a href="portfolio-masonry-v1-4-cols.html">Portfolio Masonry v1 4 Cols</a></li>
											<li class="menu-item"><a href="portfolio-masonry-v1-5-cols.html">Portfolio Masonry v1 5 Cols</a></li>
										</ul>
									</li>
									<li class="menu-item"><a href="portfolio-list-zigzag.html">Portfolio List ZigZag</a></li>
									<li class="menu-item"><a href="portfolio-slider.html">Portfolio Slider</a></li>
									<li class="menu-item menu-item-has-children menu-item-parent-2level">
										<a href="portfolio-grid-v1-5-cols.html">Portfolio FullScreen</a>
										<ul class="sub-menu">
											<li class="menu-item"><a href="portfolio-grid-v1-5-cols.html">Portfolio Grid v1 FullScreen</a></li>
											<li class="menu-item"><a href="portfolio-grid-v2-5-cols.html">Portfolio Grid v2 FullScreen</a></li>
											<li class="menu-item"><a href="portfolio-masonry-v1-5-cols.html">Portfolio Masonry v1 FullScreen</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li class="menu-item menu-item-has-children">
								<a href="gallery-masonry-4-cols.html">Galleries</a>
								<ul class="sub-menu">
									<li class="menu-item"><a href="gallery-masonry-2-cols.html">Masonry 2 Cols</a></li>
									<li class="menu-item"><a href="gallery-masonry-3-cols.html">Masonry 3 Cols</a></li>
									<li class="menu-item"><a href="gallery-masonry-4-cols.html">Masonry 4 Cols</a></li>
									<li class="menu-item"><a href="gallery-masonry-5-cols.html">Masonry 5 Cols</a></li>
									<li class="menu-item"><a href="gallery-justify.html">Justify Gallery</a></li>
									<li class="menu-item"><a href="gallery-grid-1-2-cols.html">Grid 1-2 Cols</a></li>
									<li class="menu-item"><a href="gallery-grid-2-cols.html">Grid 2 Cols</a></li>
									<li class="menu-item"><a href="gallery-grid-3-cols.html">Grid 3 Cols</a></li>
									<li class="menu-item"><a href="gallery-grid-4-cols.html">Grid 4 Cols</a></li>
									<li class="menu-item"><a href="gallery-grid-5-cols.html">Grid 5 Cols</a></li>
									<li class="menu-item"><a href="gallery-slider.html">Gallery Slider</a></li>
									<li class="menu-item"><a href="gallery-fullscreen.html">Gallery Full Screen</a></li>
								</ul>
							</li>
							<li class="menu-item menu-item-has-children">
								<a href="blog.html">Blog</a>
								<ul class="sub-menu">
									<li class="menu-item"><a href="blog-list.html">Blog List</a></li>
									<li class="menu-item"><a href="blog.html">Blog Grid 2 Cols</a></li>
									<li class="menu-item"><a href="blog-grid-3-cols.html">Blog Grid 3 Cols</a></li>
									<li class="menu-item"><a href="blog-classic.html">Blog Classic</a></li>
									<li class="menu-item"><a href="blog-single-post.html">Single Post</a></li>
								</ul>
							</li>
							<li class="menu-item menu-item-has-children">
								<a href="contact.html">Contact</a>
								<ul class="sub-menu">
									<li class="menu-item"><a href="contact.html">Contact 1</a></li>
									<li class="menu-item"><a href="contact-2.html">Contact 2</a></li>
									<li class="menu-item"><a href="contact-3.html">Contact 3</a></li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</nav>
  )
};

export default Navbar1;
