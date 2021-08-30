import React from 'react';
import Slider from "react-slick";

//  components
import DeliveryCategory from './DeliveryCategory';
import { NextArrow, PrevArrow } from '../CarousalArrow';


const DeliveryCarousal = () => {

    const categories = [
        {
            image: "https://b.zmtcdn.com/data/dish_images/5f1305ff860aeebffbca92ea1d8d1cf31612436209.png",
            title: "Idli",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/9c179e4b2beb3b5e026346f946e502931613232962.png",
            title: "Vada",
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/51ddb8a2227b36f36b74c4ea3c26823a.png",
            title: "Paratha",
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/4a04890400b5d7bac101baace5d7e994.png",
            title: "Sandwich",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/3465163d7c0116df60868ec57cf9ae661612436486.png",
            title: "Tea",
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/2/a088e152c3e73c663158206c5e622981.png",
            title: "Coffee",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/90c41184dfa02a8b9b6550f2295d85781620888404.png",
            title: "Juices",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/17c690ce29f5e0cadf953fea3d8a0de91612438781.png",
            title: "Poha",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/67233c2f0fd6c2cb66f08bdcdb32b7bc1612438793.png",
            title: "Pancake",
        },
    ];

    const settings ={
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        SliderToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <h1 className="text-xl mb-4 font-semibold">Inspiration for your first order</h1>
            <div className="lg:hidden flex flex-wrap gap-3 lg:gap-0 justify-between">
                {
                    categories.map((food) => (
                        <DeliveryCategory {...food} />
                    ))
                }
            </div>
            <div className="hidden lg:block">
                <Slider {...settings}>
                {
                    categories.map((food) => (
                        <DeliveryCategory {...food} />
                    ))
                }
                </Slider>
            </div>
        </>
    );
};

export default DeliveryCarousal;
