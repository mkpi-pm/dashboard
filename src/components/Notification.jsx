import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Notification = () => {
  const { currentColor } = useStateContext();

  return (
    // Notifications Card #42464D
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#0e1740] p-8 rounded-lg w-96">

      {/* Header */}
      <div className="flex justify-between items-center">

        {/* Notifications & button */}
        <div className="flex gap-3">

          {/* Notifications */}
          <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>

          {/* button */}
          <button
            type="button"
            className="text-white text-xs rounded p-1 px-2 bg-orange-theme "> 5 New</button>

        </div>

        {/* Closing Button */}
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%" />

      </div>

      {/* Notifications content */}
      <div className="mt-5 ">

        {/* Data */}
        {chatData?.map((item, index) => (

          // Message Card
          <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color p-3">

            {/* Image */}
            <img
              className="rounded-full h-10 w-10"
              src={item.image}
              alt={item.message}
             />

            {/* Notifications Info */}
            <div>

              {/* Notifications */}
              <p className="font-semibold dark:text-gray-200">
                {item.message}
              </p>

              {/* Description */}
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {item.desc}
              </p>

            </div>

          </div>

        ))}

        {/* All Notifications Card */}
        <div className="mt-5">

          {/* All Notifications Button & props */}
          <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="10px"
            width="full"
           />
           
        </div>

      </div>

    </div>

  )

}

export default Notification;