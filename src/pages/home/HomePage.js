import React from 'react';
import ControlledCarousel from '../../components/Slider';
import { Card } from '../../components/Card';
import { Popular } from '../../components/Popular';
import { Offers } from '../../components/Offers';
import { NewCollection } from '../../components/NewCollection';
// import { Cart } from '../../components/Cart';



const HomePage = () => {
    return (
        <div>
            {/* <Cart/> */}
            <ControlledCarousel/>
            <Card/>
            <Popular/>
            <Offers/>
            <NewCollection/>
        
        </div>
    );
};

export default HomePage;