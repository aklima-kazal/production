import React, { useRef, useState } from "react";
import { GiCrossedBones } from "react-icons/gi";
import MenuData from "../Header/MenuData";
import { Link } from "react-router";
import { GoChevronDown } from "react-icons/go";
import useClickOutside from "../Header/DropDown";

const SideBar = ({ setShowSidebar, showSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const clickOutside = useRef(null);

  const handleDropdownShow = () => {
    setShowDropdown(true);
  };
  useClickOutside(useClickOutside, () => {
    setShowDropdown(false);
  });

  return (
    <>
      <div className="w-[240px] p-4 bg-slate-50 shadow-[0px_2px_5px_0px] shadow-gray-800 h-[70vh] leading-0 absolute z-9999 top-[100px] md:hidden block left-[34%]">
        <div
          className="flex justify-end "
          role="button"
          onClick={() => setShowSidebar(false)}
        >
          <GiCrossedBones className="text-2xl cursor-pointer w-8 h-8 text-rose-950" />
        </div>
        <div>
          <div className="">
            <ul
              ref={clickOutside}
              className="flex flex-col space-y-[60px] absolute z-50 mt-[50px] ml-[50px] "
            >
              {MenuData.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="font-bold flex font-roboto hover:text-[#FF5E3A] text-[14px] text-black items-center "
                  >
                    <Link to={item.path}>{item.title}</Link>

                    {item.list && (
                      <GoChevronDown
                        role="button"
                        className="text-2xl ml-2 items-center cursor-pointer r"
                        onClick={handleDropdownShow}
                      />
                    )}

                    {showDropdown ? (
                      <div
                        ref={clickOutside}
                        className="top-[280px] mr-[480px] w-[200px] items-center z-50 absolute bg-white shadow-2xl rounded-[5px]"
                      >
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
      </div>
    </>
  );
};

export default SideBar;
