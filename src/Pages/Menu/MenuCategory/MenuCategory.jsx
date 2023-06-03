import React from 'react';
import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, subTitle, bgImg }) => {
    return (
        <div>
            {title && <Cover bgImg={bgImg} title={title} subTitle={subTitle}></Cover>}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-16'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to={`/order/${title}`}>
                    <button className='uppercase border-b-4 border-black px-5 py-3 rounded-lg mb-10 hover:bg-black hover:text-white'>Order Your Favourite Food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;