import React from 'react'
import image_1 from '../images/image-1.webp'
import image_2 from "../images/image-2.webp";
import profileImage_1 from '../images/profile-picture.jpg'
import star from '../images/star.webp'
import googleImage from '../images/google-image.webp'

function Testimonials() {
  const data = [
    {
      name: "Temoso M. Parent",
      review:
        "“My daughter went from dreading math to actually asking for extra problems. The tutors are patient and make learning fun.”",
      profilePicture: profileImage_1,
      date: "2 week ago ",
    },
    {
      name: "Temoso L. Grade 12 Student",
      review:
        "“I finally understand physics thanks to this academy. My grades went from a 4 to an 7 in one Term!”",
      profilePicture: profileImage_1,
      date: "1 month ago",
    },
    {
      name: " Boitumelo R.  Grade 11 Student",
      review:
        "“The one‑on‑one attention made all the difference. I feel confident going into exams now.”",
      profilePicture: profileImage_1,
      date: "4 months ago",
    },
  ];



  return (
    <section className="bg-slate-100 flex flex-col justify-center text-center  py-10">
      <div className="justify-center flex flex-col">
        <h1 className="text-heading-1 leading-tight text-center text-4xl font-bold  px-6">
          What Our Client have to say
        </h1>
        <p className=" max-w-2xl mx-auto text-center text-sub-heading-1  pt-4 px-6">
          business looks professional, loads fast, and helped us
        </p>
      </div>

      <div className="pt-10 flex px-4 md:flex-row flex-col gap-6 justify-center mx-auto">
        {data.map((data, index) => (
          <div className="flex flex-col text-base  w-90 text-left shadow-2xl rounded-2xl p-4 relative bg-background-1 border border-gray-300">
            <div className="flex flex-row gap-4 pb-3">
              <div>
                <img
                  alt="profile picture"
                  loading="lazy"
                  key={index}
                  src={data.profilePicture}
                  className="object-cover w-12 h-12 rounded-full "
                />
              </div>
              <div>
                <div className="flex flex-row justify-between gap-8 align-center items-center ">
                  <div
                    className="font-semibold text-sub-heading-1 text-lg w-60"
                    key={index}
                  >
                    Name: <span className="text-gray-700">{data.name}</span>
                  </div>
                </div>

                <div className="text-gray-600 ">{data.date}</div>
              </div>
            </div>
            <div className="flex flex-row gap-1 pb-3">
              <img
                alt="star image"
                loading="lazy"
                src={star}
                className="w-4 h-4"
              />
              <img
                alt="star image"
                loading="lazy"
                src={star}
                className="w-4 h-4"
              />
              <img
                alt="star image"
                loading="lazy"
                src={star}
                className="w-4 h-4"
              />
              <img
                alt="star image"
                loading="lazy"
                src={star}
                className="w-4 h-4"
              />
              <img
                alt="star image"
                loading="lazy"
                src={star}
                className="w-4 h-4"
              />
            </div>
            <div>
              <p
                className="wrap-break leading-relaxed  text-normal-text-1"
                key={index}
              >
                {data.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials