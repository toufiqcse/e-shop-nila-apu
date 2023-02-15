import React from 'react';
import Banner from '../../../components/Banner/Banner';
import Card from '../../../components/Card/Card';
import FashionBanner from '../../../components/FashionBanner/FashionBanner';
import NewFeature from '../../../components/Feature/NewFeature';
import FlashProduct from '../../../components/FlashProduct/FlashProduct';
import Introduce from '../../../components/Introduce/Introduce';
import Marquee from '../../../components/Marquee/Marquee';
import ShopCard from '../../../components/ShopCard/ShopCard';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Card/>
            <ShopCard></ShopCard>
            <NewFeature></NewFeature>
            <Introduce></Introduce>
            <FlashProduct></FlashProduct>
            <Marquee></Marquee>
            <FashionBanner></FashionBanner>
        </div>
    );
};

export default Home;