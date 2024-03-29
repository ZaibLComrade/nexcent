"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const navlinks = [
	{ label: "Home", href: "/" },
	{ label: "Features", href: "/features" },
	{ label: "Community", href: "/community" },
	{ label: "Blog", href: "/blog" },
	{ label: "Pricing", href: "/pricing" },
];

const NavLinks = () => {
	const pathname = usePathname();
	return (
		<ul className="flex items-center justify-center gap-4">
			{navlinks.map(({ label, href }) => (
				<li key={label + href}>
					<Link
						href={href}
						className={classNames({
							"font-semibold": pathname === href,
							"font-base": pathname !== href,
							"text-secondary hover:text-black": true,
						})}
					>
						{label}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default NavLinks;
