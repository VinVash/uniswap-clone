import React, { useState, useEffect } from "react";
import Image from "next/image";

// Internal imports
import Style from "./Model.module.css";
import images from "../../assets";

const Model = ({ setOpenModel, connectWallet }) => {
  // useState
  const walletMenu = ["Metamask", "Coinbase", "Wallet", "WalletConnect"];

  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_heading}>
          <p>Connect a wallet</p>
          <div className={Style.Model_box_heading_img}>
            <Image
              src={images.close}
              alt="logo"
              height={50}
              onClick={() => setOpenModel(false)}
            />
          </div>
        </div>

        <div className={Style.Model_box_wallet}>
          {walletMenu.map((el, i) => (
            <p key={i} onClick={() => connectWallet()}>
              {el}
            </p>
          ))}
        </div>

        <p className={Style.Model_box_para}>
          By connecting a wallet, you agree to Uniswap Labs' terms and
          conditions and consent to its Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Model;
