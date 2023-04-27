import React, { useState } from 'react';
import ESearchContent from './ESearchContent';
import VenuesContent from './VenuesContent';

const BarMenu = () => {
  const [isESearch, setIsESearch] = useState(true);
  const [isVenues, setIsVenues] = useState(false);

  const handleClickESearch = () => {
    setIsESearch(true);
    setIsVenues(false);
  };

  const handleClickVenues = () => {
    setIsVenues(true);
    setIsESearch(false);
  };

  const borderStyleESearch = isESearch
    ? `border-x-2 border-t-[2px] border-[#3A9BD5] text-[#3A9BD5]`
    : `before:content-[''] 
      before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px]
       before:bg-[#3A9BD5]`;

  const borderStyleVenues = isVenues
    ? `border-x-2 border-t-[2px] border-[#3A9BD5] text-[#3A9BD5]`
    : `before:content-[''] 
      before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px]
       before:bg-[#3A9BD5]`;

  return (
    <div className="mt-4 ">
      <ul className="grid grid-cols-6 text-center m-auto text-[17px]">
        <li
          className="py-4 relative before:content-[''] 
        before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-[#3A9BD5] "></li>
        <li
          onClick={handleClickESearch}
          className={`py-4 relative cursor-pointer ${borderStyleESearch}`}>
          ESearch
        </li>

        <li
          onClick={handleClickVenues}
          className={`py-4 relative cursor-pointer ${borderStyleVenues}`}>
          Venues
        </li>
        <li
          className="py-4 relative before:content-[''] 
        before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-[#3A9BD5] "></li>
        <li
          className="py-4 relative before:content-[''] 
        before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-[#3A9BD5] "></li>
        <li
          className="py-4 relative before:content-[''] 
        before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-[#3A9BD5] "></li>
      </ul>
      {isESearch === true ? (
        <div>
          <ESearchContent />
        </div>
      ) : (
        <div>
          <VenuesContent />
        </div>
      )}
    </div>
  );
};

export default BarMenu;
