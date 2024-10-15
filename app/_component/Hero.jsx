import React from 'react';
import Header from './Header';
// import Header from '@/components/Header';

function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Transparent Header */}
      <Header />

      {/* Background Video */}
      <video
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

     {/* Black tint for displaying over video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>


      {/* Main Content - Vertically and Horizontally Centered */}
      <section className="relative z-10 flex items-center justify-center h-full">
        <div className="mx-auto max-w-xl text-center ">
          <h1 className="text-3xl text-primary font-extrabold sm:text-5xl">
            AI Course Generator
          </h1>
          <p className="mt-2 text-2xl sm:block text-white">
            Custom Learning Paths Powered By AI
          </p>

          <p className="mt-4 sm:text-3xl text-white">
            Welcome to our AI-powered Course Generator! Create your own
            personalized learning paths tailored to your skills, interests, and goals.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/dashboard"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
