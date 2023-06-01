import { data } from 'autoprefixer';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {

    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)})
    // }, [])

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
       <section className='mb-12 flex flex-col justify-center items-center'>
        <SectionTitle subHeading={"Check it out"} heading={"From Our Menu"}></SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {
                popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
        <button className='border-b-4 border-black mt-12 rounded-lg py-3 px-5 uppercase hover:bg-black hover:text-white'>View Full Menu</button>
       </section>
    );
};

export default PopularMenu;