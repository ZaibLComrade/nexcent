import clickIcon from "@/assets/icons/click.svg";
import handIcon from "@/assets/icons/hand.svg";
import personIcon from "@/assets/icons/person.svg";
import cardIcon from "@/assets/icons/card.svg";
import Image from "next/image";

const statsInfo = [
	{ 
		id: "stat1",
		icon: personIcon,
		label: "Members",
		value: 2245341,
	},
	{
		id: "stat2",
		icon: handIcon,
		label: "Clubs",
		value: 46328
	},
	{
		id: "stat3",
		icon: clickIcon,
		label: "Event Booking",
		value: 828867
	},
	{
		id: "stat4",
		icon: cardIcon,
		label: "Payments",
		value: 1926436
	}
]

const Statistics = () => {
	return <section className="bg-neutral flex items-center justify-around py-16">
		{/* Texts */}
		<div className="space-y-4">
			<h2 className="text-4xl font-semibold">
				<span className="text-secondary">Helping a local</span>
				<br/>
				<span className="text-primary">business reinvent itself</span>
			</h2>
			<p className="text-secondary">We reached here with our hard work and dedication</p>
		</div>
		
		{/* Stats */}
		<div className="grid grid-cols-2 gap-10">
			{
				statsInfo.map(stat => (
					<div key={ stat.id } className="flex items-center justify-start gap-4">
						{/* icon */}
						<div>
							<Image
								src={ stat.icon }
								alt={`icon for ${stat.id}`}
								width={ 40 }
								height={ 40 }
							/>
						</div>
						
						{/* texts */}
						<div>
							<h3 className="text-3xl font-semibold text-secondary">{ stat.value.toLocaleString("en-US") }</h3>
							<h4 className="text-secondary-2">{ stat.label }</h4>
						</div>
					</div>
				))
			}
		</div>
	</section> 
}

export default Statistics;
