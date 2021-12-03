import React from "react";
import Header from "../components/Header";
import MenuMobile from "../components/MenuMobile";
import ImJulio from "../components/ImJulio";
import Portfolio from "../components/Portfolio";
import BackgroundProfile from "../components/BackgroundProfile";
import SocialNetworks from "../components/SocialNetworks";
import ContactForm from "../components/ContactForm";
import ExtraContact from "../components/ExtraContact";
import Footer from "../components/Footer";

const Index = () => {
	return (
		<div className="darkModeIsApplied">
			<div className="h-full">
				<div className="">
					<Header />
				</div>
				<div className="">
					<MenuMobile />
				</div>
				<div className="flex flex-col my-16 items-center sm:flex-row sm: justify-around">
					<div className="flex items-center">
						<SocialNetworks />
						<ImJulio />
					</div>
					<BackgroundProfile />
				</div>
				<span className="text-center text-4xl block dark:darkModeIsApplied mt-52">
					Portfolio
				</span>
				<div className="portfolioGrid my-16">
					<Portfolio
						image="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/570222425cafe8efee31eef0/tigre_0.jpg"
						title="CountryInfo"
						content="lorem ipsumco conmcosncs imcoismcos incsoicmos"
					/>
					<Portfolio
						image="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/570222425cafe8efee31eef0/tigre_0.jpg"
						title="CountryInfo"
						content="lorem ipsumco conmcosncs imcoismcos incsoicmos"
					/>
					<Portfolio
						image="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/570222425cafe8efee31eef0/tigre_0.jpg"
						title="CountryInfo"
						content="lorem ipsumco conmcosncs imcoismcos incsoicmos"
					/>
				</div>
				<span className="text-center text-4xl block dark:darkModeIsApplied mt-32 mb-20">
					Contact
				</span>
				<div className="flex flex-col items-center justify-around md:flex-row">
					<ExtraContact />
					<ContactForm />
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Index;
