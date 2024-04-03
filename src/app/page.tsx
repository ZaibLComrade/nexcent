import Image from "next/image";
import Banner from "./ui/banner/Banner";
import OurClients from "./ui/sections/OurClients";

export default function Home() {
	return (
		<main>
			<Banner/>
			<OurClients/>
		</main>
	);
}
