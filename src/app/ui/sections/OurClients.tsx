import logo1 from "@/assets/logos/logo1.svg";
import logo2 from "@/assets/logos/logo2.svg";
import logo3 from "@/assets/logos/logo3.svg";
import logo4 from "@/assets/logos/logo4.svg";
import logo5 from "@/assets/logos/logo5.svg";
import logo6 from "@/assets/logos/logo6.svg";
import logo7 from "@/assets/logos/logo7.svg";
import Image from "next/image";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const OurClients = () => {
	return (
		<section className="py-8">
			{/* Heading */}
			<div className="w-max mx-auto text-center space-y-3">
				<h2 className="text-secondary text-4xl font-semibold">
					Our Clients
				</h2>
				<p className="text-secondary-2">
					We have been working with forture 500+ clients
				</p>
			</div>

			{/* Logos */}
			<div className="flex items-center justify-around p-10">
				{logos.map((logo) => (
					<Image
						src={logo}
						key={ logo }
						alt="logo"
						width={60}
						height={60}
					/>
				))}
			</div>
		</section>
	);
};

export default OurClients;
