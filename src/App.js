import React from "react";
import { MdWaterDrop, MdLocationOn } from "react-icons/md";
import {
  BsSearch,
  BsFillBookmarkFill,
  BsStarFill,
  BsStar,
  BsFillChatLeftFill,
  BsFillPersonFill,
} from "react-icons/bs";
// import {StyledBadge , Avatar} from "@mui/material"
import { AiTwotoneEye } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
// import { RiMessage2Fill } from "react-icons/ri";
import img1 from "./img/Profile.png";
import "./App.css";
function App() {
  return (
    <>
      <div id="one" className="h-[142vh] w-[98.7vw] pt-1 bg-[rgb(33,150,243)] ">
        <div className="h-[138vh] w-[85vw] ml-[10vw] bg-white mt-4 rounded-lg m-auto">
          <div className="w-[88%] m-auto  h-[100%]">
            {/* =============================nav bar ============================ */}
            <div className="h-[15%] w-full border-b-2 border-gray-200 flex">
              <div className="w-[21%] h-[100%] font-mono font-extrabold flex ">
                <div className="h-[6vh] text-3xl mt-4 pt-1 text-white flex justify-center rounded-full w-[3vw] bg-[rgb(33,150,243)]">
                  <MdWaterDrop />
                </div>
                <h1 className="mt-5 ml-3 text-3xl text-gray-600 tracking-tighter">
                  Kodecolor
                </h1>
              </div>
              <div className="flex">
                <span className="mt-5 h-[6vh] text-gray-400 pt-2 pl-2 border-r-0 border border-gray-400 ml-4 font-mono ">
                  <BsSearch />
                </span>
                <input
                  className="h-[6vh] border-l-0 w-[15vw] border mt-5 pl-1 border-gray-400 outline-none"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <div className=" w-[48%] ">
                <ul className="flex justify-around tracking-tighter pt-6 font-mono font-bold text-gray-600 text-lg">
                  <li>Find people</li>
                  <li className="flex">
                    Messages
                    <div className="h-[4vh] bg-blue-200 text-cyan-400 ml-1 pl-2 w-[2vw] rounded-sm">
                      4
                    </div>
                  </li>
                  <li>My Contact</li>
                  <li className=" w-[3vw]  h-[3vw] rounded-full">
                    <img
                      className=" rounded-full h-full w-full z-0 ml-6 -mt-2 block"
                      src={img1}
                      alt="one"
                    />
                    <div className="h-2 w-2 ml-14 -mt-10 rounded-full bg-green-500 z-50"></div>
                  </li>
                </ul>
              </div>
            </div>
            {/* =============================nav bar ============================ */}
            <div className="flex">
              <div className="w-[30%] h-[45vh]  ">
                <img
                  className="  h-[90%] m-auto mt-[5%] w-[70%]"
                  src={img1}
                  alt="one"
                />
                {/* <StyledBadge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  variant="dot"
>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
</StyledBadge> */}
              </div>
              <div className="w-[70%] h-[45vh] border-b-2 border-gray-2 ">
                <div className="h-[25%] mt-4 flex w-full ">
                  <div className="w-[30%]  ">
                    <h1 className="font-mono font-semibold text-gray-500 leading-4 text-2xl">
                      Jeremy Roze
                    </h1>
                    <p className="text-blue-400 text-sm font-semibold p-1 mt-1">
                      Product Designer
                    </p>
                  </div>
                  <div className="w-[40%] flex  ">
                    <h1 className="text-gray-400 text-2xl mt-2 ml-2">
                      <MdLocationOn />
                    </h1>
                    <p className="text-gray-400 text-md tracking-tighter mt-2">
                      New York NY
                    </p>
                  </div>
                  <div className="w-[40%] flex  ">
                    <h1 className="text-gray-400 text-2xl mt-2 ml-36">
                      <BsFillBookmarkFill />
                    </h1>
                    <p className="text-gray-400 text-lg mt-1 ml-1 tracking-tighter">
                      Bookmark
                    </p>
                  </div>
                </div>

                <div className="h-[25%]-mt-4 w-full ">
                  <h1 className="font-semibold text-gray-500 font-mono text-lg">
                    RANKINGS
                  </h1>
                  <ul className="flex">
                    <li className="text-3xl  text-gray-600 font-bold">8,6</li>
                    <li className="text-2xl  text-blue-500 mt-2 ml-1 font-bold">
                      <BsStarFill />
                    </li>
                    <li className="text-2xl  text-blue-500 mt-2 ml-1 font-bold">
                      <BsStarFill />
                    </li>
                    <li className="text-2xl  text-blue-500 mt-2 ml-1 font-bold">
                      <BsStarFill />
                    </li>
                    <li className="text-2xl  text-blue-500 mt-2 ml-1 font-bold">
                      <BsStarFill />
                    </li>
                    <li className="text-2xl  text-blue-200 mt-2 ml-1 font-bold">
                      <BsStar />
                    </li>
                  </ul>
                </div>
                {/* ============================================== */}
                <div className="h-[25%] flex mt-6 w-full font-mono font-semibold  tracking-tighter ">
                  <ul className="flex">
                    <li className="flex text-3xl mt-1 rounded-full text-gray-600">
                      <BsFillChatLeftFill />
                    </li>
                    <li className="flex  text-gray-600 ml-1 text-xl ">
                      Send message
                    </li>
                  </ul>
                  <ul className="flex ml-5 pt-1 h-[7vh] w-[10vw] pl-2 -mt-1 text-blue-400 bg-blue-100">
                    <li className="flex text-2xl mt-1 rounded-full">
                      <TiTick />
                    </li>
                    <li className="flex ml-1 text-xl ">Contacts</li>
                  </ul>
                  <ul className="flex ml-5 text-xl text-gray-400 pt-1 h-[7vh] w-[10vw] pl-2">
                    Report user
                  </ul>
                </div>
                {/* ======================================================= */}
                <div className="h-[25%] flex w-full font-mono font-semibold  tracking-tighter ">
                  <ul className="flex">
                    <li className="flex text-2xl mt-1 rounded-full text-gray-400">
                      <AiTwotoneEye />
                    </li>
                    <li className="flex  text-gray-400 ml-1 text-xl ">
                      Timeline
                    </li>
                  </ul>
                  <ul className="flex ml-5 pt-3 -mt-2 h-[7vh] border-b-4 border-blue-600 w-[8vw]   text-gray-700">
                    <li className="flex text-2xl mt-1 rounded-full">
                      <BsFillPersonFill />
                    </li>
                    <li className="flex ml-1 text-xl ">Contacts</li>
                  </ul>
                </div>

                {/* ======================================================= */}
              </div>
            </div>
            <div className="flex w-[100%] ">
              <h1 className="flex  text-gray-400 ml-1 text-xl">work</h1>
              <div className="w-[20%] mt-4 h-0 border border-gray-300 ml-2"></div>
              <h1 className="flex  text-gray-400 ml-12 text-xl">
                Contact Information
              </h1>
            </div>
            <div className="w-full pt-4 h-[48%] flex  ">
              <div className="w-[30%] ">
                <div className="flex">
                  <h1 className="font-semibold text-2xl tracking-tighter text-gray-500">
                    Spotify New York
                  </h1>
                  <button className=" p-2 ml-12 rounded-sm font-semibold text-blue-700 bg-blue-200">
                    Primary
                  </button>
                </div>
                <h1 className="text-gray-500">170 William Street</h1>
                <h1 className="text-gray-500">
                  New York. NY 10038-78 212-312-51
                </h1>
                <div className="flex">
                  <h1 className="font-semibold w-[50%] text-2xl tracking-tighter text-gray-500">
                    Metropolitan Museum
                  </h1>
                  <button className="  ml-10 p-2 h-[6vh] rounded-sm font-semibold text-blue-700 bg-blue-200">
                    Secondary
                  </button>
                </div>
                <h1 className="text-gray-500">525 E 68th Street</h1>
                <h1 className="text-gray-500">
                  New York. NY 10038-78 212-312-51
                </h1>
                <div className="flex w-[100%] ">
                  <h1 className="flex  text-gray-400 ml-1 text-xl">SKILLS</h1>
                  <div className="w-[80%] mt-4 h-0 border border-gray-300 ml-2"></div>
                </div>
                <ul className="font-bold text-xl text-gray-700">
                  <li className="mt-[1px] ml-6">Branding</li>
                  <li className="mt-[1px] ml-6">UI/UX</li>
                  <li className="mt-[1px] ml-6">Web - Design</li>
                  <li className="mt-[1px] ml-6">Pacakaging</li>
                  <li className="mt-[1px] ml-6">Print & Editorial</li>
                </ul>
              </div>
              <div className="w-[50%] ml-16">
                <div className="p-1 ml-2 mt-3 flex font-semibold">
                  <h1>Phone:</h1>
                  <a className="ml-12  text-blue-600" href="tel:+923003035413">
                    +923000000786
                  </a>
                </div>
                <div className="p-1 mt-4 ml-2 flex font-semibold">
                  <h1>Address:</h1>
                  <p className="ml-12 text-gray-600">
                    525 E 68th Street <br />
                    New York, NY 10651-78 156-187-60
                  </p>
                </div>
                <div className="p-1 mt-3 ml-2 flex font-semibold">
                  <h1>E-mail:</h1>
                  <a
                    className="ml-16 text-blue-600"
                    href="mailto:musamaaktar68@gmail.com"
                  >
                    hellojeremyrose.com
                  </a>
                </div>
                <div className="p-1 ml-2 mt-2 flex font-semibold">
                  <h1>Site:</h1>
                  <a
                    className="ml-20 text-blue-600"
                    href="https://www.google.com"
                  >
                    www.jeremyrose.com
                  </a>
                </div>
                <h1 className="font-bold text-xl -ml-12 text-gray-400 font-sans tracking-lg">
                  Basic Information
                </h1>
                <div className="p-1 mt-6 flex font-bold">
                  <h1>Birthday:</h1>
                  <p className="ml-16 text-gray-400">June 5,1992</p>
                </div>
                <div className="p-1 mt-3 flex font-bold">
                  <h1>Gender:</h1>
                  <p className="ml-[5.3vw] text-gray-400">Male</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
