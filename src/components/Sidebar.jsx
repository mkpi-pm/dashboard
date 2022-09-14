import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import {useStateContext} from "../contexts/ContextProvider";

const Sidebar = () => {
  const {activeMenu, setActiveMenu, screenSize, currentColor} = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    // Sidebar Card
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">

      {/* Active Menu Settings */}
      {activeMenu && (
        <>
          {/* Sidebar Hedline */}
          <div className="flex justify-between items-center">

            {/* SiShopware Icon & Title */}
            <Link
              to="/" 
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">

              {/* SiShopware Icon */}
              <SiShopware />

              {/* Sidebar Title */}
              <span>Sample</span>

            </Link>

            {/* MdOutline Cancel Icon & button*/}
            <TooltipComponent content="Menu" position="BottomCenter">

              {/* button */}
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                {/* MdOutline Cancel Icon */}
                <MdOutlineCancel />

              </button>

            </TooltipComponent>

          </div>

          {/* links list */}
          <div className="mt-10">

            {/* Menu titles & links */}
            {links.map((item) => (

              // Menu titles
              <div key={item.title}>

                {/* single title */}
                <p className="text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>

                {/* Menu links */}
                {item.links.map((link) => (

                  // Single link name/icon props
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : ""
                    })}
                    className={({ isActive }) => (
                      isActive ? activeLink : normalLink
                    )}
                  >
                    {/* Single link icon */}
                    {link.icon}

                    {/* Single link name */}
                    <span className="capitalize">
                      {link.name}
                    </span>

                  </NavLink>

                ))}

              </div>

            ))}

          </div>

        </>
      
      )}

    </div>
    
  )

}

export default Sidebar;