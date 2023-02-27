import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Kontak = () => {
  const kontak = [
    {sosmed: "IG", value: "@alyarusyda__", link: "https://instagram.com/alyarusyda__"},
    {sosmed: "Email", value: "alyarusydam@gmail.com", link: "mailto:alyarusydam@gmail.com"},
    {sosmed: "LinkedIn", value: "Alya Rusyda Maharistya", link: "https://www.linkedin.com/in/alya-rusyda-maharistya-07699124a/"},
    {sosmed: "Github", value: "@AlyaRusyda", link: "https://github.com/AlyaRusyda"},
  ];
  return (
    <>
      <Navbar />
      <div className="md:h-contact">
        <div className="text-center font-bold mt-24 items-center">
          <h1 className="text-2xl md:text-3xl text-sec">Get in Touch</h1>
          <div className="mx-1 md:mx-24">
            <ul className="overflow-hidden w-72 md:w-auto mb-20 md:mb-16 mx-12 my-12 md:my-12 md:mx-20 text-center grid grid-cols-1 md:grid-cols-4">
            {kontak.map((isi) => (
              <li className="bg-sec md:w-60 md:h-60 w-48 h-48 mb-4 md:mb-0 mx-auto hover:shadow-2xl rounded-lg justify-center flex flex-col">
                <p className="text-primary text-lg md:text-2xl mb-4">{isi.sosmed}</p>
                <a href={isi.link} className="text-primary text-sm md:text-md font-normal">{isi.value}</a>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Kontak;
