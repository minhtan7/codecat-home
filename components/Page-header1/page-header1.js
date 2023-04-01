import { useEffect, useRef, useState } from 'react';
import SwiperCore, {
	Navigation,
	Pagination,
	Parallax,
	EffectFade,
} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Parallax, EffectFade]);


const PageHeader1 = ({ title, paragraph, className }) => {
	const [load, setLoad] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoad(false);
		}, 1000);
	}, []);

	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);
	const paginationRef = useRef(null);
	return (

		<section class="swiper-mt">
			{!load ? (
				<Swiper
					speed={800}
					effect="fade"
					spaceBetween={0}
					loop={true}
					parallax={true}
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
					}}
					pagination={{
						type: "fraction",
						clickable: true,
						el: paginationRef.current,
					}}
					onBeforeInit={(swiper) => {
						swiper.params.navigation.prevEl = navigationPrevRef.current;
						swiper.params.navigation.nextEl = navigationNextRef.current;
						swiper.params.pagination.el = paginationRef.current;
					}}
					onSwiper={(swiper) => {
						setTimeout(() => {
							for (var i = 0; i < swiper.slides.length; i++) {
								swiper.slides[i].childNodes[0].setAttribute(
									"data-swiper-parallax",
									0.75 * swiper.width
								);
							}

							swiper.params.navigation.prevEl =
								navigationPrevRef.current;
							swiper.params.navigation.nextEl =
								navigationNextRef.current;

							swiper.params.pagination.el = paginationRef.current;

							swiper.navigation.destroy();
							swiper.navigation.init();
							swiper.navigation.update();

							swiper.pagination.destroy();
							swiper.pagination.init();
							swiper.pagination.update();
						});
					}}
					className="swiper-wrapper swiper-container swiper-img"
					slidesPerView={1}
				>
					<SwiperSlide className="swiper-slide">
						<div className="item wow fadeIn" data-wow-delay=".3s">
							<div className="img slider-img">
								<img
									className="thumparallax"
									src="/img/blog/1.jpg"
									alt=""
								/>
							</div>
							<div class="container slider-caption">
								<div class="slider-text">
									<h1 class="display-2">Wedding Photography</h1>
									<span class="post-subtitle"> Ancillae torquatos in nec, impetus nostrum ea eos.</span> <a href="#" class="read-more white-btn">Find More</a>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<div className="item wow fadeIn" data-wow-delay=".3s">
							<div className="img slider-img">
								<img
									className="thumparallax"
									src="/img/blog/2.jpg"
									alt=""
								/>
							</div>
							<div class="container slider-caption">
								<div class="slider-text">
									<h1 class="display-2">Timeless Locations</h1>
									<span class="post-subtitle"> Modo detracto appareat qui te.</span> <a href="#" class="read-more white-btn">Find More</a>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className="swiper-slide">
						<div className="item wow fadeIn" data-wow-delay=".3s">
							<div className="img slider-img">
								<img
									className="thumparallax"
									src="/img/blog/3.jpg"
									alt=""
								/>
							</div>
							<div class="container slider-caption">
								<div class="slider-text">
									<h1 class="display-2">Family Portraits</h1>
									<span class="post-subtitle"> Propriae voluptaria dissentias nam ei.</span> <a href="#" class="read-more white-btn">Find More</a>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			) : null}
		</section>
	);
}

export default PageHeader1;