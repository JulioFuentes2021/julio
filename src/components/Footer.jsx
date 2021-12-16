import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
	const iconsMargin = "mx-4";
	const webSectionsMargin = "my-4 lg:mx-4";

	return (
		<div className="h-96 bg-blue-400 text-white p-2 py-12 footerGrid dark:bg-gray-800 text-xl">
			<div className="flex flex-col text-center justify-center">
				<span className="font-semibold text-2xl">Julio Fuentes</span>
				<small>Frontend developer</small>
			</div>
			<div className="flex flex-col lg:flex-row justify-center items-center">
				<span className={`${webSectionsMargin}`}>
					<a href="#">About Me</a>
				</span>
				<span className={`${webSectionsMargin}`}>
					<a href="#portfolio">Portfolio</a>
				</span>
				<span className={`${webSectionsMargin}`}>
					<a href="#contact">Contact</a>
				</span>
			</div>
			<div className="flex text-2xl items-center">
				<span className={`${iconsMargin}`}>
					<FaLinkedin />
				</span>
				<span className={`${iconsMargin}`}>
					<FaGithub />
				</span>
				<span className={`${iconsMargin}`}>
					<FaTwitter />
				</span>
			</div>
		</div>
	);
};

export default Footer;
