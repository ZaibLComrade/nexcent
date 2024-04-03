import Image from "next/image";
import Banner from "./ui/banner/Banner";
import OurClients from "./ui/sections/OurClients";
import ManageCommunity from "./ui/sections/ManageCommunity";
import PixelgradeInfo from "./ui/sections/PixelgradeInfo";

export default function Home() {
	return (
		<main>
			<Banner/>
			<OurClients/>
			<ManageCommunity/>
			<PixelgradeInfo/>
		</main>
	);
}
