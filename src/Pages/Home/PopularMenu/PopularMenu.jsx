import { data } from 'autoprefixer';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)})
    }, [])

    return (
       <section className='my-10 flex flex-col justify-center items-center'>
        <SectionTitle subHeading={"Check it out"} heading={"From Our Menu"}></SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {
                menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        <button className='border-b-4 border-black mt-12 rounded-lg py-1 px-5 uppercase'>View Full Menu</button>
       </section>
    );
};

export default PopularMenu;