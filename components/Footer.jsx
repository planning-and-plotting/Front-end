import React from 'react';


const Footer = () => {

  return (

    <footer className="flex flex-col items-center px-16 pt-20 pb-3.5 mt-96 w-full bg-stone-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">

      <div className="flex flex-col items-center w-full max-w-[1164px] max-md:max-w-full">

        <div className="self-stretch max-md:max-w-full">

          <div className="flex gap-5 max-md:flex-col">

            <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">

              <address className="self-stretch my-auto text-xs text-white max-md:mt-10">

                <span className="text-base">Address</span>

                <br />

                <a href="http://b.io/ext_23-" className="text-base underline" target="_blank" rel="noopener noreferrer">

                  Junction of Kojo Thompson and Adjabeng Roads, House No. D659/4, Accra P.O.Box GP 3183, Accra.

                </a>

                <br />

                <br />

                <br />

                <span className="text-base">Ghana Post Address: GA-105-4831</span>

                <br />
                <br />

                <br />

              </address>

            </div>

            <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">

              <div className="self-stretch my-auto text-xs text-white max-md:mt-10">

                <span className="text-base">Working hours</span>

                <br />

                <span className="text-base">Mondays - Fridays 8:00 am - 4:30 pm</span>

                <br />

                <br />

                <span className="text-base">Phone</span>

                <br />

                <span className="text-base">Reception</span>

                <br />

                <a href="tel:+233302667576" className="text-base underline">(+233) 0302 667 576</a>

                <br />

                <a href="tel:+233302668215" className="text-base underline">(+233) 0302 688 215</a>

                <br />

                <a href="tel:+233533735200" className="text-base underline">(+233) 0533 735 200</a>
                </div>

            </div>

            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">

              <div className="text-xs text-white max-md:mt-10">

                <span className="text-base">Toll Free</span>

                <br />

                <a href="tel:+233800400003" className="text-base underline">(+233) 800 400 003</a>

                <br />

                <a href="tel:+233800114645" className="text-base underline">(+233) 800 114 645</a>

                <br />

                <span className="text-base">Customer Service</span>

                <br />

                <a href="tel:+233540127100" className="text-base underline">(+233) 054 012 7100</a>

                <br />

                <a href="tel:+233302759444" className="text-base underline">(+233) 0302 759 444</a>

                <br />

                <span className="text-base">WhatsApp</span>

                <br />

                <a href="http://b.io/ext_24-" className="text-base underline">(+233) 050 155 9220</a>

                <br />
                <span className="text-base">Email</span>

                <br />

                <a href="mailto:info@richco.com.gh" className="text-base underline">info@richco.com.gh</a>

                <br />

                <a href="mailto:customerservice@richco.com" className="text-base underline">customerservice@richco.com</a>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-14 text-2xl text-center text-white max-md:mt-10">

          powered by <span className="text-4xl font-extrabold">NEXUS</span>

        </div>

        <div className="shrink-0 max-w-full h-0.5 border border-white border-solid w-[283px]" />

      </div>

    </footer>

  );

};


export default Footer;

