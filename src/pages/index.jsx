import React from "react";
import Header from "../components/Header";
import MenuMobile from "../components/MenuMobile";
import ImJulio from "../components/ImJulio";
import Portfolio from "../components/Portfolio";
import BackgroundProfile from "../components/BackgroundProfile";
import SocialNetworks from "../components/SocialNetworks";

const Index = () => {
	return (
		<div className="h-screen darkModeIsApplied">
			<div className="h-full">
				<div className="">
					<Header />
				</div>
				<div className="">
					<MenuMobile />
				</div>
				<div className="flex flex-col items-center sm:flex-row sm: justify-around">
					<div className="flex items-center">
						<SocialNetworks />
						<ImJulio />
					</div>
					<BackgroundProfile />
				</div>
				<div className="portfolioGrid">
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
			</div>
		</div>
	);
};

export default Index;
