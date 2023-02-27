import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../asset/saya.jpeg";

const Beranda = () => {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="h-homesm md:min-h-screen md:h-screen flex py-10 md:flex-row flex-col items-center"
      >
        <div className="flex items-center justify-center my-16 md:my-0">
          <div alt="" className="h-full w-full object-cover ml-0 md:mx-40">
            <img
              src={img}
              alt=""
              className="w-48 md:w-96 object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="md:text-left text-center w-96 md:w-home">
            <h1 className="md:text-xl text-lg md:leading-normal leading-10 text-sec font-bold">
              <span className="text-white md:text-2xl text-xl">
                Hello!
                <br />
              </span>
              <span className="font-normal mt-2">My Name is </span>Alya Rusyda
              Maharistya
            </h1>
            <h4 className="md:text-md text-s m md:leading-normal leading-5 text-sec mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Beranda;
