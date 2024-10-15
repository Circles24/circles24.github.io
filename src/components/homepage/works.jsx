import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./solytics-partners-logo.svg"
								alt="Solytics Partners"
								className="work-image"
							/>
							<div className="work-title">Solytics Partners</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">Jan 2020 - Dec 2020</div>
						</div>

						<div className="work">
							<img
								src="./cred-logo.png"
								alt="twitter"
								className="work-image-dark"
							/>
							<div className="work-title">CRED</div>
							<div className="work-subtitle">
								Backend Engineer Intern
							</div>
							<div className="work-duration">Jan 2021 - July 2021</div>
						</div>

						<div className="work">
							<img
								src="./cred-logo.png"
								alt="twitter"
								className="work-image-dark"
							/>
							<div className="work-title">CRED</div>
							<div className="work-subtitle">
								Backend Engineer
							</div>
							<div className="work-duration">July 2021 - Oct 2022</div>
						</div>

						<div className="work">
							<img
								src="./rupifi-logo.png"
								alt="twitter"
								className="work-image-dark"
							/>
							<div className="work-title">Rupifi</div>
							<div className="work-subtitle">
								Backend Engineer
							</div>
							<div className="work-duration">Oct 2022 - Jun 2024</div>
						</div>

						<div className="work">
							<img
								src="./kotak-logo.webp"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Kotak Mahindra Bank</div>
							<div className="work-subtitle">
								Senior Software Engineer
							</div>
							<div className="work-duration">Jun 2024 - Present</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
