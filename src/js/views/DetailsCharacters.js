import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharactersDates = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(
		() => {
			actions.CharactersInfo(params.theid);
		},
		[params.theid]
	);

	return (
		!!store.CharactersDetails && (
			<div>
				<div className="card mb-3 cartaPersonajes">
					<div className="row g-0">
						<div className="col-md-6">
							<img
								src="https://www.cinemascomics.com/wp-content/uploads/2018/11/star-wars-9-personaje-trilogia-secuelas-2019.jpg"
								className="img-fluid"
								alt=" "
							/>
						</div>

						<div className="col-md-6 card-body">
							<h1 className="card-title">{store.CharactersDetails.properties.name}</h1>
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
								<h4 style={{ color: "#009cf6" }}>Name</h4>
								<h4 style={{ color: "#71c609" }}>{store.CharactersDetails.properties.name}</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "#009cf6" }}>Birth Year</h4>
								<h4 style={{ color: "#71c609" }}>{store.CharactersDetails.properties.birth_year}</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "#009cf6" }}>Gender</h4>
								<h4 style={{ color: "#71c609" }}>{store.CharactersDetails.properties.gender}</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "#009cf6" }}>Height</h4>
								<h4 style={{ color: "#71c609" }}>{store.CharactersDetails.properties.height}</h4>
							</div>{" "}
							<div className="col">
								<h4 style={{ color: "#009cf6" }}>Skin color</h4>
								<h4 style={{ color: "#71c609" }}>{store.CharactersDetails.properties.skin_color}</h4>
							</div>
							<div className="col">
								<h4 style={{ color: "#009cf6" }}>Eye color</h4>
								<h4 style={{ color: "#71c609" }}>{store.CharactersDetails.properties.eye_color}</h4>
							</div>
						</div>
					</div>
				</footer>
			</div>
		)
	);
};
