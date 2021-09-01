import React from 'react';

//  Components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/ImageGrid';


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
            </div>
        </>
    );
};

export default RestaurantLayout;
