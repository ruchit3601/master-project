import React from 'react'
import ReactStars from "react-rating-stars-component";
import { HiPlus } from "react-icons/hi"

const FoodItem = (props) => {
    return (
        <>
            <div className="flex items-start lg:gap-2 mt-2 ">
                <div className="lg:w-2/12 lg:h-34 md:h-26 md:w-28  w-full h-full p-2 lg:px-2">
                    <img 
                        src={props.image} 
                        alt="food"
                        className="w-full h-full rounded-lg" 
                    />
                </div>
                <div className="w-8/12 md:3/6 mt-2 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{props.title}</h3>
                        <button className=" md:hidden flex h-8 w-17 items-center font-bold text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg">
                            ADD <HiPlus className="mb-2" /> 
                        </button>
                    </div>
                    <ReactStars count={5} value={props.rating} />
                    <h5>₹{props.price}</h5>
                    <p className="truncate">{props.description}</p>
                </div>
                <div className="hidden md:block w-2/12 ">
                        <button className=" flex h-8 w-17 items-center font-bold text-zomato-400 bg-zomato-50 border border-zomato-400 px-4 py-2 rounded-lg">
                            ADD <HiPlus className="mb-2" />
                        </button>
                </div>
            </div>   
        </>
    )
}

export default FoodItem
