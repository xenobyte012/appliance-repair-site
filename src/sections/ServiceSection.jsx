import React from "react";
import ourGoalsImage from "../images/ct (2).jpg";

const features = [
  {
    title: "Proven Results",
    icon: "😁",
    description:
      "We’ve proudly maintained a 100% pass rate for the past 3 years, helping students achieve academic success with confidence.",
  },
  {
    title: "Inclusive Learning Environment",
    icon: "😁",
    description:
      "We support every learner, ensuring lessons are clear, engaging, and suited to different learning styles.",
  },
  {
    title: "Experienced & Qualified Tutor",
    icon: "😁",
    description:
      "Our tutor is highly trained with extensive experience, focused on delivering results and simplifying complex topics.",
  },
  {
    title: "Exam-Focused Preparation",
    icon: "😁",
    description:
      "We prepare students specifically for exams using proven strategies, past papers, and targeted revision techniques.",
  },
  {
    title: "CAPS & ATP Aligned Content",
    icon: "😁",
    description:
      "All lessons follow the official CAPS and Annual Teaching Plan (ATP), ensuring students stay aligned with school curriculum.",
  },
  {
    title: "Dedicated Time & Attention",
    icon: "😁",
    description:
      "We allocate enough time per lesson to ensure full understanding — no rushing no confusion.",
  },
];
function ServiceSection() {
  return (
    <section className="bg-background-2 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Appliance Repair Service
        </h2>
        {/* Subheading 
        <p className="text-gray-300 max-w-2xl mx-auto">
          Helping students succeed with structured, high-quality tutoring that
          delivers real results.
        </p>
        */}
      </div>
      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105
                        transition-transform duration-300 border border-slate-700 "
          >
            {/* Icon <CheckCircle className="text-green-400 mb-4" size={28} />*/}

            {/* Title */}

            <div className="flex flex-row text-center  justify-left gap-1">
              <div className="text-2xl  ">
                {feature.icon}
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
