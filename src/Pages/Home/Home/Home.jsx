import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ContactBanner from '../ContactBanner/ContactBanner';
import PopularMenu from '../PopularMenu/PopularMenu';
import SecondBanner from '../SecondBanner/SecondBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <SecondBanner></SecondBanner>
            <PopularMenu></PopularMenu>
            <ContactBanner></ContactBanner>
        </div>
    );
};

export default Home;