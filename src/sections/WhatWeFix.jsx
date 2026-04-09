import React from "react";
import samsung from "../images/samsung-1.jpg";
import gaggenau from "../images/gaggenau-1.jpg";
import lieberr from "../images/liebherr-1.jpg";
import miele from "../images/miele-1.jpg";
import siemens from "../images/siemens-1.jpg";
import smeg from "../images/smeg-1.jpg";
import speedqueen from "../images/speed-queen-1.jpg";
import whirlpool from "../images/whirlpool-1.jpg";

function WhatWeFix() {
  return (
    <section className="bg-background-2 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-4 text-heading-text-2 leading-tight pb-10 ">
          We Fix All Major Brands
        </h2>
        <div className=" flex flex-wrap justify-start">
          <div className="h-14">
            <img
              src={samsung}
              alt="samsung image"
              className="h-full w-30  object-cover  rounded-2xl border-2 border-slate-950"
            />
          </div>
          <div className="h-14">
            <img
              src={gaggenau}
              alt="samsung image"
              className="h-full w-30  object-cover  rounded-2xl border-2 border-slate-950"
            />
          </div>
          <div className="h-14">
            <img
              src={lieberr}
              alt="samsung image"
              className="h-full w-30  object-cover  rounded-2xl border-2 border-slate-950"
            />
          </div>
          <div className="h-14">
            <img
              src={miele}
              alt="samsung image"
              className="h-full w-30  object-cover  rounded-2xl border-2 border-slate-950"
            />
          </div>
          <div className="h-14">
            <img
              src={smeg}
              alt="samsung image"
              className="h-full w-30  object-cover  rounded-2xl border-2 border-slate-950"
            />
          </div>
          <div className="h-14">
            <img
              src={speedqueen}
              alt="samsung image"
              className="h-full w-30  object-cover  rounded-2xl border-2 border-slate-950"
            />
          </div>
          <div className="h-14">
            <img
              src={whirlpool}
              alt="samsung image"
              className="h-full w-30  object-cover  rounded-2xl border-2 border-slate-950"
            />
          </div>
          <div className="h-1">
            <img
              src={siemens}
              alt="samsung image"
              className="h-full w-30   object-cover  rounded-3xl border-2 border-slate-950"
            />
          </div>
        </div>
        <div className="h-1">
          <img
            src={siemens}
            alt="samsung image"
            className="h-full w-30   object-cover  rounded-3xl border-2 border-slate-950"
          />
        </div>
      </div>
    </section>
  );
}

export default WhatWeFix;
