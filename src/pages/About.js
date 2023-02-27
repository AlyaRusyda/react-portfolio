import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../asset/about.png";
import Arrow from "../asset/Arrow";

const About = () => {
  const data = [
    { name: "Name", value: "Alya Rusyda Maharistya" },
    { name: "Date of birth", value: "31 July 2006" },
    { name: "Handphone", value: "085727689878" },
    { name: "Hometown", value: "Surakarta, Central Java" },
  ];
  const data2 = [
    { name: "Age", value: "16" },
    { name: "Status", value: "Student" },
    { name: "School", value: "SMK Telkom Malang" },
  ];
  return (
    <div>
      <Navbar />
      <div className="h-about md:h-screen">
        <img
          src={img}
          alt=""
          className="z-[0] w-80 md:w-bg bg-cover absolute bottom-0 right-12 md:right-24"
        ></img>
        <div className="z-[999] text-sec md:min-h-screen flex py-10 md:flex-row flex-col items-start md:items-center mx-8 md:ml-56 mt-12 md:mt-0">
          <div className="flex-1 mr-about justify">
            <div className="md:text-left text-center">
              <h4 className="md:text-3xl text-md md:leading-normal leading-5 font-bold text-sec">
                Let's get to know more about me!
              </h4>
              <div class="col-lg-8 pt-4 pt-lg-0 content hidden md:block">
                <div class="row">
                  <table>
                    <td>
                      <div class="flex col-lg-6">
                        <ul className="text-sm md:text-lg">
                          {data?.map((isi) => (
                            <li className="flex mb-2">
                              <div className="mr-4">
                                <Arrow />{" "}
                              </div>
                              {isi.name} : {isi.value}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-1 col-lg-6 ml-12">
                        <ul className="text-base md:text-lg">
                          {data2?.map((isi) => (
                            <li className="flex mb-2">
                              <div className="mr-4">
                                <Arrow />{" "}
                              </div>
                              {isi.name} : {isi.value}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </td>
                  </table>
                </div>
              </div>
              <div class="col-lg-8 w-80 pt-4 pt-lg-0 content block md:hidden">
                <div class="row">
                  <div class="flex col-lg-6">
                    <ul className="text-base md:text-lg">
                      {data?.map((isi) => (
                        <li className="flex">
                          <div className="mr-4"></div>
                          {isi.name} : {isi.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-1 col-lg-6">
                    <ul className="text-base md:text-lg">
                      {data2?.map((isi) => (
                        <li className="flex">
                          <div className="mr-4"></div>
                          {isi.name} : {isi.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <h4 className="md:text-2xl text-base md:leading-normal leading-5 font-bold text-sec mt-8">
                Skills
              </h4>
              <div className="flex items-center">
                <p className="space-x-4 mt-2 md:mt-4">
                  <img 
                    align="left"
                    alt="Javascript"
                    width="40px"
                    className="mb-4 md:mb-0"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                  />
                  <img
                    align="left"
                    alt="Javascript"
                    width="40px"
                    className="mb-4 md:mb-0"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                  />
                  <img
                    align="left"
                    alt="Javascript"
                    width="40px"
                    className="mb-4 md:mb-0"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                  />
                  <img
                    align="left"
                    alt="Javascript"
                    width="40px"
                    className="mb-4 md:mb-0"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/php/php.png"
                  />
                  <img
                    align="left"
                    alt="Javascript"
                    width="40px"
                    className="mb-4 md:mb-0"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
                  />
                  <img
                    align="left"
                    alt="Javascript"
                    width="40px"
                    className="mb-4 md:mb-0"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                  />
                  <img
                    align="left"
                    alt="Javascript"
                    width="40px"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                  />
                  <img
                    align="left"
                    alt="Javascript"
                    width="40px"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                  />
                  <img
                    align="left"
                    alt="Javascript"
                    width="40px"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
                  />
                  <img
                    align="left"
                    alt="Git"
                    width="40px"
                    src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                  />
                  <img
                    align="left"
                    alt="GitHub"
                    width="40px"
                    src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
