import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handlerLogin = e => {
		e.prevenDefault();
		if (email === "" || password === "") {
			alert("Datos requeridos para iniciar sesion");
		}

		const data = { email: email, password: password };

		fetch("https://salmon-camel-2a40puyp.ws-us03.gitpod.io/starSession", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				if (data.successful) {
					sessionStorage.setItem("u_token", data.token);
					setRedirect(true);
				}
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div>
			<form onSubmit={e => handlerLogin(e)} className="form2 justify-content-center">
				<div className="col colr">
					<h1>Login to Starwars Block</h1>
					<div className="form-group col-md-6 mt-3 ml-5 ">
						<input
							type="email"
							className="form-control"
							id="inputEmail4"
							placeholder="Email"
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group col-md-6 mt-3 ml-5">
						<input
							type="password"
							className="form-control"
							id="inputPassword4"
							placeholder="password"
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div className="form-group col-md-6 mt-3 ml-5">
						<button className="btn btn-primary" onClick={handlerLogin}>
							Started
						</button>
					</div>
					<i className="fab fa-jedi-order sword1" />
				</div>
				<div />
			</form>
			{redirect ? <Redirect to="/blockmainstarwars" /> : ""}
		</div>
	);
};
