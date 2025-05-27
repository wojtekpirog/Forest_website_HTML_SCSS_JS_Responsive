import Swiper from "swiper";
import {Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

const runSlider = () => {
  const swiperInstance = new Swiper(".swiper", {
    modules: [Pagination],
    loop: true,
    grabCursor: true,
    keyboard: true,
    autoHeight: false,
    speed: 600,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }        
  });
}

export default runSlider;