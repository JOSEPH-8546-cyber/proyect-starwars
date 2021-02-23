import React, { useContext } from "react";
import { PlanetsCards } from "../component/planetsCards";
import { CharactersCards } from "../component/CharactersCards";
import { StarshipsCards } from "../component/StarshipsCards";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	return (
		<div className="container items-left">
			<div className="d-flex flex-column w-100">
				<div>
					<h1>Characters</h1>
				</div>

				<hr />

				<div>
					<div
						className="col-1 text-center"
						style={{ color: "#40f2fe", cursor: "pointer" }}
						onClick={() => {
							actions.loadPlanets(store.Planets.previous);
						}}>
						<i className="fas fa-arrow-circle-left" />
					</div>
					<div
						className="col-1 text-center"
						style={{ color: "#51f502", cursor: "pointer" }}
						onClick={() => {
							actions.loadPlanets(store.Planets.next);
						}}>
						<i className="fas fa-arrow-circle-right" />
					</div>
					<div className="d-flex w-100 items-content">
						<PlanetsCards />
					</div>
					<div
						className="col-1 text-center"
						style={{ color: "#40f2fe", cursor: "pointer" }}
						onClick={() => {
							actions.loadCharacters(store.Characters.previous);
						}}>
						<i className="fas fa-arrow-circle-left" />
					</div>
					<div
						className="col-1 text-center"
						style={{ color: "#51f502", cursor: "pointer" }}
						onClick={() => {
							actions.loadCharacters(store.Characters.next);
						}}>
						<i className="fas fa-arrow-circle-right" />
					</div>

					<div className="d-flex w-100 items-content">
						<CharactersCards />
					</div>
					<div
						className="col-1 text-center"
						style={{ color: "#40f2fe", cursor: "pointer" }}
						onClick={() => {
							actions.loadStarships(store.Starships.previous);
						}}>
						<i className="fas fa-arrow-circle-left" />
					</div>
					<div
						className="col-1 text-center"
						style={{ color: "#51f502", cursor: "pointer" }}
						onClick={() => {
							actions.loadStarships(store.Starships.next);
						}}>
						<i className="fas fa-arrow-circle-right" />
					</div>

					<div className="d-flex w-100 items-content">
						<StarshipsCards />
					</div>
				</div>
			</div>
		</div>
	);
};
