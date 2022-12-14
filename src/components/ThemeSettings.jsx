import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext();

  return (
    // settings shadow
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 bottom-0 left-0">

      {/* settings card */}
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#0e1740] w-400">

        {/* settings title */}
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>

          {/* closing button */}
          <button
            type="button"
              style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
              className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
              onClick={() => setThemeSettings(false)}
          >
            <MdOutlineCancel />
          </button>

        </div>

        {/* theme options border */}
        <div className="flex-col border-t-1 border-color p-4 ml-4">

          {/* theme options title */}
          <p className="font-semibold text-xl">Theme Options</p>

          {/* theme options toggle - light input */}
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
             />
              
            {/* theme options light label */}
            <label
              htmlFor="light"
              className="ml-2 text-md cursor-poointer"
            >
              White
            </label>

          </div>
            
          {/* theme options toggle - dark input */}
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Dark"}
             />
              
            {/* theme options dark label */}
            <label
              htmlFor="dark"
              className="ml-2 text-md cursor-poointer"
            >
              Blue
            </label>

          </div>

        </div>

        {/* theme colors border */}
        <div className="flex-col border-t-1 border-color p-4 ml-4">

          {/* theme colors title */}
          <p className="font-semibold text-xl">Theme Colors</p>

          {/* content position & spacing*/}
          <div className="flex gap-3">

            {themeColors.map((item, index) => (

              // content names
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                {/* content positions */}
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">

                  {/* content shape & color toggle */}
                  <button
                    type="button"
                    style={{ backgroundColor: item.color}}
                    className="h-10 w-10 rounded-full cursor-pointer"
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${item.color === currentColor ? "block" : "hidden"}`} />

                  </button>

                </div>
                  
              </TooltipComponent>

            ))}

          </div>

        </div>

      </div>

    </div>

  )
  
}

export default ThemeSettings;