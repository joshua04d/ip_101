import React from "react";

function Hero() {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto my-11 max-w-screen-xl lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl text-primary font-extrabold sm:text-5xl">
              AI course Generator
            </h1>
              <p className="mt-2 text-2xl sm:block ">
                Custom Learning Paths Powered By AI
              </p>
            

            <p className="mt-4 sm:text-3xl text-primary">
            Welcome to our AI-powered Course Generator! Create your own personalized learning paths tailored to your skills, interests, and goals
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
