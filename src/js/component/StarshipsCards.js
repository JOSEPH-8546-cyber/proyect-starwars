import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const StarshipsCards = props => {
	const { store, actions } = useContext(Context);

	return (
		!!store.Starships &&
		store.Starships.results.map((item, index) => {
			return (
				<div key={item.uid}>
					<div className="col">
						<div className="card cartaInicio">
							<img
								src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/pyr/55673ed52a98bb41703ed903/dia-star-wars.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<Link className="btn btn-primary" to={"/StarshipsDetails/" + item.uid}>
									learn more
								</Link>
								<button
									type="button"
									className="btn btn-outline-warning"
									onClick={() => {
										actions.addFavorites(item);
									}}>
									<i className="fab fa-galactic-republic" />
								</button>
							</div>
						</div>
					</div>
				</div>
			);
		})
	);
};
