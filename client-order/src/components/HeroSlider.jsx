
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import { useState } from "react";

// const images = [
//   "https://images.wallpaperscraft.com/image/single/pasta_egg_noodles_103644_1280x720.jpg",
//   "https://images.wallpaperscraft.com/image/single/burger_cutlet_meat_123102_1280x720.jpg",
//   "https://images.wallpaperscraft.com/image/single/meat_baking_vegetables_88477_1280x720.jpg",
//   "https://images.wallpaperscraft.com/image/single/french_toast_toast_chocolate_876434_1280x720.jpg",
//   "https://images.wallpaperscraft.com/image/single/pizza_pastry_appetizing_104513_1280x720.jpg",
// ];

// export default function HeroSlider({ setActiveImage }) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <Swiper
//       slidesPerView={4}
//       spaceBetween={10}
//       navigation={true}
//       loop={true}
//       modules={[Navigation]}
//       onSlideChange={(swiper) => {
//         setActiveIndex(swiper.realIndex);
//         setActiveImage(images[swiper.realIndex]); // Pass active image to parent
//       }}
//       className="w-full max-w-3xl mt-10"
//     >
//       {images.map((img, index) => (
//         <SwiperSlide key={index} className="rounded-lg shadow-lg">
//           <img
//             src={img}
//             alt="slide"
//             className={`w-full h-40 object-cover rounded-lg ${
//               index === activeIndex ? "border-4 border-orange-600" : ""
//             }`}
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }









import { Swiper, SwiperSlide } from "swiper/react";
import Colors from "../colors.js";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { useSelector} from "react-redux";

const images = [
  "https://images.wallpaperscraft.com/image/single/pasta_egg_noodles_103644_1280x720.jpg",
  "https://images.wallpaperscraft.com/image/single/burger_cutlet_meat_123102_1280x720.jpg",
  "https://images.wallpaperscraft.com/image/single/meat_baking_vegetables_88477_1280x720.jpg",
  "https://images.wallpaperscraft.com/image/single/french_toast_toast_chocolate_876434_1280x720.jpg",
  "https://images.wallpaperscraft.com/image/single/pizza_pastry_appetizing_104513_1280x720.jpg",
];

export default function HeroSlider({ setActiveImage }) {
  const [activeIndex, setActiveIndex] = useState(0);
   const theme = useSelector((state) => state.theme.theme);

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      loop={true}
      modules={[Navigation]}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.realIndex);
        setActiveImage(images[swiper.realIndex]);
      }}
      className="w-full max-w-3xl mt-10"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className="rounded-lg shadow-lg">
          <img
            src={img}
            alt="slide"
            className="w-full h-40 object-cover rounded-lg"
            style={{
              border: index === activeIndex ? `4px solid ${Colors[theme].btnBg}` : "none",
            }}
          />
        </SwiperSlide>
      ))}
      
      {/* Custom Styled Navigation Buttons */}
      <button
        className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
        style={{ color: Colors[theme].btnBg }}
      ></button>
      <button
        className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
        style={{ color: Colors[theme].btnBg }}
      ></button>
    </Swiper>
  );
}


