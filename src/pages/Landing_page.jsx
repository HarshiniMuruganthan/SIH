import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing_page = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const goToCalendar = () => {
    navigate("/calendar"); // navigates to /about
  };
  const goToMonasteries = () => {
    navigate("/monasteries"); // navigates to /about
  };
  const goToMain = () => {
    navigate("/main"); // navigates to /about
  };

  return (
    <div className="lg:h-[410vh] h-[220vh] w-full flex flex-col justify-start items-start">
      {/* navbar */}

      <div className="h-[10vh] bg-white w-full fixed top-[0px] z-50 flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center lg:w-[20%] w-[60%] h-[90%]">
          <div className='lg:w-[14%]  w-[20%] h-[90%] bg-[url("/re_logo.png")] bg-cover bg-center'></div>
          <div className="ml-2">
            <h1 className="text-red font-bold lg:text-[1.5rem] text-[1rem]">
              Culture Lens
            </h1>
            <h1 className="text-red text-[12px] text-center">
              About Sikkim Monasteries
            </h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[40%] h-[70%] items-center justify-between">
          <ul className="w-full flex items-center justify-evenly list-none text-[1.1rem]">
            <li className="cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer">
              <a href="#about">About</a>
            </li>
    
             <li className="cursor-pointer">
              <a href="#map">Explore</a>
            </li>
            <li className="cursor-pointer">
              <a href="/hotels">Connect us</a>
            </li>
          </ul>
        </div>

     

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-gray-800 text-2xl font-bold focus:outline-none"
          >
            {showMobileMenu ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="absolute top-[10vh] right-0 w-full bg-white border-t border-gray-200 flex flex-col items-center md:hidden z-50">
            <a
              href="#home"
              className="w-full text-center py-2 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#about"
              className="w-full text-center py-2 hover:bg-gray-100"
            >
              About
            </a>
          
             <a
              href="#map"
              className="w-full text-center py-2 hover:bg-gray-100"
            >
            Explore
            </a>
            <a
              href="#footer"
              className="w-full text-center py-2 hover:bg-gray-100"
            >
              Connect us
            </a>
            <button className="w-[90%] my-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700" onClick={goToMain} >
              Visit
            </button>
          </div>
        )}
      </div>




      {/* first secotion */}
      <section
        id="home"
        className="lg:h-[100vh] h-[50vh] bg-blue-300  w-full flex flex-row justify-center items-center"
      >
        <div className="w-[50%] h-[90%] bg-blue-300 flex flex-col items-start justify-center pl-6 pt-10">
          <h1 className="lg:text-[2.5rem] text-[1rem] w-[40vw] font-bold">
            Experience Sikkim’s Monasteries Like Never Before
          </h1>
          <p className="w-[40vw] lg:text-[1rem] text-[10px] lg:mt-2 lg:mb-3">
            Discover 200+ Monasteries through 360° Virtual Tours, Interactive
            Maps, and Digital Archives – Anytime, Anywhere.
          </p>
        <div className="lg:w-[55%] w-[65%] lg:h-[8%] h-[12%] flex items-center justify-center mt-4">
  <button
    className="lg:h-full h-[45%] lg:w-[49%] w-full rounded-[5px] bg-amber-500 cursor-pointer lg:text-[1rem] text-[10px] text-black flex items-center justify-center"
    onClick={goToMonasteries}
  >
    Start Your Virtual Tour
  </button>
</div>
        </div>

        <div className="w-[50%] h-[90%] flex items-center justify-center ">
          <div className="w-[80%] h-[80%]  flex flex-col justify-center items-center relative">
            {/* rings */}
            <div className="lg:w-[450px] lg:h-[450px] w-[200px] h-[200px] rounded-[50%] bg-[radial-gradient(circle,_#fcfcfc_4%,_#5cfcff_100%)] flex items-center justify-center mt-10 mr-5">
              <div className="lg:w-[350px] lg:h-[350px] w-[150px] h-[150px] rounded-[50%] bg-[radial-gradient(circle,_#5cfcff_4%,_#fcfcfc_100%)] flex items-center justify-center">
                <div className="lg:w-[250px] lg:h-[250px] w-[100px] h-[100px] rounded-[50%] bg-[radial-gradient(circle,_#fcfcfc_4%,_#5cfcff_100%)] flex items-center justify-center"></div>
              </div>
            </div>

            <div className=' lg:w-[370px] lg:h-[480px] w-[200px] h-[200px] rounded-[50%] bg-[url("/main_image.png")] bg-cover bg-top  lg:flex items-center justify-center absolute lg:top-[5%] top-[18%]'></div>

            {/* circle */}
            <div className="lg:w-[30px] w-[20px] h-[20px] lg:h-[30px] rounded-[50%] bg-yellow-300  lg:flex items-center justify-center absolute lg:top-[12%] top-[15%] right-[25%]"></div>
            <div className="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-[50%] bg-white flex items-center justify-center absolute lg:top-[23%] top-[35%] lg:left-[14%] left-[-19%]">
              <i className="fa-solid fa-train-subway text-[1rem] lg:text-[1.5rem] text-blue-500"></i>
            </div>
            <div className="lg:w-[130px] lg:h-[35px] w-[80px] h-[20px] rounded-[10px] bg-white flex items-center justify-evenly absolute lg:top-[22%] top-[25%] lg:right-[4%] right-[-12%]">
              <i className="fa-solid fa-plane text-blue-500 lg:text-[14px] text-[10px]"></i>
              <h1 className="lg:text-[14px] text-[10px]">Come Sikkim</h1>
            </div>
            <div className="lg:w-[200px] lg:h-[170px] w-[80px] h-[50px] lg:rounded-[10px] rounded-[2px] bg-white flex flex-col items-center justify-center absolute lg:bottom-[-5%] bottom-[-5%] lg:left-[5%]  left-[-30%]">
              <div className='lg:w-[180px] lg:h-[130px] w-[70px] h-[30px]  lg:rounded-[10px] rounded-[2px] bg-[url("/img1.jpg")] bg-cover bg-center'></div>
              <h1 className="lg:text-[1rem] text-[8px]">Tsomgo Lake</h1>
            </div>
            <div className="lg:w-[150px] lg:h-[120px] w-[50px] h-[40px] lg:rounded-[10px] rounded-[2px] bg-white flex flex-col items-center justify-center absolute lg:bottom-[14%] bottom-[4%] lg:right-[-2%] right-[-10%]">
              <div className='lg:w-[130px] lg:h-[80px] w-[40px] h-[25px] lg:rounded-[10px] rounded-[2px] bg-red-100 bg-[url("/img2.jpg")] bg-cover bg-center'></div>
              <h1 className="lg:text-[1rem] text-[6px]">Yumthang Valley </h1>
            </div>
            <div className="lg:w-[70px] lg:h-[70px] rounded-[50%] bg-yellow-300 hidden lg:flex items-center justify-center absolute bottom-[5%] right-[30%]"></div>
          </div>
        </div>
      </section>




      {/* second section */}

      <section
        id="about"
        className="lg:h-[90vh] h-[40vh]   w-full flex flex-row justify-center items-center"
      >
        <div className="w-[50%] h-[90%] relative">
          <div className="lg:w-[350px] lg:h-[80%] w-[120px] h-[60%] bg-red-300 absolute lg:top-[10%] top-[20%] lg:left-[20%] left-[10%] rotate-345 flex items-center justify-center rounded-[5px]">
            <div className='w-[90%] h-[90%] bg-[url("/img4.jpg")] bg-cover bg-center'></div>
          </div>
          <div className="lg:w-[350px] lg:h-[80%] w-[120px] h-[60%] bg-blue-300 absolute lg:top-[10%] top-[20%] lg:left-[30%] left-[20%] rotate-360 flex items-center justify-center rounded-[5px]">
            <div className='w-[90%] h-[90%] bg-[url("/img5.jpg")] bg-cover bg-center'></div>
          </div>
          <div className="lg:w-[350px] lg:h-[80%] w-[120px] h-[60%] bg-pink-300 absolute lg:top-[10%] top-[20%] lg:left-[40%] left-[30%] rotate-15 flex items-center justify-center rounded-[5px]">
            <div className='w-[90%] h-[90%] bg-[url("/img3.jpg")] bg-cover bg-center'></div>
          </div>
        </div>
        <div className="w-[50%] h-[90%]  flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-center lg:text-[1.7rem] text-[1.3rem] font-bold">
            About CultureLens
          </h1>
          <p className="text-center lg:text-[1.2rem] text-[9px] w-[44vw] mb-4">
            CultureLens is a digital heritage platform that brings Sikkim’s
            centuries-old monasteries to life through immersive 360° virtual
            tours, interactive maps, and rich digital archives. Our goal is to
            make cultural treasures accessible to everyone, anytime, while
            preserving rare manuscripts, murals, and historical documents for
            future generations. With features like AI-powered search, cultural
            event calendars, and smart audio guides, CultureLens connects
            tourism, education, and technology to celebrate and protect Sikkim’s
            spiritual heritage.
          </p>
        </div>
      </section>





      {/* feature */}


    <section
      id="feature"
      className="lg:h-[90vh] h-[30vh] bg-blue-300 w-full flex flex-row justify-center items-center overflow-hidden"
    >
      {/* Left Feature Boxes */}
      <div className="w-[70%] h-[100%] bg-blue-300 flex flex-col items-end justify-center lg:gap-10 gap-4 bg-[url('/f_img.png')] bg-cover bg-center">
        
        {/* Feature 1 */}
        <div
          className="lg:w-[38%] w-[47%] lg:h-[10%] h-[10%] p-[5px] bg-white lg:mr-[20%] mr-[-4%] rounded-[30px] flex flex-row items-center justify-evenly cursor-pointer hover:bg-yellow-100 transition"
          onClick={() => navigate("/monasteries")}
        >
          <div className="lg:w-[40px] lg:h-[40px] w-[10px] h-[10px] rounded-[50%] bg-yellow-300 flex items-center justify-center lg:text-[1.2rem] text-[8px]">
            1
          </div>
          <h1 className="font-bold lg:text-[1.2rem] text-[8px]">
                     360° Virtual Tours 🌐
          </h1>
        </div>
           {/* Feature 1 */}
  <div
    className="lg:w-[38%] w-[47%] lg:h-[10%] h-[10%] p-[5px] bg-white rounded-[30px] flex flex-row items-center justify-evenly cursor-pointer hover:bg-yellow-100 transition transform -translate-x-4 -translate-y-2"
    onClick={() => navigate("/monasteries")}
  >
    <div className="lg:w-[40px] lg:h-[40px] w-[10px] h-[10px] rounded-full bg-yellow-300 flex items-center justify-center lg:text-[1.2rem] text-[8px]">
      2
    </div>
    <h1 className="font-bold lg:text-[1.2rem] text-[7px]">
      Narrated Walkthroughs 🎧
    </h1>
  </div>

  {/* Feature 2 */}
  <div
    className="lg:w-[38%] w-[47%] lg:h-[10%] h-[10%] p-[5px] bg-white rounded-[30px] flex flex-row items-center justify-evenly cursor-pointer hover:bg-yellow-100 transition transform translate-x-4 translate-y-2"
    onClick={() => navigate("/#map")}
  >
    <div className="lg:w-[40px] lg:h-[40px] w-[10px] h-[10px] rounded-full bg-yellow-300 flex items-center justify-center lg:text-[1.2rem] text-[8px]">
      3
    </div>
    <h1 className="font-bold lg:text-[1.2rem] text-[7px]">
      Interactive Map 🗺️
    </h1>
  </div>

        {/* Feature 3 */}
        <div
          className="lg:w-[38%] w-[47%] lg:h-[10%] h-[10%] p-[5px] bg-white mr-[4%] rounded-[30px] flex flex-row items-center justify-evenly cursor-pointer hover:bg-yellow-100 transition"
          onClick={() => navigate("/#scanner")}
        >
          <div className="lg:w-[40px] lg:h-[40px] w-[10px] h-[10px] rounded-[50%] bg-yellow-300 flex items-center justify-center lg:text-[1.2rem] text-[8px]">
            4
          </div>
          <h1 className="font-bold lg:text-[1.2rem] text-[7px]">
          Digital Archives 📜
          </h1>
        </div>

        {/* Feature 4 */}
        <div
          className="lg:w-[38%] w-[47%] lg:h-[10%] h-[10%] p-[5px] bg-white lg:mr-[10%] rounded-[30px] flex flex-row items-center justify-evenly cursor-pointer hover:bg-yellow-100 transition"
          onClick={() => navigate("/calendar")}
        >
          <div className="lg:w-[40px] lg:h-[40px] w-[10px] h-[10px] rounded-[50%] bg-yellow-300 flex items-center justify-center lg:text-[1.2rem] text-[8px]">
            5
          </div>
          <h1 className="font-bold lg:text-[1.2rem] text-[7px]">
           Cultural Calendar 📅
          </h1>
        </div>

        {/* Feature 5 */}
        <div
          className="lg:w-[38%] w-[47%] lg:h-[10%] h-[10%] p-[5px] bg-white lg:mr-[20%] mr-[-4%] rounded-[30px] flex flex-row items-center justify-evenly cursor-pointer hover:bg-yellow-100 transition"
          onClick={() => navigate("/hotels")}
        >
          <div className="lg:w-[40px] lg:h-[40px] w-[10px] h-[10px] rounded-[50%] bg-yellow-300 flex items-center justify-center lg:text-[1.2rem] text-[8px]">
            6
          </div>
          <h1 className="font-bold lg:text-[1.2rem] text-[7px]">
             Bookings 📅
          </h1>
        </div>
      </div>

      {/* Right Side Graphics */}
      <div className="w-[30%] h-[100%] flex flex-col justify-center items-center relative">
        <div className="lg:w-[550px] lg:h-[550px] w-[120px] h-[120px] bg-[url('/earth.png')] bg-cover bg-top rounded-[50%]"></div>
        <div className="lg:w-[550px] lg:h-[550px] w-[150px] h-[150px] bg-[url('/earth_people.png')] bg-cover bg-top lg:left-[0%] left-[-20%] lg:bottom-[0%] bottom-[0%] absolute"></div>
        <div className="lg:w-[250px] lg:h-[140px] w-[100px] h-[70px] bg-[url('/airplane.png')] bg-cover bg-center absolute right-[20%] lg:bottom-[75%] bottom-[65%] rotate-22"></div>
      </div>
    </section>

      {/* map */}

      <section
        id="map"
        className="lg:h-[90vh] h-[50vh] bg-white w-full flex flex-row justify-center items-center  overflow-hidden"
      >
        <div className="w-[80%] h-[90%] bg-white  flex flex-col justify-center items-center relative">
          <div className='lg:w-[550px] lg:h-[550px] w-[250px] h-[250px] bg-[url("/sikkim_map.png")] bg-cover bg-top rounded-[50%]'></div>

          {/* location pin card */}
          <div className="lg:w-[30%] lg:h-[12%] w-[60%] h-[10%] bg-blue-300 absolute lg:left-[2%] lg:bottom-[60%] bottom-[70%] left-[-10%] rounded-[5px] flex flex-row items-center justify-evenly">
            <div className='lg:w-[100px] lg:h-[80%] w-[40px] h-[80%] bg-[url("/img1.jpg")] bg-cover bg-center rounded-[5px] border-[2px] border-white'></div>
            <div className="w-[65%] h-[90%]  flex flex-col justify-evenly">
              <h1 className="lg:text-[1.2rem] text-[10px] font-bold">Rumtek Monastery</h1>
              <p className="lg:text-[12px] text-[8px]">📍 Location: Gangtok, East Sikkim</p>
            </div>
          </div>
          <div className="lg:w-[30%] lg:h-[12%] w-[60%] h-[10%] bg-blue-300 absolute lg:left-[10%] lg:bottom-[15%] left-[-5%] bottom-[10%] rounded-[5px] flex flex-row items-center justify-evenly">
            <div className='lg:w-[100px] lg:h-[80%] w-[40px] h-[80%] bg-[url("/img1.jpg")] bg-cover bg-center rounded-[5px] border-[2px] border-white'></div>
            <div className="w-[65%] h-[90%]  flex flex-col justify-evenly">
              <h1 className="lg:text-[1.2rem] text-[10px] font-bold">Enchey Monastery</h1>
              <p className="lg:text-[12px] text-[8px]">📍 Location: Gangtok, East Sikkim</p>
            </div>
          </div>
          <div className="lg:w-[30%] lg:h-[12%] w-[60%] h-[10%] bg-blue-300 absolute lg:right-[5%] lg:top-[24%]  top-[25%] right-[-20%] rounded-[5px] flex flex-row items-center justify-evenly">
            <div className='lg:w-[100px] lg:h-[80%] w-[40px] h-[80%] bg-[url("/img1.jpg")] bg-cover bg-center rounded-[5px] border-[2px] border-white'></div>
            <div className="w-[65%] h-[90%]  flex flex-col">
              <h1 className="lg:text-[1.2rem] text-[10px] font-bold mb-0 mt-1">
                Pemayangtse Monastery
              </h1>
              <p className="lg:text-[12px] text-[8px]">📍 Location: Pelling, West Sikkim</p>
            </div>
          </div>
          <div className="lg:w-[30%] lg:h-[12%] w-[65%] h-[10%] bg-blue-300 absolute lg:right-[10%] lg:bottom-[20%] right-[-15%] bottom-[25%] rounded-[5px] flex felx-row items-center justify-evenly">
            <div className='lg:w-[100px] lg:h-[80%] w-[40px] h-[80%] bg-[url("/img1.jpg")] bg-cover bg-center rounded-[5px] border-[2px] border-white'></div>
            <div className="w-[65%] h-[90%]  flex flex-col justify-evenly">
              <h1 className="lg:text-[1.2rem] text-[10px] font-bold mb-0 mt-1">
                {" "}
                Tashiding Monastery
              </h1>
              <p className="lg:text-[12px] text-[7px]">
                📍 Location: Near Yuksom, West Sikkim
              </p>
            </div>
          </div>

          {/* airplane */}
          <div className='lg:w-[250px] lg:h-[140px] w-[100px] h-[70px] bg-[url("/airplane.png")] bg-cover bg-center absolute right-[40%] lg:bottom-[65%] bottom-[60%]'></div>
        </div>

        <div className="hidden lg:w-[20%] lg:h-[90%] bg-blue-300 rounded-[10px] lg:flex flex-col items-center justify-center gap-4">
          <h1 className="text-[1.7rem] font-bold ">Tourist Attractions</h1>

          <div className="w-[90%] h-[10%] bg-white flex flex-row items-center justify-evenly rounded-[10px]">
            <div className="w-[40px] h-[40px] rounded-[50%] bg-yellow-300 text-[1.2rem] flex items-center justify-center">
              1
            </div>
            <div className="w-[60%] h-[90%] flex flex-col justify-evenly">
              <h1 className="text-[1.1rem] font-bold">Nathula Pass</h1>
              <p className="text-[12px]">📍 Gangtok, East Sikkim</p>
            </div>
          </div>

          <div className="w-[90%] h-[10%] bg-white flex flex-row items-center justify-evenly rounded-[10px]">
            <div className="w-[40px] h-[40px] rounded-[50%] bg-yellow-300 text-[1.2rem] flex items-center justify-center">
              2
            </div>
            <div className="w-[60%] h-[90%] flex flex-col justify-evenly">
              <h1 className="text-[1.1rem] font-bold">Buddha Park</h1>
              <p className="text-[12px]">📍 Location: Yuksom, Sikkim</p>
            </div>
          </div>

          <div className="w-[90%] h-[10%] bg-white flex flex-row items-center justify-evenly rounded-[10px]">
            <div className="w-[40px] h-[40px] rounded-[50%] bg-yellow-300 text-[1.2rem] flex items-center justify-center">
              3
            </div>
            <div className="w-[70%] h-[90%] flex flex-col justify-evenly">
              <h1 className="text-[1.1rem] font-bold">Yumthang Valley</h1>
              <p className="text-[12px]">📍 Location: Near Yuksom, Sikkim</p>
            </div>
          </div>

          <div className="w-[90%] h-[10%] bg-white flex flex-row items-center justify-evenly rounded-[10px]">
            <div className="w-[40px] h-[40px] rounded-[50%] bg-yellow-300 text-[1.2rem] flex items-center justify-center">
              4
            </div>
            <div className="w-[70%] h-[90%] flex flex-col justify-evenly">
              <h1 className="text-[1.1rem] font-bold">Zero Point</h1>
              <p className="text-[12px]">📍 Location: Gangtok, East Sikkim</p>
            </div>
          </div>

          <div className="w-[90%] h-[10%] bg-white flex flex-row items-center justify-evenly rounded-[10px]">
            <div className="w-[40px] h-[40px] rounded-[50%] bg-yellow-300 text-[1.2rem] flex items-center justify-center">
              5
            </div>
            <div className="w-[70%] h-[90%] flex flex-col justify-evenly">
              <h1 className="text-[1.1rem] font-bold">Tsomgo Lake</h1>
              <p className="text-[12px]">📍 Location: Ravangla, Sikkim</p>
            </div>
          </div>

          <div className="w-[90%] h-[10%] bg-white flex flex-row items-center justify-evenly rounded-[10px]">
            <div className="w-[40px] h-[40px] rounded-[50%] bg-yellow-300 text-[1.2rem] flex items-center justify-center">
              6
            </div>
            <div>
              <h1 className="text-[1.1rem] font-bold">Char Dham</h1>
              <p className="text-[12px]">📍 Location: Phodong, North Sikkim</p>
            </div>
          </div>

         
        </div>
      </section>

      {/* footer */}
       <section
        id="footer"
        className="h-[50vh] bg-blue-300 w-full flex flex-row items-center justify-evenly"
      >
        <div className="w-[30%] h-[90%]  flex flex-col items-start justify-center gap-6">
          <div className="w-[90%] h-[30%]  flex flex-row items-center justify-start bg-blue-300 gap-6">
           <div className="hidden lg:block lg:w-[15%] lg:h-[90%] lg:bg-[url('/re_logo.png')] bg-cover bg-center"></div>

            <div>
              <h1 className="lg:text-[1.7rem] text-[1rem] font-bold">CultureLens</h1>
              <p className="lg:text-[1rem] text-[14px]">About Sikkim monasteries</p>
            </div>
          </div>
          <div>
            <p className="lg:text-[1.1rem] text-[10px]">
              CultureLens is an app that lets you explore Sikkim’s monasteries
              from anywhere. It has 360° virtual tours, audio guides, an
              interactive map, digital archives, and a cultural calendar. This
              makes it easy for tourists and researchers to learn, plan, and
              experience the culture of Sikkim.
            </p>
          </div>
        </div>

        {/* websites */}
        <div className="w-[5%] h-[90%]  flex flex-col items-center justify-evenly">
          <i className="lg:text-[1.7rem] text-[1rem] fa-brands fa-facebook"></i>
          <i className="lg:text-[1.7rem] text-[1rem] fa-brands fa-youtube"></i>
          <i className="lg:text-[1.7rem] text-[1rem] fa-brands fa-google"></i>
          <i className="lg:text-[1.7rem] text-[1rem] fa-brands fa-instagram"></i>
          <i className="lg:text-[1.7rem] text-[1rem] fa-brands fa-twitter"></i>
        </div>

        {/* Links */}
        <div className="lg:w-[20%] lg:h-[70%]  lg:flex flex-col items-start justify-evenly hidden">
          <h1 className="w-full text-center text-[1.7rem] font-bold">
            CultureLens
          </h1>
          <ul className="w-full h-[70%] list-none  text-[1.2rem] flex flex-col items-start justify-evenly">
            <li className="w-full cursor-pointer text-center">
              <a href="#home">Home</a>
            </li>
            <li className="w-full cursor-pointer text-center">
              <a href="#scanner">Explore</a>
            </li>
            <li className="w-full cursor-pointer text-center">
              <a href="#calture">Cultural Calendar</a>
            </li>
            <li className="w-full cursor-pointer text-center">
              <a href="footer">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="lg:w-[40%] w-[50%] h-[90%]  flex flex-col items-center justify-evenly">
          <div className="w-[90%] h-[25%] flex flex-col items-start justify-center">
            <label htmlFor="" className="text-[1.2rem]">
              Email
            </label>
            <input
              className="w-full h-[60%] border-2 border-black rounded-[5px] pl-3 pt-2 pb-2"
              placeholder="Enter your email address"
              type="email"
              required
            />
          </div>
          <div className="w-[90%] h-[55%] flex flex-col items-start justify-center">
            <label htmlFor="" className="text-[1.2rem]">
              feedback
            </label>
            <textarea
              className="w-full h-[70%] border-2 border-black rounded-[5px] pl-3 pt-2"
              placeholder="Write your feedback here... "
              rows={5}
              cols={30}
              name=""
              id=""
            ></textarea>
          </div>
          <button className="w-[90%] lg:h-[15%] h-[10%] bg-yellow-300 cursor-pointer rounded-[5px] lg:text-[1.1rem] text-[13px]">
            Submit Feedback
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing_page;
