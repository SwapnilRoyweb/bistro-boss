import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import SecondBanner from '../SecondBanner/SecondBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <SecondBanner></SecondBanner>
        </div>
    );
};

export default Home;