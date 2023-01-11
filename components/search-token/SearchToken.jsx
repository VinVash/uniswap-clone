import React, { useState, useEffect } from "react";
import Image from "next/image";

// Internal imports
import Style from "./SearchToken.module.css";
import images from "../../assets";

const SearchToken = ({ openToken, tokens, tokenData }) => {
  // useState
  const [active, setActive] = useState(1);

  const coin = [
    {
      img: images.ether,
      name: "ETH",
    },
    {
      img: images.ether,
      name: "DAI",
    },
    {
      img: images.ether,
      name: "DOG",
    },
    {
      img: images.ether,
      name: "FUN",
    },
    {
      img: images.ether,
      name: "WETH9",
    },
    {
      img: images.ether,
      name: "UNI",
    },
    {
      img: images.ether,
      name: "TIME",
    },
    {
      img: images.ether,
      name: "LOO",
    },
    {
      img: images.ether,
      name: "OOO",
    },
    {
      img: images.ether,
      name: "HEY",
    },
  ];

  return (
    <div className={Style.Searchtoken}>
      <div className={Style.Searchtoken_box}>
        <div className={Style.Searchtoken_box_heading}>
          <h4>Select a token</h4>
          <Image
            src={images.close}
            width={50}
            height={50}
            onClick={() => openToken(false)}
          />
        </div>

        <div className={Style.Searchtoken_box_search}>
          <div className={Style.Searchtoken_box_search_img}>
            <Image src={images.search} alt="img" width={20} height={20} />
          </div>

          <input type="text" placeholder="Search name and paste the address" />
        </div>

        <div className={Style.Searchtoken_box_tokens}>
          {coin.map((el, i) => (
            <span
              key={i}
              className={active == i ? `${Style.active}` : ""}
              onClick={() => (
                setActive(i), tokens({ name: el.name, image: el.img })
              )}
            >
              <Image
                src={el.img || images.ether}
                alt="image"
                width={30}
                height={30}
              />
              {el.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchToken;
