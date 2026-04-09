import React, { useRef } from "react";
import img_1 from "../images/test-1 (3).jpg";
import gallary_1 from "../images/test-1 (2).jpg";
import gallary_2 from "../images/test-1 (2).jpg";
import gallary_3 from "../images/test-1 (2).jpg";
import gallary_4 from "../images/test-1 (2).jpg";
import gallary_5 from "../images/test-1 (2).jpg";
import gallary_6 from "../images/test-1 (2).jpg";

export default function Gallary() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Gallary</h1>
        <p className="mt-2 text-gray-700">
          Take a look at some of our recent plumbing work
        </p>
      </div>
      <div className="relative mt-10">
        <button
          onClick={scrollLeft}
          className=" md:fex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full z-10 overflow-x-auto
                    scrollbar-none"
        >
          👈
        </button>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          <img
            src={gallary_1}
            alt="work"
            className="w-[370px] h-[400px] ojectt-cover rounded-xl flex-shrink-0"
          />
          <img
            src={gallary_2}
            alt="work"
            className="w-[370px] h-[400px] ojectt-cover rounded-xl flex-shrink-0"
          />
          <img
            src={gallary_3}
            alt="work"
            className="w-[370px] h-[400px] ojectt-cover rounded-xl flex-shrink-0"
          />
          <img
            src={gallary_4}
            alt="work"
            className="w-[370px] h-[400px] ojectt-cover rounded-xl flex-shrink-0"
          />
          <img
            src={gallary_5}
            alt="work"
            className="w-[370px] h-[400px] ojectt-cover rounded-xl flex-shrink-0"
          />
          <img
            src={gallary_6}
            alt="work"
            className="w-[370px] h-[400px] ojectt-cover rounded-xl flex-shrink-0"
          />
        </div>
        <button
          onClick={scrollRight}
          className=" md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full z-10"
        >
          👉
        </button>
      </div>
    </section>
  );
}
