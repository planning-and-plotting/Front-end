import people from "../../assets/people.png";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";

const Products = () => {
	return (
		<div className="absolute bg-[#110101] text-white w-full h-full">
			{/* Top Image Section */}
			<div className="w-full h-1/2">
				<img src={people} alt="Team" className="w-full h-full" />
			</div>

			{/* Bottom Content Section */}
			<div className="flex w-full h-1/2 bg-white text-black p-6 mt-4">
				<div className="w-full h-full md:w-7/10 p-4">
					<h2 className="text-2xl md:text-4xl font-black text-center mb-6 text-green-600">
						SERVICES <span className="text-red-600">WE RENDER?</span>
					</h2>
					<p className="mb-4">
						Richco Trust Company Limited stands in its pride in delivering
						quality petroleum to their most cherished customers. All this is
						possible through our working relationship with Goil PLC.
					</p>
					<p>
						Richco Trust Company Limited is interested in providing the best
						service when it comes to oil haulage. Our fleet of trucks are well
						serviced and equipped, and we have professional drivers who follow
						all safety protocols when doing this delivery.
					</p>
				</div>

				<div className="m-0 ml-96 w-1/2 h-full gap-0 md:w-3/10 p-0 flex flex-col space-y-4 justify-center items-end">
					<div>
						<img
							src={car1}
							alt="Truck 1"
							className="w-full h-auto object-scale-down rounded-lg"
						/>
					</div>
					<div className="pb-8">
						<img
							src={car2}
							alt="Truck 2"
							className="w-full h-auto object-scale-down rounded-lg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function App() {
	return (
		<div className="w-full h-dvh">
			<Products />
		</div>
	);
}
