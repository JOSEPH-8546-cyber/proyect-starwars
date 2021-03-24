import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="contenedor1">
			<h1 className="h1">Welcome to my StarWars Block</h1>
			<div className="link">
				<Link to={"/blockmainstarwars"}>Click to start</Link>
			</div>

			<hr />

			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
					<li data-target="#carouselExampleIndicators" data-slide-to="1" />
					<li data-target="#carouselExampleIndicators" data-slide-to="2" />
					<li data-target="#carouselExampleIndicators" data-slide-to="3" />
					<li data-target="#carouselExampleIndicators" data-slide-to="4" />
					<li data-target="#carouselExampleIndicators" data-slide-to="5" />
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://gamespot1.cbsistatic.com/uploads/original/1179/11799911/3640678-sw7.png"
							className="d-block w-100"
							alt="not found"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://steamuserimages-a.akamaihd.net/ugc/941698084739585707/B06FED2ED2B8CF3F7E7EFF2F20FB9777EBAC1C28/"
							className="d-block w-100"
							alt="image not found"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://c.wallhere.com/photos/ee/a8/Star_Wars_George_Lucas_illustration_movie_characters_movie_poster_fan_art_fictional_fictional_character-1865821.jpg!d"
							className="d-block w-100"
							alt="image not found"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://i.pinimg.com/originals/0c/c8/88/0cc88805f2234a9c3b1673ace48d6f63.jpg"
							className="d-block w-100"
							alt="image not found"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://i.pinimg.com/originals/9c/9a/c4/9c9ac4c97a81aa6f198a5bc4e288bf22.jpg"
							className="d-block w-100"
							alt="image not found"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://www.fondoshd.mx/wallpapers/resoluciones/14/star-wars-fiction-planet_1440x900_3097.jpg"
							className="d-block w-100"
							alt="image not found"
						/>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
};
