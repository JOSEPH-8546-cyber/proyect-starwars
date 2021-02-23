import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarshipsDates = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params.theid);
	useEffect(
		() => {
			actions.StarshipsInfo(params.theid);
		},
		[params.theid]
	);

	return (
		!!store.StarshipsDetails && (
			<div>
				<div className="card mb-3 cartaPersonajes">
					<div className="row g-0">
						<div className="col-md-6">
							<img
								src="https://hipertextual.com/files/2019/12/hipertextual-mira-diseno-final-nave-porsche-star-wars-ascenso-skywalker-2019401507-scaled.jpg"
								className="img-fluid"
								alt=" "
							/>
						</div>

						<div className="col-md-6 card-body">
							<h1 className="card-title">{store.StarshipsDetails.properties.name}</h1>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							</p>
						</div>
					</div>
				</div>

				<footer
					className="footer mt-auto py-3 text-center"
					style={{ display: "flex", flexDirection: "row", borderTop: "solid 2px red" }}>
					<div className="container">
						<div className="row">
							<div className="col">
								<h4 style={{ color: "#009cf6" }}>Model</h4>
								<h4 style={{ color: "#71c609" }}>{store.StarshipsDetails.properties.model}</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "#009cf6" }}>Starship class</h4>
								<h4 style={{ color: "#71c609" }}>{store.StarshipsDetails.properties.starship_class}</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "#009cf6" }}>Manufacturer</h4>
								<h4 style={{ color: "#71c609" }}>{store.StarshipsDetails.properties.manufacturer}</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "#009cf6" }}>length</h4>
								<h4 style={{ color: "#71c609" }}>{store.StarshipsDetails.properties.length}</h4>
							</div>{" "}
							<div className="col">
								<h4 style={{ color: "#009cf6" }}>Crew</h4>
								<h4 style={{ color: "#71c609" }}>{store.StarshipsDetails.properties.crew}</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "#009cf6" }}>Passengers</h4>
								<h4 style={{ color: "#71c609" }}>{store.StarshipsDetails.properties.passengers}</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "#009cf6" }}>Consumables</h4>
								<h4 style={{ color: "#71c609" }}>{store.StarshipsDetails.properties.consumables}</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "#009cf6" }}>Name</h4>
								<h4 style={{ color: "#71c609" }}>{store.StarshipsDetails.properties.name}</h4>
							</div>
						</div>
					</div>
				</footer>
			</div>
		)
	);
};
