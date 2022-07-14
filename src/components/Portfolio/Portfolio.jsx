import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "./hiredroid.png";
import Ecommerce from "./scrumdroid.png";
import MusicApp from "./emr.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="http://scrumdroid.com">
            <img style={{ height: 200 }} src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://dms.ssdemr.com">
            <img style={{ height: 200 }} src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://hiredroid.com">
            <img style={{ height: 200 }} src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
