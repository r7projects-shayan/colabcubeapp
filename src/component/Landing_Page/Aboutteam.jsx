import React from "react";

const contributor = [
  {
    url: "https://images.unsplash.com/photo-1544502062-f82887f03d1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxtYW4lMjBzaWxob3VldHRlfGVufDB8MHwwfHx8MA%3D%3D",
    title: "Shayan Chakraborty",
    text: "FullStack Developer, Founder",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661927982818-9f7ea45c45ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwc2lsaG91ZXR0ZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Noman Mazhar",
    text: "AIML Developer, Generative AI Specialist",
  },
 
];
const AboutTeam = () => {
  return (
    <div className="team-main">
      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj text-center mb-10">
              Meet the Team
            </p>
            <p className="text-lg text-gray-500 text-center mb-20">
              These people work on making our product best.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full ">
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://images.unsplash.com/photo-1544502062-f82887f03d1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxtYW4lMjBzaWxob3VldHRlfGVufDB8MHwwfHx8MA%3D%3D"
                  alt="Shayan "
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Shayan Chakraborty
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                FullStack Developer, Founder
              </span>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTeam;
