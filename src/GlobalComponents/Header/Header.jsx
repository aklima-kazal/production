import React, { useRef, useState } from "react";
import MenuData from "./MenuData";
import { Link } from "react-router";
import Container from "../GlobalContainer/Container";
import { GoChevronDown } from "react-icons/go";
import useClickOutside from "./DropDown";
import { RiMenuSearchFill } from "react-icons/ri";
import SideBar from "../SideBar/SideBar";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const clickOutside = useRef(null);
  const handleDropdownShow = () => {
    setShowDropdown(true);
  };
  useClickOutside(clickOutside, () => {
    setShowDropdown(false);
  });
  return (
    <>
      <Container>
        <div className="flex justify-center items-center w-full  md:pt-[40px]">
          <div
            onClick={() => setShowSidebar(true)}
            role="button"
            className="items-center justify-center absolute right-[50px] z-50 top-[98px] px-10 sm:block md:hidden"
          >
            <RiMenuSearchFill className="text-2xl  cursor-pointer w-12 h-12 text-white" />
          </div>
          <div ref={clickOutside} className="px-10 hidden md:block ">
            <ul className="flex space-x-[60px] relative z-50">
              {MenuData.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="font-bold flex font-roboto hover:text-[#FF5E3A] text-[14px] text-[#FFFFFF] items-center cursor-pointer"
                  >
                    <Link to={item.path}>{item.title}</Link>

                    {item.list && (
                      <GoChevronDown
                        role="button"
                        className="text-2xl ml-2 items-center cursor-pointer"
                        onClick={handleDropdownShow}
                      />
                    )}

                    {showDropdown ? (
                      <div className="top-12 mr-[480px] w-[200px] items-center z-50 absolute bg-white shadow-2xl rounded-[5px]">
                        {item.list && (
                          <ul className="p-5">
                            {item.list.map((item) => {
                              return (
                                <li
                                  key={item.id}
                                  className="font-bold mb-2 font-roboto text-[14px] hover:text-[#FF5E3A] cursor-pointer text-[#11121E] border-b border-b-amber-100 pb-3 last:mb-auto"
                                >
                                  <Link to={item.path}>{item.title}</Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
      <div>
        {showSidebar && (
          <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        )}
      </div>
    </>
  );
};

export default Header;
