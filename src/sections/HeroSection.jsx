import React from 'react'
import heroImage from '../images/hero-img.jpg'

function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    })
  }
  return (
    <section
      id="home"
      className=" relative t-14 bg-gradient-to-r from-blue-800 to-slate-800 flex flex-col text-white min-h-[100vh] "
    >
      <div className="block md:hidden  ">
        <img
          loading="lazy"
          src={heroImage}
          alt="hero image"
          className="w-full  object-cover min-h-[100vh]"
        />
        <div className="absolute top-1/4 h-full left-10 w-8/10 flex flex-col justify-left ">
          <div className="text-6xl text-white font-bold leading-tight">
            Fast and Appliance Repair Near You
          </div>
          <div className=" text-gray-100 text-xl font-medium leading-relaxed pt-5">
            Same day service all mojor brand Affordable pricing.
          </div>
        </div>
        <div>
          <div className="absolute w-full bottom-10 px-10 left-1/2 -translate-x-1/2 flex   flex-col gap-4">
            <button
              onClick={scrollToContact}
              className="bg-red-600 rounded-4xl py-4 px-8 text-xl  "
            >
              Call Now
            </button>
            <button
              onClick={scrollToContact}
              className="bg-amber-600 rounded-4xl py-4 px-8 text-xl "
            >
              📞Whatsapp Us
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block top-14 pt-15">
        <img
          src={heroImage}
          alt="hero image"
          className="w-full  object-cover h-180"
        />
        <div className="absolute top-50 h-full left-10 w-1/2 flex flex-col justify-left ">
          <div className="text-6xl text-white font-bold leading-tight">
            Fast and Appliance Repair Near You
          </div>
          <div className=" text-sub-heading-2 text-xl font-medium leading-relaxed pt-5">
            Affordable, high‑quality tutoring that builds confidence, sharpens
            skills, and turns “I can’t” into “I did.”
          </div>
          <div className="text-xl text-center pt-15 ">
            ⭐ 98% of parents recommend us | 200+ students supported
          </div>
        </div>
        <div>
          <div className="absolute bottom-10 l w-full flex justify-center ">
            <button
              onClick={scrollToContact}
              className="bg-amber-600 rounded-4xl py-4 px-12 text-xl "
            >
              Call Now
            </button>
            <button
              onClick={scrollToContact}
              className="bg-amber-600 rounded-4xl py-4 px-12 text-xl "
            >
              📞Whatsapp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection