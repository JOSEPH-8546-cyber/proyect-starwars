import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/blockmainstarwars">
				<div>
					<i className="fab fa-galactic-senate" />
				</div>
			</Link>

			<div className="dropdown drop" style={{ marginRight: "50px" }}>
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites <strong>{store.Favorites.length}</strong>
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.Favorites.map((item, index) => {
						return (
							<div
								style={{ justifyContent: "space-between" }}
								className="d-flex contaienr -fluid"
								key={item.uid}>
								<p style={{ marginTop: "20px", marginLeft: "5px" }}>
									<strong>{item.name}</strong>
								</p>
								<button
									style={{ background: "none", border: "none" }}
									onClick={() => actions.delete(item)}>
									<i className="fas fa-times-circle" />
								</button>
							</div>
						);
					})}
				</div>
			</div>
			<Link to="/register">
				<button type="button" className="btn btn-outline-danger register">
					register here
				</button>
			</Link>
			<Link to="/Login">
				<button type="button" className="btn btn-primary">
					Login
				</button>
			</Link>
		</nav>
	);
};
