import React, { useState } from 'react';


//  components
import DeliveryCarousal from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';



const Delivery = () => {

    const [ restaurantList, setRestaurantList ] = useState([
        {
            _id:123456,
            photos: [
                "https://b.zmtcdn.com/data/pictures/8/19698708/181ffb2678f4e075f863612d4522cb1d_o2_featured_v2.jpg?output-format=webp",
            ],
            name: "Raffaele's Ristorante Pizzeria",
            cuisine: ["Pizza", "Italian", "Beverages"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfdelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id:123456-2,
            photos: [
                "https://b.zmtcdn.com/data/pictures/6/19257266/f00da77a93539279c09b60992357afeb_o2_featured_v2.jpg?output-format=webp",
            ],
            name: "Magnolia Bakery",
            cuisine: ["Bakery", "Desserts"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfdelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id:123456-3,
            photos: [
                "https://b.zmtcdn.com/data/pictures/6/19257266/f00da77a93539279c09b60992357afeb_o2_featured_v2.jpg?output-format=webp",
            ],
            name: "Magnolia Bakery",
            cuisine: ["Bakery", "Desserts"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfdelivery: 47,
            restaurantReviewValue: 4.1,
        },
    ]);
    return (
        <>
            <DeliveryCarousal />
            {/* <Brand /> */}
            <div className="flex justify-between flex-wrap">
            {
                restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))
            }
            </div>
        </>
    );
};

export default Delivery;
