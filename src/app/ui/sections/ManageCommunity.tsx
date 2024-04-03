import groupIcon from "@/assets/icons/group.svg";
import cityIcon from "@/assets/icons/city.svg";
import peopleIcon from "@/assets/icons/people.svg";
import Image from "next/image";

const commuintyCards = [
	{
		id: "card1",
		title: "Membership Organization",
		description:
			"Our membership management software provides full automation of membership renewals and payments",
		icon: peopleIcon,
	},
	{
		id: "card2",
		title: "National Associations",
		description:
			"Our membership management software provides full automation of membership renewals and payments",
		icon: cityIcon,
	},
	{
		id: "card3",
		title: "Clubs and Groups",
		description:
			"Our membership management software provides full automation of membership renewals and payments",
		icon: groupIcon,
	},
];

const ManageCommunity = () => {
	return (
		<section className="py-8 space-y-8">
			{/* Heading */}
			<div className="space-y-3 text-center">
				<h2 className="text-secondary text-4xl font-semibold leading-[45px]">
					Manage your entire Community
					<br />
					in a single system
				</h2>
				<p className="text-secondary-2">Who is Nexcent suitable for?</p>
			</div>

			{/* Cards */}
			<div className="flex items-center justify-around gap-8 py-6">
				{commuintyCards.map((card) => (
					<div key={card.id} className="text-center space-y-5 w-[255px]">
						{/* Image */}
						<div className="w-[50px] h-[50px] bg-primary-tint-5 p-1 rounded-tl-md rounded-br-xl mx-auto rounded">
							<Image
								src={ card.icon }
								alt="card icon"
								width={40}
								height={40}
							/>
						</div>
						
						{/* Texts */}
						<div className="space-y-2">
							<h3 className="text-secondary text-3xl font-semibold">{ card.title }</h3>
							<p className="text-secondary-2">{ card.description }</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ManageCommunity;
