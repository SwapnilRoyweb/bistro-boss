import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover bgImg={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover bgImg={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover bgImg={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;