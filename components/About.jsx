import React from 'react';


const About = () => {

  return (

    <section className="z-10 px-20 py-20 mt-0 w-full bg-blend-lighten bg-white bg-opacity-30 max-md:px-5 max-md:max-w-full">

      <div className="flex gap-5 max-md:flex-col">

        <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">

          <div className="flex flex-col items-start self-stretch my-auto max-md:mt-10 max-md:max-w-full">

            <h2 className="ml-48 text-3xl font-black text-white max-md:ml-2.5">

              ABOUT RICHCO{" "}

            </h2>

            <div className="self-stretch mt-7 max-md:max-w-full">

              <div className="flex gap-5 max-md:flex-col">

                <div className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">

                  <p className="text-2xl text-white max-md:mt-10 max-md:max-w-full">

                    Founded in 1999, Richco Trust Company Limited is a leading petroleum haulage service provider based in Ghana. Over the past two decades, we have built a reputation for reliability and excellence in the industry. Our headquarters in Ghana serves as the hub for our operations, ensuring the efficient and safe transportation of petroleum products across the region.

                  </p>

                </div>

                <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">

                  <div className="flex flex-col grow justify-center mt-2 text-3xl font-extrabold text-center text-black rounded-[30px] max-md:mt-10"></div>
                  </div>

</div>

</div>

<button className="px-10 py-8 mt-12 text-2xl font-black text-center text-black bg-white rounded-3xl max-md:px-5 max-md:mt-10">

Learn more

</button>

</div>

</div>
<div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">

          <div className="flex flex-col self-stretch my-auto text-3xl font-extrabold text-center text-black max-md:mt-10">

            <div className="flex flex-col items-center px-16 py-10 whitespace-nowrap rounded-xl bg-zinc-100 max-md:px-5">

              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8af5ad0c26610b801e4ad29477967915fae8963057018a3a8cc9f8d00989e242?apiKey=e85830f0cc284ac39540b573ff3d0a53&&apiKey=e85830f0cc284ac39540b573ff3d0a53" alt="Founded year icon" className="aspect-[1.03] w-[103px]" />

              <div className="mt-9">1999</div>

            </div>

            <div className="flex flex-col px-7 pt-5 pb-0.5 mt-24 rounded-xl bg-zinc-100 max-md:px-5 max-md:mt-10">

              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e1623bdaafbbd8a69000fcb1b850ecc2b80bfbc1c79a737ecca0c46866778d2?apiKey=e85830f0cc284ac39540b573ff3d0a53&&apiKey=e85830f0cc284ac39540b573ff3d0a53" alt="Certified operations icon" className="self-center max-w-full aspect-[1.03] w-[103px]" />

              <div className="mt-8">Certified Operations</div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};


export default About;