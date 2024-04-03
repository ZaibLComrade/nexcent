import Image from "next/image";
import illustration from "@/assets/illustrations/illustration2.png";

const PixelgradeInfo = () => {
	return (
		<div className="flex items-center justify-around gap-10">
			{/* Image */}
			<div>
				<Image
					src={illustration}
					alt="login illustration"
					height={400}
					width={400}
				/>
			</div>

			{/* Texts */}
			<div className="max-w-[720px] space-y-6">
				<h2 className="text-4xl text-secondary font-4xl">
					The unseen of spending three
					<br /> years at Pixelgrade
				</h2>
				<p className="text-secondary-2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					sit amet justo ipsum. Sed accumsan quam vitae est varius
					fringilla. Pellentesque placerat vestibulum lorem sed porta.
					Nullam mattis tristique iaculis. Nullam pulvinar sit amet
					risus pretium auctor. Etiam quis massa pulvinar, aliquam
					quam vitae, tempus sem. Donec elementum pulvinar odio.
				</p>
				
				<button className="bg-primary text-white px-6 py-3 rounded-md">Learn More</button>
			</div>
		</div>
	);
};

export default PixelgradeInfo;
