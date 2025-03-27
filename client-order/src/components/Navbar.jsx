
import { useState } from "react";
import Colors from "../colors.js";
import User from '../assets/user.svg'
import Theme from '../assets/theme.svg'
import MenuSvg from '../assets/menu.svg'
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../redux/Slices/ThemeSlice.js";
import { Link } from "react-router-dom";
import corssSvg from '../assets/cross.svg'


const Navbar = () => {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();
    const [showMenu, setshowMenu] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="flex justify-between items-center px-10 py-4  text-white fixed w-full bg-transparent z-50">
      {/* Left Side: Logo & Menu */}
      <div className="flex items-center gap-10">
        <div className="text-2xl font-bold flex items-center gap-2">
          
          STREAMLAB
        </div>
       <div className="hidden lg:block">
       <ul className="flex items-center gap-6 text-gray-300 ">
          <li className=" cursor-pointer" style={{color:Colors[theme].btnBg}}>Home</li>

          {/* Movies Dropdown */}
          <li
            className="relative cursor-pointer "
            style={{ color: Colors[theme].bg }}
           
            onMouseEnter={(e) =>{ setActiveDropdown("movies")
              (e.target.style.color = Colors[theme].btnBg)
            }}
            onMouseLeave={(e) => {setActiveDropdown(null)
              (e.target.style.color = Colors[theme].bg)
            }}
          >
            Movies ⌄
            {activeDropdown === "movies" && (
              <ul className="absolute left-0 top-full mt-2 w-40  shadow-lg rounded-md"
              style={{backgroundColor:Colors[theme].bg}}>
                <li className="p-2" style={{color:Colors[theme].text}}  onMouseEnter={(e) =>{
              e.target.style.backgroundColor = Colors[theme].btnBg;
              e.target.style.color = Colors[theme].bg
             }
            }
            onMouseLeave={(e) =>
              {e.target.style.color = Colors[theme].text
              e.target.style.backgroundColor = Colors[theme].bg}
            }>Action</li>
                <li className="p-2" style={{color:Colors[theme].text}}  onMouseEnter={(e) =>{
              e.target.style.backgroundColor = Colors[theme].btnBg;
              e.target.style.color = Colors[theme].bg
             }
            }
            onMouseLeave={(e) =>
              {e.target.style.color = Colors[theme].text
              e.target.style.backgroundColor = Colors[theme].bg}
            }>Comedy</li>
                <li className="p-2" style={{color:Colors[theme].text}}  onMouseEnter={(e) =>{
              e.target.style.backgroundColor = Colors[theme].btnBg;
              e.target.style.color = Colors[theme].bg
             }
            }
            onMouseLeave={(e) =>
              {e.target.style.color = Colors[theme].text
              e.target.style.backgroundColor = Colors[theme].bg}
            }>Drama</li>
              </ul>
            )}
          </li>
          {/* TV Shows Dropdown */}
          <li
            className="relative cursor-pointer "
            style={{ color: Colors[theme].bg }}
           
            onMouseEnter={(e) =>{ setActiveDropdown("tvshows")
              (e.target.style.color = Colors[theme].btnBg)
            }}
            onMouseLeave={(e) => {setActiveDropdown(null)
              (e.target.style.color = Colors[theme].bg)
            }}
          >
            TvShows ⌄
            {activeDropdown === "tvshows" && (
              <ul className="absolute left-0 top-full mt-2 w-40  shadow-lg rounded-md"
              style={{backgroundColor:Colors[theme].bg}}>
                <li className="p-2" style={{color:Colors[theme].text}}  onMouseEnter={(e) =>{
              e.target.style.backgroundColor = Colors[theme].btnBg;
              e.target.style.color = Colors[theme].bg
             }
            }
            onMouseLeave={(e) =>
              {e.target.style.color = Colors[theme].text
              e.target.style.backgroundColor = Colors[theme].bg}
            }>Action</li>
                <li className="p-2" style={{color:Colors[theme].text}}   onMouseEnter={(e) =>{
              e.target.style.backgroundColor = Colors[theme].btnBg;
              e.target.style.color = Colors[theme].bg
             }
            }
            onMouseLeave={(e) =>
              {e.target.style.color = Colors[theme].text
              e.target.style.backgroundColor = Colors[theme].bg}
            }>Comedy</li>
                <li className="p-2" style={{color:Colors[theme].text}}  onMouseEnter={(e) =>{
              e.target.style.backgroundColor = Colors[theme].btnBg;
              e.target.style.color = Colors[theme].bg
             }
            }
            onMouseLeave={(e) =>
              {e.target.style.color = Colors[theme].text
              e.target.style.backgroundColor = Colors[theme].bg}
            }>Drama</li>
              </ul>
            )}
          </li>
           {/* Video Shows Dropdown */}
           <li
            className="relative cursor-pointer "
            style={{ color: Colors[theme].bg }}
           
            onMouseEnter={(e) =>{ setActiveDropdown("video")
              (e.target.style.color = Colors[theme].btnBg)
            }}
            onMouseLeave={(e) => {setActiveDropdown(null)
              (e.target.style.color = Colors[theme].bg)
            }}
          >
            Videos ⌄
            {activeDropdown === "video" && (
              <ul className="absolute left-0 top-full mt-2 w-40  shadow-lg rounded-md"
              style={{backgroundColor:Colors[theme].bg}}>
                <li className="p-2" style={{color:Colors[theme].text}} onMouseEnter={(e) =>{
              e.target.style.backgroundColor = Colors[theme].btnBg;
              e.target.style.color = Colors[theme].bg
             }
            }
            onMouseLeave={(e) =>
              {e.target.style.color = Colors[theme].text
              e.target.style.backgroundColor = Colors[theme].bg}
            }>Action</li>
                <li className="p-2" style={{color:Colors[theme].text}} onMouseEnter={(e) =>{
              e.target.style.backgroundColor = Colors[theme].btnBg;
              e.target.style.color = Colors[theme].bg
             }
            }
            onMouseLeave={(e) =>
              {e.target.style.color = Colors[theme].text
              e.target.style.backgroundColor = Colors[theme].bg}
            }>Comedy</li>
                <li className="p-2" style={{color:Colors[theme].text}} onMouseEnter={(e) =>{
              e.target.style.backgroundColor = Colors[theme].btnBg;
              e.target.style.color = Colors[theme].bg
             }
            }
            onMouseLeave={(e) =>
              {e.target.style.color = Colors[theme].text
              e.target.style.backgroundColor = Colors[theme].bg}
            }>Drama</li>
              </ul>
            )}
          </li>
            {/* Pages Shows Dropdown */}
            <li
            className="relative cursor-pointer "
            style={{ color: Colors[theme].bg }}
           
            onMouseEnter={(e) =>{ setActiveDropdown("pages")
              (e.target.style.color = Colors[theme].btnBg)
            }}
            onMouseLeave={(e) => {setActiveDropdown(null)
              (e.target.style.color = Colors[theme].bg)
            }}
          >
            Pages ⌄
            {activeDropdown === "pages" && (
              <ul className="absolute left-0 top-full mt-2 w-40  shadow-lg rounded-md"
              style={{backgroundColor:Colors[theme].bg}}>
                <li className="p-2" style={{color:Colors[theme].text}} onMouseEnter={(e) =>{
              e.target.style.backgroundColor = Colors[theme].btnBg;
              e.target.style.color = Colors[theme].bg
             }
            }
            onMouseLeave={(e) =>
              {e.target.style.color = Colors[theme].text
              e.target.style.backgroundColor = Colors[theme].bg}
            }>Action</li>
                <li className="p-2" style={{color:Colors[theme].text}} onMouseEnter={(e) =>{
              e.target.style.backgroundColor = Colors[theme].btnBg;
              e.target.style.color = Colors[theme].bg
             }
            }
            onMouseLeave={(e) =>
              {e.target.style.color = Colors[theme].text
              e.target.style.backgroundColor = Colors[theme].bg}
            }>Comedy</li>
                <li className="p-2" style={{color:Colors[theme].text}} onMouseEnter={(e) =>{
              e.target.style.backgroundColor = Colors[theme].btnBg;
              e.target.style.color = Colors[theme].bg
             }
            }
            onMouseLeave={(e) =>
              {e.target.style.color = Colors[theme].text
              e.target.style.backgroundColor = Colors[theme].bg}
            }>Drama</li>
              </ul>
            )}
          </li>
          
        </ul>
       </div>
      </div>

      {/* Right Side: Profile Icon & Subscribe Button */}
      <div className="flex items-center gap-5">
      <div className="w-8 h-8  flex justify-center items-center rounded-full cursor-pointer" style={{backgroundColor:Colors[theme].btnBg}} onClick={()=>dispatch(setTheme(theme === "light" ? "dark" : "light"))}>
          <img src={Theme} alt="" />
        </div>
       <Link to='login'>
       <div className="w-8 h-8  flex justify-center items-center rounded-full cursor-pointer" style={{backgroundColor:Colors[theme].btnBg}}>
          <img src={User} alt="" />
        </div></Link>
      

        
        <button className=" px-4 py-2 text-white font-semibold rounded-md cursor-pointer hidden md:block" style={{backgroundColor:Colors[theme].btnBg}}>
          SUBSCRIBE
        </button>
        {/* menubar */}
        <div className="w-9 h-8  flex justify-center items-center rounded-lg cursor-pointer block lg:hidden" style={{backgroundColor:Colors[theme].btnBg}} onClick={()=>setshowMenu(true)}  >
          <img src={MenuSvg} alt="" />
        </div>
      </div>
      {showMenu?
        <div className="fixed left-0 top-0 h-screen w-[350px] flex items-start" style={{backgroundColor:Colors[theme].bg}}>
         <ul className="flex flex-col gap-[1px] flex-1">
          <li style={{backgroundColor:Colors[theme].btnBg}} className="py-2 px-6 font-semibold text-lg">Home</li>
          <li    onMouseEnter={(e) =>{ setActiveDropdown("movies")
              e.target.style.backgroundColor = Colors[theme].btnBg
              e.target.style.color = Colors[theme].bg
            }}
            onMouseLeave={(e) => {setActiveDropdown(null)
              e.target.style.color = Colors[theme].btnBg
              e.target.style.backgroundColor = Colors[theme].bg
            }} className="py-2 px-6 font-semibold text-lg" style={{color:Colors[theme].btnBg}}>Movies</li>
            <li    onMouseEnter={(e) =>{ setActiveDropdown("movies")
              e.target.style.backgroundColor = Colors[theme].btnBg
              e.target.style.color = Colors[theme].bg
            }}
            onMouseLeave={(e) => {setActiveDropdown(null)
              e.target.style.color = Colors[theme].btnBg
              e.target.style.backgroundColor = Colors[theme].bg
            }} className="py-2 px-6 font-semibold text-lg" style={{color:Colors[theme].btnBg}}>TvShows</li>
            <li    onMouseEnter={(e) =>{ setActiveDropdown("movies")
              e.target.style.backgroundColor = Colors[theme].btnBg
              e.target.style.color = Colors[theme].bg
            }}
            onMouseLeave={(e) => {setActiveDropdown(null)
              e.target.style.color = Colors[theme].btnBg
              e.target.style.backgroundColor = Colors[theme].bg
            }} className="py-2 px-6 font-semibold text-lg" style={{color:Colors[theme].btnBg}}>Videos</li>
            <li    onMouseEnter={(e) =>{ setActiveDropdown("movies")
              e.target.style.backgroundColor = Colors[theme].btnBg
              e.target.style.color = Colors[theme].bg
            }}
            onMouseLeave={(e) => {setActiveDropdown(null)
              e.target.style.color = Colors[theme].btnBg
              e.target.style.backgroundColor = Colors[theme].bg
            }} className="py-2 px-6 font-semibold text-lg" style={{color:Colors[theme].btnBg}}>Pages</li>
            
          
         </ul>
         <img src={corssSvg} alt="" className="w-8 absolute right-1 top-1" onClick={()=>setshowMenu(false)} />
      </div>
      
      :null}
    </nav>
  );``
};

export default Navbar;
