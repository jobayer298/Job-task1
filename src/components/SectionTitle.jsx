import React from 'react';

const SectionTitle = ({heading, subheading}) => {
    return (
      <div className="text-black font-bold text-center">
        <h1>{heading}</h1>
        <p className='md:w-[802px] mx-auto my-4'>{subheading}</p>
      </div>
    );
};

export default SectionTitle;