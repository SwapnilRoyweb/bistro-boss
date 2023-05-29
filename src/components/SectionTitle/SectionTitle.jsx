import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center my-10 md:w-4/12'>
            <p className='text-yellow-500 mb-3'>---{subHeading}---</p>
            <h3 className='text-3xl uppercase border-y-4 py-3'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;