import React from 'react'
import Title from "../components/Title"
import Slider from '../components/Slider'
import Colors from "../colors.js";
import { useSelector} from "react-redux";


const HomeContent = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className='px-5 pt-3 ' style={{backgroundColor:Colors[theme].bg}}>
     <div className="latest-release">
    <div className='flex justify-between'>
    <Title title="Latest Collections" color={Colors[theme].btnBg} txtColor={Colors[theme].text} />
    <button style={{ backgroundColor: Colors[theme].btnBg, color: Colors[theme].btnTxt }} className="px-6 rounded-lg py-3 text-xl flex gap-2 cursor-pointer">
        View All
      </button>
    </div>
     <Slider/>
     </div>
     
      <div className="New-to-watch mt-9">
      <div className='flex justify-between'>
    <Title title="New Movies To Watch" color={Colors[theme].btnBg} txtColor={Colors[theme].text} />
    <button style={{ backgroundColor: Colors[theme].btnBg, color: Colors[theme].btnTxt }} className="px-6 rounded-lg py-3 text-xl flex gap-2 cursor-pointer">
        View All
      </button>
    </div>
      <Slider/>
      </div>
    </div>
  )
}

export default HomeContent