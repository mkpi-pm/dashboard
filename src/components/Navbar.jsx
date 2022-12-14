import React, {useEffect} from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar1.jpg";
import {Cart, Chat, Notification, UserProfile} from ".";
import {useStateContext} from "../contexts/ContextProvider";

const NavButton = ({title, customFunc, icon, color, dotColor}) => (

  // Navigation components settings
  <TooltipComponent
    content={ title }
    position="BottomCenter"
  >
    {/* Navigation buttons & props */}
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      {/* Navigation dots */}
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />

      {/* Navigation icons */}
      {icon}

    </button>

  </TooltipComponent>

);

const Navbar = () => {
  const {activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize, currentColor} = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if(screenSize < 1600) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);


  return (
    // Navbar elements
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">

      {/* Menu button*/}
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />} />

      <div className="flex">
        {/* Cart button */}
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        {/* Chat button */}
        <NavButton
          title="Chat"
          dotColor="#fec90f"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        {/* Notifications button */}
        <NavButton
          title="Notifications"
          dotColor="#4cdf82"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        {/* Profile */}
        <TooltipComponent
          content="Profile"
          position="BottomCenter"
        >
          {/* Profile Card */}
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            {/* Profile Image */}
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
            />
            {/* Profile text */}
            <p>
              <span className="text-gray-400 text-14">Hi, </span> {" "}
              <span className="text-gray-400 font-bold ml-1 text-14">Peter</span>
            </p>

            {/* MdKeyboardArrowDown Component */}
            <MdKeyboardArrowDown className="text-gray-400 text-14" />

          </div>

        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}

      </div>
      
    </div>

  )
  
}

export default Navbar;