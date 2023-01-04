import React, { useState } from "react";
import Navbar from "../component/Navbar";
import "./stylesd.css";

export default function Dashboard() {
  return (
    <div className="">
      <Navbar />
      <div className="flex  mt-4 px-36">
        <div className="w-1/4 ">
          <div className="gradient p-4 rounded-md">
            <div className="flex">
              <div>
                <img
                  src="./catlogo.png"
                  alt=""
                  className="rounded-xl w-16 mt-2 p-2 mr-2"
                />{" "}
              </div>
              <div>
                <h4 className="text-cyan-400  text-lg font-semibold">
                  Token Balance
                </h4>
                <h3 className="text-white font-medium text-2xl">
                  1,80,000 CAT
                </h3>
              </div>
            </div>
            <div className="flex py-3">
              <div className="">
                <img src="./eth.png" alt="" className="w-14 mt-2 rounded-xl" />
              </div>
              <div className="">
                <p className="text-base font-normal pl-4 text-cyan-400">
                  Your Contribuition
                </p>
                <p className="text-white pl-4 font-normal">1 CAT = 0.01 ETH</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 text-blue-600">
          <div className="p-3 border pt-4 py-3  bg-gradient-to-r from-pink-400 to-purple-600 rounded text-left mx-3">
            <div className="px-20 ">
              <img src="./cat.png" alt="" className="w-20" />
            </div>
            <div className="px-16 pt-2 pb-1  text-2xl font-semibold text-gray-400">
              <h3 className="">1 ETH = 100 CAT</h3>
            </div>
            <div className="px-16 pt-2 pb-3 text-2xl font-semibold text-gray-400">
              <h4 className="">1 ETH = 12 laks</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
