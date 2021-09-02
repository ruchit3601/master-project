import React from 'react';
import { TiStarOutline } from "react-icons/ti"
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri"
import { BiBookmarkPlus } from "react-icons/bi"



//  Components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/ImageGrid';
import InfoButtons from '../Components/restaurant/InfoButtons';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';


const RestaurantLayout = () => {

    return (
        <>
            <RestaurantNavbar />
            <div className="container mx-auto px-4 lg:px-20">
                <ImageGrid images={[
                    "https://b.zmtcdn.com/data/pictures/4/50574/9410759d611db9c62c3acc23c1f27e06.jpg",
                    "https://b.zmtcdn.com/data/pictures/4/50574/9410759d611db9c62c3acc23c1f27e06.jpg",
                    "https://b.zmtcdn.com/data/pictures/4/50574/9410759d611db9c62c3acc23c1f27e06.jpg",
                    "https://b.zmtcdn.com/data/pictures/4/50574/9410759d611db9c62c3acc23c1f27e06.jpg",
                    "https://b.zmtcdn.com/data/pictures/4/50574/9410759d611db9c62c3acc23c1f27e06.jpg",
                    ]}
                />
                <RestaurantInfo 
                    name="KFC"
                    restaurantRating="3.6"
                    deliveryRating="3.5"
                    cuisine="Burger, Fast Food, Beverages, Desserts"
                    address="Brigade Road, Bangalore"
                />
                <div className="my-4 flex flex-wrap gap-3">
                    <InfoButtons isActive>
                        <TiStarOutline /> Add Review
                    </InfoButtons>
                    <InfoButtons>
                        <RiDirectionLine /> Direction
                    </InfoButtons>
                    <InfoButtons>
                        <BiBookmarkPlus /> Bookmark
                    </InfoButtons>
                    <InfoButtons>
                        <RiShareForwardLine /> Share
                    </InfoButtons>
                </div>
            </div>
        </>
    );
};

export default RestaurantLayout;
