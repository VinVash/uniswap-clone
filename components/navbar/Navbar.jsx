import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

// Internal Imports
import Style from "./Navbar.module.css";
import images from "../../assets";
import { Model, TokenList } from "../index";

const Navbar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/",
    },
    {
      name: "Tokens",
      link: "/",
    },
    {
      name: "Pools",
      link: "/",
    },
  ];

  // useState
  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  const [account, setAccount] = useState(false);

  return (
    <div className={Style.Navbar}>
      <div className={Style.Navbar_box}>
        <div className={Style.Navbar_box_left}>
          {/* Logo Image */}
          <div className={Style.Navbar_box_left_img}>
            <Image src={images.uniswap} alt="logo" width={50} height={50} />
          </div>

          {/* Menu Items */}
          <div className={Style.Navbar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link
                key={i}
                href={{ pathname: `${el.name}`, query: `${el.link}` }}
              >
                <p className={Style.Navbar_box_left_menu_item}>{el.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Middle section */}
        <div className={Style.Navbar_box_middle}>
          <div className={Style.Navbar_box_middle_search}>
            <div className={Style.Navbar_box_middle_search_img}>
              <Image src={images.search} alt="search" width={20} height={20} />
            </div>

            {/* Input section */}
            <input type="text" placeholder="Search Tokens" />
          </div>
        </div>

        {/* Right section */}
        <div className={Style.Navbar_box_right}>
          <div className={Style.Navbar_box_right_box}>
            <div className={Style.Navbar_box_right_box_img}>
              <Image src={images.ether} alt="Network" height={30} width={30} />
            </div>
            <p>Network Name</p>
          </div>

          {account ? (
            <button onClick={() => setOpenModel(true)}>Connect</button>
          ) : (
            <button onClick={() => setOpenTokenBox(true)}>0x0000</button>
          )}

          {openModel && (
            <Model setOpenModel={setOpenModel} connectWallet="Connect" />
          )}
        </div>
      </div>

      {/* TokenList component */}
      {openTokenBox && (
        <TokenList tokenDate="hey" setOpenTokenBox={setOpenTokenBox} />
      )}
    </div>
  );
};

export default Navbar;
