import React, { useState } from "react";
import Navbar from "../component/Navbar";
import "./stylesd.css";

export default function Dashboard2() {
  return (
    // <--main div-->
    <div className="main">
      <Navbar />
      {/* ---first section--- */}
      <section className="">
        <div className="container ">
          <div className="px-10">
            <div className="grid-cols-3 grid ">
              {/* ---first column first box---*/}
              <div className="border  px-auto m-4 ">
                <div className="flex bg-gradient-to-tr from-blue-500 to-blue-800">
                  <div>
                    <img
                      src="./cat.png"
                      alt=""
                      className="rounded-xl w-20 mt-2 p-2 mr-2"
                      style={{filter:'brightness(0) invert(1)'}}
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
              </div>
              <div className="border  px-auto m-4 "></div>
              <div className="border  px-auto m-4 "></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
