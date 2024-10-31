import React from "react";

const contributor = [
  {
    url: "https://images.unsplash.com/photo-1544502062-f82887f03d1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxtYW4lMjBzaWxob3VldHRlfGVufDB8MHwwfHx8MA%3D%3D",
    title: "Shayan Chakraborty",
    text: "FullStack Developer, Founder",
  },
  {
    url: "https://images.unsplash.com/photo-1707025204723-27d332fc36ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbiUyMHNpbGhvdWV0dGV8ZW58MHx8MHx8fDA%3D",
    title: "Diwakar Mainali",
    text: "CEO",
  },
  {
    url: "https://images.unsplash.com/photo-1646815211206-fd63cefe10d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwc2lsaG91ZXR0ZXxlbnwwfDB8MHx8fDA%3D",
    title: "Ayesha Virk",
    text: "Backend Developer, Tech Lead",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1710516467061-34638f713abe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHdvbWFuJTIwc2lsaG91ZXR0ZXxlbnwwfDB8MHx8fDA%3D",
    title: "Anwesha Das",
    text: "Frontend Lead, FullStack Developer",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661927982818-9f7ea45c45ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwc2lsaG91ZXR0ZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Noman Mazhar",
    text: "AIML Developer, Generative AI Specialist",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1664461663120-b39152ba92ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHdvbWFuJTIwc2lsaG91ZXR0ZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Apurva Kanth",
    text: "Frontend Developer",
  },
  {
    url: "https://images.unsplash.com/photo-1629997383348-4cafdec32fd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMHNpbGhvdWV0dGV8ZW58MHwwfDB8fHww",
    title: "William Ikeji",
    text: "Blockchain Developer, Web3 Lead",
  },
  {
    url: "https://images.unsplash.com/photo-1666834621175-7fbb2b180a52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMHNpbGhvdWV0dGV8ZW58MHwwfDB8fHww",
    title: "Ayobami Alaran",
    text: "Senior Backend Engineer",
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
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://images.unsplash.com/photo-1707025204723-27d332fc36ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbiUyMHNpbGhvdWV0dGV8ZW58MHx8MHx8fDA%3D"
                  alt="Diwakar image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Diwakar Mainali
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                CEO
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://images.unsplash.com/photo-1646815211206-fd63cefe10d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwc2lsaG91ZXR0ZXxlbnwwfDB8MHx8fDA%3D"
                  alt="Ayesha image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Ayesha Virk
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Backend Developer, Tech Lead
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://plus.unsplash.com/premium_photo-1710516467061-34638f713abe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHdvbWFuJTIwc2lsaG91ZXR0ZXxlbnwwfDB8MHx8fDA%3D"
                  alt="Anwesha image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Anwesha Das
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Frontend Lead, FullStack Developer
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661927982818-9f7ea45c45ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwc2lsaG91ZXR0ZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Noman image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Noman Mazhar
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                AIML Developer, Generative AI Specialist
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664461663120-b39152ba92ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHdvbWFuJTIwc2lsaG91ZXR0ZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Apurva image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Apurva Kanth
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Frontend Developer
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://images.unsplash.com/photo-1629997383348-4cafdec32fd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbiUyMHNpbGhvdWV0dGV8ZW58MHwwfDB8fHww"
                  alt="William image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                William Ikeji
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Blockchain Developer, Web3 Lead
              </span>
            </div>
            <div className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
              <div className="relative mb-5">
                <img
                  src="https://images.unsplash.com/photo-1666834621175-7fbb2b180a52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMHNpbGhvdWV0dGV8ZW58MHwwfDB8fHww"
                  alt="Apurva image"
                  className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl text-gray-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                Ayobami Alaran
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Senior Backend Engineer
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTeam;
