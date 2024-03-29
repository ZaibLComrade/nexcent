import Image from "next/image";
import Link from "next/link";
import rightArrow from "@/assets/icons/Right.svg";
import NavLinks from "./NavLinks";

const Navbar = () => {
	return (
		<nav className="justify-between flex items-center py-5 px-[130px]">
			<Link href="/" className="flex items-center justify-center gap-2">
				<Image
					src="/logo.svg"
					alt="Nexcent Logo"
					width={45}
					height={45}
				/>
				<span className="text-secondary font-bold text-4xl">
					Nexcent
				</span>
			</Link>
			<div className="flex items-center gap-11">
				<NavLinks />
				<button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-md">
					<span>Register Now</span>
					<span>
						<Image
							src={rightArrow}
							width={20}
							height={20}
							alt="Right arrow"
						/>
					</span>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
