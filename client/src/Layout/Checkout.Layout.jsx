import React from 'react'

//  Components
import Navbar from '../Components/Navbar/checkoutNavbar';

const CheckoutLayout = (props) => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 md:px-20">
                {props.children}
            </div>
        </>
    )
}

export default CheckoutLayout;
