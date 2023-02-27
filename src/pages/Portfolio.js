import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Karya = () => {
  const porto = [
    {nama: "Home Brochure AR", img: "/images/1.jpeg", software: "Blender + Unity 2018"},
    {nama: "Wallpaper Design", img: "/images/2.jpeg", software: "Adobe Photoshop"},
    {nama: "School AR", img: "/images/3.jpeg", software: "Blender + Unity 2018"},
    {nama: "Car Movement", img: "/images/4.jpeg", software: "Blender"},
    {nama: "Art Exhibition Map", img: "/images/5.jpeg", software: "Adobe Illustrator"},
    {nama: "Pics Gallery", img: "/images/6.png", software: "React + Tailwind CSS"},
    {nama: "E-Canteen Project", img: "/images/7.jpeg", software: "CodeIgniter"},
    {nama: "Hospital Server", img: "/images/8.jpeg", software: "CodeIgniter"},
    {nama: "Library Server", img: "/images/9.jpeg", software: "CodeIgniter"},
    {nama: "Logo Design", img: "/images/10.jpeg", software: "Adobe Illustrator"},
  ];
  return (
    <div>
      <Navbar />
      <section id="portfolio">
        <div className="text-center font-bold mt-24 mb-8 items-center">
          <h1 className="text-2xl text-sec">My Portfolio</h1>
        </div>
        <div className="text-primary md:mx-20 mb-12 md:mb-12">
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {porto.map((porto) => (
            <li className="bg-sec rounded-md overflow-hidden m-auto mb-4 w-44 md:w-80 hover:shadow-2xl text-left p-2">
              <img
                src={porto.img}
                alt=""
                className="w-72 md:w-80 h-24 md:h-44 items-center object-contain rounded-md mb-2"
              />
              <p className="text-base">
                <strong>{porto.nama}</strong>
              </p>
              <p className="text-sm mb-2">{porto.software}</p>
            </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Karya;
