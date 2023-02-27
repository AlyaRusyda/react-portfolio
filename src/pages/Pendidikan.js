import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Pendidikan = () => {
    const prestasi = [
      {
        nama: "BIONIX Student Level 2022",
        penyelenggara: "Information Systems of Institut Teknologi Sepuluh Nopember",
        achieve: "Semifinalist",
        link: "https://drive.google.com/file/d/12Lny1n-rCEmZCSffqE9ZGBfOPjIU3nxX/view?usp=share_link",
      },
      {
        nama: "Mobile Application Competition Creative Idea (MACCI) BeeFest 2022",
        penyelenggara: "School of Computer Science - Binus University",
        achieve: "Finalist",
        link: "https://drive.google.com/file/d/17Ut097l6gqyqP7pM8w3_m0HbKRRdGj2A/view?usp=share_link",
      },
      {
        nama: "Multimedia and Game Event 8",
        penyelenggara: "Computer Engineering of Institut Teknologi Sepuluh Nopember",
        achieve: "3rd Place",
        link: "https://drive.google.com/file/d/1wlsHa90yjnoQSQXoqlYMdC3yQA6C_7LC/view?usp=share_link",
      },
    ];
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden space-x-0 w-72 md:w-auto mb-20 md:mb-16 m-12 md:m-24 mt-28 text-left flex md:flex-row flex-col">
        <div className="px-8 md:px-28 py-12 md:py-20">
          <div className="font-extrabold text-sec text-2xl mb-3">
            My Education
          </div>
          <div className="text-sec mt-8">
            <ul>
              <li className="text-lg font-semibold hover:text-white">
                <a
                  href="http://www.instagram.com/sdmimamsyuhodo"
                  target="_blank"
                >
                  SD Muhammadiyah Imam Syuhodo
                </a>
              </li>
              <li className="bg-gray-600 text-md px-2 py-2 w-32 text-center mt-2 hover:text-primary hover:bg-sec">
                2012 - 2018
              </li>

              <li className="text-lg mt-8 font-semibold hover:text-white">
                <a
                  href="http://www.instagram.com/mtsmuhblimbing.official"
                  target="_blank"
                >
                  MTs Muhammadiyah Blimbing
                </a>
              </li>
              <li className="bg-gray-600 text-md px-2 py-2 w-32 text-center mt-2 hover:text-primary hover:bg-sec">
                2018 - 2021
              </li>

              <li className="text-lg mt-8 font-semibold hover:text-white">
                <a
                  href="http://www.instagram.com/smktelkommalang"
                  target="_blank"
                >
                  SMK Telkom Malang
                </a>
              </li>
              <li className="text-sm hover:font-bold hover:text-white">
                Rekayasa Perangkat Lunak
              </li>
              <li className="bg-gray-600 text-md px-2 py-2 w-32 text-center mt-2 hover:text-primary hover:bg-sec">
                2021 - now
              </li>
            </ul>
          </div>
        </div>
        <div className="px-8 md:px-28 py-12 md:py-20">
          <div className="font-extrabold text-sec text-xl">Achievement</div>
          <div className="text-sec text-sm -mb-4">
            (top 3 achievement last year)
          </div>
          <div className="text-sec">
            <ul>
              {prestasi?.map((isi) => (
                <li className="my-8">
                  <p className="text-lg font-semibold hover:text-white">
                    {isi.nama}
                  </p>
                  <p className="text-sm hover:font-bold hover:text-white mb-4">
                    {isi.penyelenggara}
                  </p>
                  <a
                    href={isi.link}
                    target="_blank"
                    className="bg-gray-600 text-md px-2 py-2 w-32 text-center hover:text-primary hover:bg-sec"
                  >
                    {isi.achieve}
                  </a>
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

export default Pendidikan;
