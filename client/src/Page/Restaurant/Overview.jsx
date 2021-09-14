import React from 'react'
import { Link, useParams } from "react-router-dom"
import { IoMdArrowDropright } from "react-icons/io"
import { MdContentCopy } from "react-icons/md"
import { FaDirections } from "react-icons/fa"
import Slider from 'react-slick';
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


//  Component
import MenuCollection from '../../Components/restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../Components/restaurant/MenuSimilarRestaurantCard';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';
import ReviewCard from '../../Components/restaurant/Reviews/reviewCard';
import Mapview from '../../Components/restaurant/Mapview'



const Overview = () => {
    const { id } = useParams();
    const settings ={
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        SliderToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-8/12">
                    <h2 className="font-semibold text-lg md:text-2xl my-4">About this place</h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-zomato-400">
                                See all menus <IoMdArrowDropright />
                            </span>
                        </Link>
                    </div>
                        <div className="flex flex-wrap gap-3 my-4">
                            <MenuCollection 
                                menuTitle="Menu"
                                pages="3"
                                image={[
                                    "https://b.zmtcdn.com/data/menus/574/50574/3821d94dd9b5bb166934a5704ccc5c6c.jpg",
                                    "https://b.zmtcdn.com/data/menus/574/50574/3821d94dd9b5bb166934a5704ccc5c6c.jpg",
                                    "https://b.zmtcdn.com/data/menus/574/50574/3821d94dd9b5bb166934a5704ccc5c6c.jpg",
                                ]}
                            />
                    </div>
                    <h4 className="text-2xl font-normal my-4">Cuisines</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="border border-gray-400 text-blue-600 px-2 py-1 rounded-full">Burger</span>
                        <span className="border border-gray-400 text-blue-600 px-2 py-1 rounded-full">Fast Food</span>
                        <span className="border border-gray-400 text-blue-600 px-2 py-1 rounded-full">Beverages</span>
                        <span className="border border-gray-400 text-blue-600 px-2 py-1 rounded-full">Desserts</span>

                    </div>
                    <div className="my-4">
                        <h4 className="text-2xl font-normal">Average Cost</h4>
                        <h6>₹250 for one order (approx.)</h6>
                        <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                    </div>
                    <div className="my-4">
                        <h4 className="text-2xl font-normal">Similar Restaurants</h4>
                        <Slider {...settings}>
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/4/50674/14a1efab6820232e70c0ab3977eea12e_featured_v2.jpg?output-format=webp"
                                title="McDonald's"
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/4/50674/14a1efab6820232e70c0ab3977eea12e_featured_v2.jpg?output-format=webp"
                                title="McDonald's"
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/4/50674/14a1efab6820232e70c0ab3977eea12e_featured_v2.jpg?output-format=webp"
                                title="McDonald's"
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/4/50674/14a1efab6820232e70c0ab3977eea12e_featured_v2.jpg?output-format=webp"
                                title="McDonald's"
                            />
                        </Slider>
                    </div>
                    <div className="my-4">
                        <h4 className="text-2xl font-normal">Rate your experience for</h4>
                        <div class="mt-2 flex items-center text-xl">
                            <label class="inline-flex items-center">
                                <input type="radio" className="form-radio text-zomato-400" name="radio-colors" checked/>
                                <span class="ml-2">Dining</span>
                            </label>
                            <label class="inline-flex items-center md:ml-6">
                                <input type="radio" className="form-radio ml-40  text-zomato-400" name="radio-colors"  />
                                <span class="ml-2">Delivery</span>
                            </label>
                        </div>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            />
                    </div>
                    <div className="my-4 w-full md:hidden flex flex-col gap-4">
                        <Mapview 
                            phno="+919900894453"
                            title="KFC" 
                            mapLocation={[12.96998, 77.60989]}
                            address="4th Floor, Garuda Mall, Magrath Road, Near Brigade Road, Bangalore"
                        />
                    </div>
                    <div className="my-4 flex flex-col gap-1">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
                <aside 
                    style={{ height: "fit-content" }}
                    className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex-col gap-4">
                        <Mapview 
                            phno="+919900894453"
                            title="KFC" 
                            mapLocation={[12.96998, 77.60989]}
                            address="4th Floor, Garuda Mall, Magrath Road, Near Brigde Road, Bangalore"
                        />
                </aside>          
            </div>  
        </>
    )
}

export default Overview
