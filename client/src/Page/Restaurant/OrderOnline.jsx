import React from 'react'
import { RiCompass3Line } from "react-icons/ri";
import { MdAccessTime } from "react-icons/md"

//  component
import FloatMenuBtn from '../../Components/restaurant/Order-Online/FloatMenuBtn'
import MenuListContainer from '../../Components/restaurant/Order-Online/MenuListContainer'
import FoodItem from '../../Components/restaurant/Order-Online/FoodItem';


const OrderOnline = (props) => {
    return (
        <>
            <div className="w-full flex">
                <aside className="hidden md:flex mr-3 flex-col gap-3 border-r-2 border-gray-300 overflow-y-scroll h-screen w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>
                <div className="w-full md:w-3/4">
                    <h2 className="text-xl font-semibold">Order Online</h2>
                    <h4 className="flex items-center gap-2 font-light text-gray-500">
                        <RiCompass3Line /> Live track your order | <MdAccessTime /> 43 min
                    </h4>

                    <section>
                        <FoodItem 
                            image="https://b.zmtcdn.com/data/dish_photos/f3b/68853ca3fac35a5a7c76d74fc945ff3b.jpg?"
                            price="1000"
                            rating={3}
                            description="Save 33% with our best-seller bucket of 4pc Hot & crispy chicken, 6 Hot Wings, 4 chicken strips , 3 Dips & a chilled Pepsi PET [serves 2-3 ]"
                            title="Ultimate Savings Bucket"
                        />
                    </section>
                </div>
            </div> 
            <FloatMenuBtn />
        </>
    )
}

export default OrderOnline
