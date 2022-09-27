import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar1.jpg";

const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    // User Profile Card #42464D
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#0e1740] p-8 rounded-lg w-96">

      {/* User Profile Headline */}
      <div className="flex justify-between items-center">

        {/* User Profile Text */}
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>

        {/* Closing Button */}
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />

      </div>

      {/* User Data */}
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6 hover:bg-light-gray">

        {/* User Image */}
        <img
          className="rounded-full h-24 w-24 mt-3 ml-3"
          src={avatar}
          alt="user-profile"
        />

        <div>
          {/* User Info */}
          <p className="font-semibold text-xl dark:text-gray-400"> Peter Roberts </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> info@sdg.com </p>
        </div>

      </div>

      {/* Profile Inbox Tasks */}
      <div>
        {/* List */}
        {userProfileData.map((item, index) => (

          // Single data card #42464D
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#ffffff]">

            {/* Icon & props*/}
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-xl rounded-lg p-3"
            >
              {item.icon}
            </button>

            {/* Title & Description */}
            <div>
              {/* Title */}
              <p className="font-semibold dark:text-gray-400 ">{item.title}</p>

              {/* Description */}
              <p className="text-gray-500 text-sm dark:text-gray-500"> {item.desc} </p>
            </div>

          </div>

        ))}

      </div>

      {/* Logout button card */}
      <div className="mt-5">
        
        {/* Button */}
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />

      </div>

    </div>

  )

}

export default UserProfile;