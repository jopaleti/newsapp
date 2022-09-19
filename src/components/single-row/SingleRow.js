import React from "react";
import "./single-row.scss";
import { NewImage } from "../../assets";

function SingleRow() {
	return (
		<div className="single-row">
			<h1>SPORTS</h1>
			{/* IMAGE GRID DISPLAY */}
			<div className="grid-container">
				<div className="item">
					<div className="img-container">
						<h5 className="nation-badge">INSIDE NIGERIA</h5>
						<img src={NewImage} alt="img.jpg" />
					</div>
					<div className="item-body">
						<a href="/">
							<h2>
								Nigerian football coach jailed for 15 years in UK over sexual
								assault
							</h2>
						</a>
						<div className="time-bottom">
							<small className="svg-flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="10"
									height="10"
									fill="currentColor"
									class="bi bi-clock"
									viewBox="0 0 16 16"
								>
									<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
									<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
								</svg>
								September 14, 2022
							</small>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="img-container">
						<h5 className="nation-badge">INSIDE NIGERIA</h5>
						<img src={NewImage} alt="img.jpg" />
					</div>
					<div className="item-body">
						<a href="/">
							<h2>
								Nigerian football coach jailed for 15 years in UK over sexual
								assault
							</h2>
						</a>
						<div className="time-bottom">
							<small className="svg-flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="10"
									height="10"
									fill="currentColor"
									class="bi bi-clock"
									viewBox="0 0 16 16"
								>
									<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
									<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
								</svg>
								September 14, 2022
							</small>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="img-container">
						<h5 className="nation-badge">INSIDE NIGERIA</h5>
						<img src={NewImage} alt="img.jpg" />
					</div>
					<div className="item-body">
						<a href="/">
							<h2>
								Nigerian football coach jailed for 15 years in UK over sexual
								assault
							</h2>
						</a>
						<div className="time-bottom">
							<small className="svg-flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="10"
									height="10"
									fill="currentColor"
									class="bi bi-clock"
									viewBox="0 0 16 16"
								>
									<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
									<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
								</svg>
								September 14, 2022
							</small>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="img-container">
						<h5 className="nation-badge">INSIDE NIGERIA</h5>
						<img src={NewImage} alt="img.jpg" />
					</div>
					<div className="item-body">
						<a href="/">
							<h2>
								Nigerian football coach jailed for 15 years in UK over sexual
								assault
							</h2>
						</a>
						<div className="time-bottom">
							<small className="svg-flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="10"
									height="10"
									fill="currentColor"
									class="bi bi-clock"
									viewBox="0 0 16 16"
								>
									<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
									<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
								</svg>
								September 14, 2022
							</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SingleRow;
