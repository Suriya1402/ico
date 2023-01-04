import React from "react";

export default function Navbar() {
  return (
    <div className="p-3 bg-blue-800 ">
      <div className=" container pr-24 pl-12  flex text-lg ">
        <img src="./cat.png" alt="" className="w-20" />
        <h2 className="text-white font-sans text-3xl pt-1">Cat Coin</h2>
        <button className="ml-auto hover:bg-gradient-to-r from-pink-400 to-purple-700 text-white border rounded-full px-5 py-2 ">Connect Wallet</button>
      </div>
    </div>
  );
}
