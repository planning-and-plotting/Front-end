import React from "react";

const Home = () => {
	return (
		<section className="flex relative flex-col pb-3.5 mt-14 w-full text-8xl text-white font-[872] min-h-[783px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
			<img
				loading="lazy"
				src="http://b.io/ext_14-"
				alt="hero"
				className="object-cover absolute inset-0 size-full"
			/>

			<div className="relative pt-96 pr-40 pb-64 pl-44 bg-stone-900 bg-opacity-60 max-md:py-10 max-md:pr-8 max-md:pl-5 max-md:max-w-full max-md:text-4xl">
				<h1>
					<span className="font-black text-white">RICHCO TRUST</span>{" "}
					<span className="font-black text-white">GHANA</span>{" "}
				</h1>
			</div>
		</section>
	);
};

export default Home;
