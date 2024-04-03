"use client";
import bannerIllustration from "@/assets/illustrations/banner.png";
import Image from "next/image";

const clickHandler = () => {
	console.log("CLick Handler");
};
const Banner = () => {
	return (
		<section className="flex bg-neutral h-screen items-center justify-around gap-[80px] px-[70px]">
			<div>
				{/* Text section */}
				<div>
					<h1 className="text-6xl font-semibold leading-[70px]">
						<span className="text-secondary">
							Lessons and insights
						</span>
						<br />
						<span className="text-primary">from 8 years</span>
					</h1>
					<p className="text-secondary-2 py-6">Where to grow your business as a photographer: site or media?</p>
				</div>
				
				{/* Cta */}
				<div className="">
					<button
						onClick={clickHandler}
						className="rounded-lg px-8 py-2 bg-primary text-white font-semibold py-4 px-5"
					>
						Register
					</button>
				</div>
			</div>
			
			{/* Image */}
			<div>
				<Image
					src={bannerIllustration}
					alt="Banner Image"
					width={250}
					height={250}
				/>
			</div>
		</section>
	);
};

export default Banner;
