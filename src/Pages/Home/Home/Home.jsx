import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Chef from '../Chef/Chef';
import ContactBanner from '../ContactBanner/ContactBanner';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import SecondBanner from '../SecondBanner/SecondBanner';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <SecondBanner></SecondBanner>
            <PopularMenu></PopularMenu>
            <ContactBanner></ContactBanner>
            <Chef></Chef>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;