import React from "react";

const Footer = () => {
  ///////////////

  return (
    <footer
      id="work"
      className="componentContainer flex justify-center bg-black border-t-[1px] border-[#2b2929] snap-start"
    >
      <div className="mainWrapper w-[80%] lg:w-[90%] xl:w-[80%] flex flex-col items-center">
        <div className="secondwrapper w-full   text-4xl flex flex-col lg:flex-row gap-5 justify-center text-white pt-10 pb-6 ">
          <div className="first mb-5 lg:mb-0  flex flex-col lg:items-center justify-start lg:w-[40%]    border-l-[1px] lg:border-0 lg:px-10 px-7 border-[#2b2929]  ">
            <h1 className=" font-libra  font-semibold tracking-wide text-xl text-aqua  lg:text-center">
              Usama <span className="text-white opacity-70">Abdul Samad</span>
            </h1>
            <p className=" text-xs text-aqua leading-5 mt-5 lg:text-center hidden lg:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae id quia dolorum eligendi eaque quo doloremque eius
              corrupti libero et quidem, soluta quaerat vero accusantium?
              Officia magni dolorem illo architecto.
            </p>
          </div>
          <div className="first mb-5 lg:mb-0   border-l-[1px] border-[#2b2929]   lg:pl-8 pl-7 lg:w-[25%] text-aqua  ">
            <h1 className="capitalize text-lg  pb-5 font-semibold">Company</h1>

            <ul>
              <li
                className="hover:text-white py-1 text-base hover:cursor-pointer"
                onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
              >
                Search Movie
              </li>
              <li className="hover:text-white py-1 text-base">About Us</li>

              <li className="hover:text-white py-1 text-base">Movies</li>
              <li className="hover:text-white py-1 text-base">Tv Shows</li>
            </ul>
          </div>

          <div className="first mb-5 lg:mb-0  border-l-[1px] border-[#2b2929] lg:w-[35%]  text-xl  leading-loose flex flex-col items-start lg:pl-7 pl-5 text-aqua">
            <h1 className="capitalize text-lg  font-semibold pl-2 ">
              Contact Us
            </h1>
            <div className="socialMediaLinks flex gap-5 bg-black   py-4 ">
              <a href="https://www.linkedin.com/in/usama-abdul-samad-23293a1bb/">
                <div className="linkedin w-10 flex justify-center items-center h-10 hover:bg-slate-900">
                  <svg
                    fill="#05FDD8"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    width="23px"
                    height="23px"
                    viewBox="0 0 552.77 552.77"
                    space="preserve"
                    stroke="#05FDD8"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M17.95,528.854h71.861c9.914,0,17.95-8.037,17.95-17.951V196.8c0-9.915-8.036-17.95-17.95-17.95H17.95 C8.035,178.85,0,186.885,0,196.8v314.103C0,520.816,8.035,528.854,17.95,528.854z"></path>{" "}
                          <path d="M17.95,123.629h71.861c9.914,0,17.95-8.036,17.95-17.95V41.866c0-9.914-8.036-17.95-17.95-17.95H17.95 C8.035,23.916,0,31.952,0,41.866v63.813C0,115.593,8.035,123.629,17.95,123.629z"></path>{" "}
                          <path d="M525.732,215.282c-10.098-13.292-24.988-24.223-44.676-32.791c-19.688-8.562-41.42-12.846-65.197-12.846 c-48.268,0-89.168,18.421-122.699,55.27c-6.672,7.332-11.523,5.729-11.523-4.186V196.8c0-9.915-8.037-17.95-17.951-17.95h-64.192 c-9.915,0-17.95,8.035-17.95,17.95v314.103c0,9.914,8.036,17.951,17.95,17.951h71.861c9.915,0,17.95-8.037,17.95-17.951V401.666 c0-45.508,2.748-76.701,8.244-93.574c5.494-16.873,15.66-30.422,30.488-40.649c14.83-10.227,31.574-15.343,50.24-15.343 c14.572,0,27.037,3.58,37.393,10.741c10.355,7.16,17.834,17.19,22.436,30.104c4.604,12.912,6.904,41.354,6.904,85.33v132.627 c0,9.914,8.035,17.951,17.949,17.951h71.861c9.914,0,17.949-8.037,17.949-17.951V333.02c0-31.445-1.982-55.607-5.941-72.48 S535.836,228.581,525.732,215.282z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
              </a>
              <a href="https://github.com/UsamaSamad1996">
                <div className="Github w-10 flex justify-center items-center h-10 hover:bg-slate-900">
                  <svg
                    fill="#05FDD8"
                    width="24px"
                    height="24px"
                    viewBox="0 0 1920 1920"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#05FDD8"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M1821.63 637.76c0-130.027-43.627-236.373-116.054-319.68 11.627-30.187 50.347-151.36-11.2-315.307 0 0-94.72-32-310.4 122.134-90.133-26.454-186.773-39.68-282.773-40.107-96 .427-192.64 13.653-282.667 40.107C602.749-29.227 507.923 2.773 507.923 2.773c-61.547 163.947-22.72 285.12-11.094 315.307-72.32 83.307-116.266 189.653-116.266 319.68 0 456.533 263.68 558.72 514.453 588.8 0 0-180.267 111.68-180.267 299.413-64.32 30.507-336.533 123.947-437.333-58.133 0 0-59.627-114.347-173.013-122.773 0 0-110.294-1.494-7.787 72.426 0 0 74.027 36.694 125.44 174.294 0 0 57.173 289.92 489.067 159.68 4.373 2.24 1.6 140.266 1.6 168.533h777.173s1.28-277.013 1.28-365.12c0-216.64-144.64-292.48-185.28-329.28 251.627-29.44 515.733-130.133 515.733-587.84"
                        fill-rule="evenodd"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </a>
              <a href="https://web.facebook.com/usama.samad.56">
                <div className="facebook w-10 flex justify-center items-center h-10 hover:bg-slate-900">
                  <svg
                    fill="#05FDD8"
                    width="24px"
                    height="28px"
                    viewBox="0 0 1920 1920"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M1168.737 487.897c44.672-41.401 113.824-36.889 118.9-36.663l289.354-.113 6.317-417.504L1539.65 22.9C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l62.045-451.233H1126.66v-69.152c0-54.937 14.214-96.112 42.078-122.058"
                        fill-rule="evenodd"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </a>
              <a href="https://wa.me/923242119160">
                <div className="whatApp w-10 flex justify-center items-center h-10 hover:bg-slate-900">
                  <svg
                    width="28px"
                    height="28px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#05FDD8"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <rect
                        x="0"
                        fill="none"
                        width="20"
                        height="20"
                      ></rect>{" "}
                      <g>
                        {" "}
                        <path d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2 2 5.5.8 10.5 3.2 14.2l.2.3-.8 3 3-.8.3.2c1.3.7 2.7 1.1 4.1 1.1 1.5 0 3-.4 4.3-1.2 3.7-2.4 4.8-7.3 2.5-11.1zm-2.1 7.7c-.4.6-.9 1-1.6 1.1-.4 0-.9.2-2.9-.6-1.7-.8-3.1-2.1-4.1-3.6-.6-.7-.9-1.6-1-2.5 0-.8.3-1.5.8-2 .2-.2.4-.3.6-.3H7c.2 0 .4 0 .5.4.2.5.7 1.7.7 1.8.1.1.1.3 0 .4.1.2 0 .4-.1.5-.1.1-.2.3-.3.4-.2.1-.3.3-.2.5.4.6.9 1.2 1.4 1.7.6.5 1.2.9 1.9 1.2.2.1.4.1.5-.1s.6-.7.8-.9c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.5.3.1.3.1.7-.1 1z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
              </a>
              <a href="http://instagram.com/usama_samad1996/">
                <div className="instagram w-10 flex justify-center items-center h-10 hover:bg-slate-900">
                  <svg
                    fill="#05FDD8"
                    width="30px"
                    height="30px"
                    viewBox="0 0 32 32"
                    id="Camada_1"
                    version="1.1"
                    space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"></path>{" "}
                        <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8 c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"></path>{" "}
                        <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8 c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
              </a>
            </div>
            <a
              href="https://mail.google.com"
              className=" text-sm  pl-2   hover:text-white tracking-wide"
            >
              Email : usama.samad160@gmail.com
            </a>
          </div>
        </div>
        <div className="copyRights border-t-[1px] border-[#2b2929] w-full">
          <p className="text-white text-sm pt-5 pb-6 opacity-80 text-center">
            Copyright @ 2023 | SPY Universe | Developed By Usama Samad | All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
