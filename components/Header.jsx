import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-col pt-8 bg-black">
      <div className="px-6 pt-1 pb-3 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"

              src="http://b.io/ext_13-"

              alt="Company logo"

              className="shrink-0 max-w-full aspect-[2.78] w-[213px] max-md:mt-10"

            />

          </div>

          <nav className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">

            <div className="flex flex-col grow justify-center p-1 mt-9 text-2xl text-center text-white max-md:mt-10 max-md:max-w-full">

              <div className="flex flex-col justify-center items-start py-1 max-md:pr-5 max-md:max-w-full">

                <div className="flex gap-5 justify-between items-start max-md:flex-wrap">

                  <a href="#home" className="text-red-600">HOME</a>

                  <a href="#products" className="self-stretch">

                    PRODUCTS AND SERVICES

                    <br />

                  </a>

                  <a href="#about">ABOUT US</a>
                  </div>

</div>

</div>

</nav>

</div>

</div>

</header>

);

};


export default Header;