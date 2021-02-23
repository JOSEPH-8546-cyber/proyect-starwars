import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsDates = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params.theid);
	useEffect(
		() => {
			actions.PlanetsInfo(params.theid);
		},
		[params.theid]
	);

	return (
		!!store.PlanetsDetails && (
			<div>
				<div className="card mb-3 cartaPlanetas">
					<div className="row g-0">
						<div className="col-md-6">
							<img
								src="https://www.tierragamer.com/wp-content/uploads/2017/07/sixteenNine.img_-e1501180658504.jpg"
								className="img-fluid"
								alt=" "
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 card-body">
							<h1 className="card-title">{store.PlanetsDetails.properties.name}</h1>
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
								<h4 style={{ color: "#a41a8c" }}>Name</h4>
								<h4 style={{ color: "#f7f701" }}>{store.PlanetsDetails.properties.name}</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "#a41a8c" }}>Diameter</h4>
								<h4 style={{ color: "#f7f701" }}>{store.PlanetsDetails.properties.diameter}</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "#a41a8c" }}>Gravity</h4>
								<h4 style={{ color: "#f7f701" }}>{store.PlanetsDetails.properties.gravity}</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "#a41a8c" }}>Population</h4>
								<h4 style={{ color: "#f7f701" }}>{store.PlanetsDetails.properties.population}</h4>
							</div>{" "}
							<div className="col">
								<h4 style={{ color: "#a41a8c" }}>Climate</h4>
								<h4 style={{ color: "#f7f701" }}>{store.PlanetsDetails.properties.climate}</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "#a41a8c" }}>Terrain</h4>
								<h4 style={{ color: "#f7f701" }}>{store.PlanetsDetails.properties.terrain}</h4>
							</div>
						</div>
					</div>
				</footer>
			</div>
		)
	);
};
