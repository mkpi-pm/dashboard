import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useStateContext } from "../contexts/ContextProvider";
import { cartData } from "../data/dummy";
import { Button } from ".";

const Cart = () => {
  const { currentColor } = useStateContext();

  return (
    // Non-Shopping Cart card part
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 bottom-0 left-0">

      {/* Shopping Cart card #42464D */}
      <div className="float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#0e1740] bg-white md:w-400 p-8">

        {/* Header */}
        <div className="flex justify-between items-center">

          {/* Title */}
          <p className="font-semibold text-lg">Shopping Cart</p>

          {/* Closing Button */}
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          />

        </div>

        {/* Data */}
        {cartData?.map((item, index) => (

          <div key={index}>

            {/* Item Background Card */}
            <div>

              {/* Cart Item Info Card*/}
              <div className="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4 hover:bg-light-gray cursor-pointer text-gray-600 dark:text-gray-400">

                {/* Item Image */}
                <img className="rounded-lg h-80 w-24" src={item.image} alt="" />

                {/* Item Info Card */}
                <div>

                  {/* Item Name */}
                  <p className="font-bold">{item.name}</p>

                  {/* Item Category */}
                  <p className="text-sm font-semibold">{item.category}</p>

                  {/* Price & Quantity Card */}
                  <div className="flex gap-4 mt-2 items-center">

                    {/* Item Price */}
                    <p className="font-semibold text-md">{item.price}</p>

                    {/* Item Quantity */}
                    <div className="flex items-center border-1 border-r-0 border-color rounded">

                      {/* Item Minus Component */}
                      <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 "><AiOutlineMinus /></p>

                      {/* Item Quantity Number */}
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">1</p>

                      {/* Item Plus Component */}
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600"><AiOutlinePlus /></p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        ))}

        {/* Subtotal & Total Card */}
        <div className="mt-3 mb-3">

          {/* Subtotal Card */}
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>

          {/* Total Card */}
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>

        </div>

        {/* Place Order Card */}
        <div className="mt-5">

          {/* Place Order Button & props */}
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />

        </div>

      </div>

    </div>

  )

}

export default Cart;