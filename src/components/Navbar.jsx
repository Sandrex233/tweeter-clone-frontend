import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Logo from "../assets/devchallenges.svg";
import { ProfileDropdown } from "./Profile/ProfileDropdown";
import defaultAvatar from "../assets/avatar-default.svg";


const Navbar = ({ logout, setComponentToShow, data }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const imageUrl = `data:image/jpeg;base64, ${data.imageData}`;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between flex-row items-center pl-[1rem] pr-[1rem] sm:pl-[3rem] sm:pr-[3rem] lg:px-40 py-5">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="flex-shrink-0" />
      </div>

      <div
        className="flex items-center flex-row space-x-2 cursor-pointer select-none"
        onClick={toggleDropdown}
      >
        {data.imageData ? (
          <img
            src={imageUrl}
            alt="User Avatar"
            className="border w-[4.5rem] h-[4.5rem] rounded-lg"
          />
        ) : (
          <img
            src={defaultAvatar}
            alt="User Avatar"
            className="border w-[4.5rem] h-[4.5rem] rounded-lg"
          />
        )}
        <p>{data.name}</p>
        {!isDropdownOpen ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
      </div>
      {isDropdownOpen && <ProfileDropdown logout={logout} setComponentToShow={setComponentToShow} />}
    </div>
  );
};

export default Navbar;
