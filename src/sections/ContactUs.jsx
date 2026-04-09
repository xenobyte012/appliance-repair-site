import React from "react";
import ourGoalsImage from '../images/hero-img.jpg'

function ContactUs() {
    const phoneNumber = "27704419275";

    const message = "Hello, I am interested in your service.";

    const encodedMessage = encodeURIComponent(message);
  return (
<>
    <section
      id="contact"
      className="bg-background-2 text-normal-text-2 py-10  px-4  text-center"
    >
      <div className="">
        <h1 className="text-4xl font-bold text-center pb-3 text-heading-2 leading-tight">
          Contact Us
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-center text-sub-heading-2 ">
          Ready to grow your business online? Contact us today to discuss your
          project.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 py-10">
        <div className="block md:hidden justify-left text-left pl-4">
          <div className="pb-4">
            <div className="text-xl font-semibold text-sub-heading-2">
              📞 Call Us
            </div>
            <div className="pl-4">
              <p> 070 441 9275</p>
            </div>
          </div>
          <div className="pb-4">
            <div className="text-xl font-semibold text-sub-heading-2">
              📧 Email Us
            </div>
            <div className="pl-4">
              <p>xenobyte012@gmail.com</p>
            </div>
          </div>
          <div>
            <div className="text-xl font-semibold text-sub-heading-2">
              Whatsapp Us
            </div>
            <div className="pl-4">
              <p>070 441 9275</p>
            </div>
            <div className="pb-4">
              <div className="pb-4 text-lg italic text-heading-2">
                Click here to start chatting on Whatsapp
              </div>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
                target="_blank"
                rel="nooper noreferrer"
                className="bg-blue-600 px-5 py-3 w-34 text-center items-center text-h3 text-white rounded-xl shadow-2xl ml-4 mb-6 hover:bg-blue-700 "
              >
                Let's chat
              </a>
            </div>
          </div>

          <div className="h-108 mt-4 overflow-hidden hidden md:block">
            <img loading="lazy"
              src={ourGoalsImage}
              alt="contact image"
              className="object-cover rounded-xl shadow-2xl h-full w-full"
            />
          </div>
        </div>
        <div className="ms:mx-100">
          <form className="bg-slate-700 m-4  md:w-100 rounded-xl p-8 flex flex-col text-normal-text-1text text-h3  min-h-4  shadow-2xl ">
            <span className="text-left text-heading-2 ">Name</span>
            <input
              type="text"
              name="user_name"
              placeholder="Full name"
              className="bg-secondary rounded-xl p-2 px-3 mb-4 ml-4 text-heading-2 border-none bg-slate-900 text-base leading-relaxed"
              required
            />
            <span className="text-left">Email</span>
            <input
              type="text"
              name="user_email"
              placeholder="youremail@gmail.com"
              className="bg-secondary rounded-xl p-2 px-3 mb-4 ml-4 text-heading-2 border-none bg-slate-900 text-base leading-relaxed"
              required
            />
            <span className="text-left">Phone Number</span>
            <input
              type="text"
              name="user_email"
              placeholder="e.g. 071 234 5678"
              className="bg-secondary rounded-xl p-2 px-3 mb-4 ml-4 text-heading-2 border-none bg-slate-900 text-base leading-relaxed"
              required
            />
            <span className="text-left">Message</span>
            <textarea
              type="massage"
              name="message"
              placeholder="Message:"
              className="bg-secondary ml-4 rounded-xl p-2 min-h-50 mb-4 text-heading-2 border-none bg-slate-900 text-base leading-relaxed "
              required
            ></textarea>
            <button
              type="submit"
              className="text-white  bg-blue-700 p-3 mt-4  rounded-xl hover:bg-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="text-left mt-2">
          <div className="hidden md:block">
            <div className="pb-4">
              <div className="text-xl font-semibold text-sub-heading-2">
                📞 Call Us
              </div>
              <div className="pl-4">
                <p> 070 441 9275</p>
              </div>
            </div>
            <div className="pb-4">
              <div className="text-xl font-semibold text-sub-heading-2">
                📧 Email Us
              </div>
              <div className="pl-4">
                <p>xenobyte012@gmail.com</p>
              </div>
            </div>
            <div>
              <div className="text-xl font-semibold text-sub-heading-2">
                Whatsapp Us
              </div>
              <div className="pl-4">
                <p>070 441 9275</p>
              </div>
              <div className="pb-4">
                <div className="pb-4 text-lg italic text-heading-2">
                  Click here to start chatting on Whatsapp
                </div>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
                  target="_blank"
                  rel="nooper noreferrer"
                  className="bg-blue-600 px-5 py-3 w-34 text-center items-center text-h3 text-white rounded-xl shadow-2xl ml-4 mb-6 hover:bg-blue-700 "
                >
                  Let's chat
                </a>
              </div>
            </div>

            <div className="h-87 w-140 mt-4 overflow-hidden hidden md:block">
              <img loading="lazy"
                src={ourGoalsImage}
                alt="contact image"
                className="object-cover rounded-xl shadow-2xl h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 px-6 bg-gray-100 text-center">

      
  <h2 className="text-3xl font-bold">Find Us</h2>
      
        <p className="mt-2 text-gray-600">
 
           Visit us or find our location on the map
        
        </p>

        
        <a
 href="https://maps.google.com"
        
           target="_blank"
 
           rel="noopener noreferrer"
        
           className="block mt-8"
>

           <div className="overflow-hidden rounded-xl shadow-lg">

          
     <iframe

                src="https://www.google.com/maps?q=-25.6544,27.2558&output=embed"

                className="w-full h-[300px] md:h-[400px]"

                loading="lazy"
>
               </iframe>

      
           </div>
      
        </a>

    
     </section>
</>
  );
}

export default ContactUs;
