import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { PlanetsDates } from "./views/Detailsplanets";
import { CharactersDates } from "./views/DetailsCharacters";
import { StarshipsDates } from "./views/StarshipsDetails";
import { BlockMainStarWars } from "./views/blockmainstarwars";
import { Register } from "./views/register";
import { Login } from "./views/Login";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/blockmainstarwars">
						<BlockMainStarWars />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/Login">
						<Login />
					</Route>
					<Route exact path="/Detailsplanets/:theid">
						<PlanetsDates />
					</Route>
					<Route exact path="/DetailsCharacters/:theid">
						<CharactersDates />
					</Route>
					<Route exact path="/StarshipsDetails/:theid">
						<StarshipsDates />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
