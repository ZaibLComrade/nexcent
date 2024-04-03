import illustration from "@/assets/illustrations/pana.png";
import Image from "next/image";

const SiteFooter = () => {
	return (
		<section className="py-10 flex items-center justify-around">
			{/* image */}
			<div>
				<Image
					src={illustration}
					alt="Mobile login illustration"
					width={350}
					height={350}
				/>
			</div>

			{/* texts */}
			<div className="max-w-[680px] space-y-4">
				<h2 className="text-secondary font-semibold text-4xl">How do we design your site footer like we did</h2>
				<p className="text-secondary-2">
					Donec a eros justo. Fusce egestas tristique ultrices. Nam
					tempor, augue nec tincidunt molestie, massa nunc varius
					arcu, at scelerisque elit erat a magna. Donec quis erat at
					libero ultrices mollis. In hac habitasse platea dictumst.
					Vivamus vehicula leo dui, at porta nisi facilisis finibus.
					In euismod augue vitae nisi ultricies, non aliquet urna
					tincidunt. Integer in nisi eget nulla commodo faucibus
					efficitur quis massa. Praesent felis est, finibus et nisi
					ac, hendrerit venenatis libero. Donec consectetur faucibus
					ipsum id gravida.
				</p>
				<button className="text-white bg-primary px-8 py-3 rounded-md">Learn More</button>
			</div>
		</section>
	);
};

export default SiteFooter;
