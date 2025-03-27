import React ,{useState} from 'react'
import Colors from "../colors.js";
import { useSelector } from "react-redux";
import saveSvg from '../assets/save.svg'
import playSvg from '../assets/play.svg'
import HeroSlider from './HeroSlider.jsx';

const HeroSection = () => {
    const theme = useSelector((state) => state.theme.theme);
    const [activeImage, setActiveImage] = useState("");
  return (
 
  <>
  <div className="relative ">
  <img
    src={activeImage}
    alt="Image"
    className=" h-screen w-full object-cover "
  />
  <div className="absolute inset-0 bg-black opacity-60 shadow-[-10px_-10px_15px_rgba(0,0,0,0.5)"></div>
 
  <div className="absolute top-60 w-full px-12">
  {/* Left Side: Text Content */}
  <div className="text-white flex flex-col gap-3 w-[45vw]">
    <p className="font-medium lg:text-2xl">ACTION THRILLER</p>
    <h2 className="font-bold text-3xl md:text-7xl">Exclusive Alloy Metal Pull</h2>
    <p className="text-md mt-4">2hr 00mins . Action . 2 months </p>
    <span className="text-gray-300 text-lg">
      Streamlab is a long established fact that a reader will be distracted...
    </span>
    <div className="mt-6 flex">
      <button style={{ backgroundColor: Colors[theme].btnBg }} className="px-6 rounded-lg py-3 text-xl flex gap-2 cursor-pointer">
        Play Now <img src={playSvg} className="w-6" />
      </button>
      <button className="px-6 py-3 text-xl gap-2 font-light flex cursor-pointer">
        Watch Later <img src={saveSvg} className="w-6" />
      </button>
    </div>
  </div>

  {/* Right Side: Slider (Shifted Below Text) */}
  <div className="flex justify-end mt-6">
    <HeroSlider setActiveImage={setActiveImage}/>
  </div>
</div>

</div>
  </>

  )
}

export default HeroSection