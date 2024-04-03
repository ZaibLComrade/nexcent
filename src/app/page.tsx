import Image from "next/image";
import Banner from "./ui/banner/Banner";
import OurClients from "./ui/sections/OurClients";
import ManageCommunity from "./ui/sections/ManageCommunity";
import PixelgradeInfo from "./ui/sections/PixelgradeInfo";
import Statistics from "./ui/sections/Statistics";
import SiteFooter from "./ui/sections/SiteFooter";

export default function Home() {
	return (
		<main>
			<Banner/>
			<OurClients/>
			<ManageCommunity/>
			<PixelgradeInfo/>
			<Statistics/>
			<SiteFooter/>
		</main>
	);
}
