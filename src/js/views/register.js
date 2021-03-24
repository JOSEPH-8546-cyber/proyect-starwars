import React, { useState } from "react";

export const Register = () => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [bio, setBio] = useState("");

	const handlerRegister = e => {
		e.preventDefault();
		if (userName === "" || email === "" || password === "" || bio === "") {
			alert("Datos requeridos para su registro");
			return;
		}

		const data = { username: userName, email: email, password: password, bio: bio };

		fetch("https://3000-salmon-camel-2a40puyp.ws-us03.gitpod.io/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Resultado", data);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div>
			<form onSubmit={e => handlerRegister(e)} className="form2 justify-content-center">
				<div className="col colr">
					<h1>Register to Starwars Block</h1>
					<div className="col-md-6 mt-3 ml-5">
						<input
							type="text"
							className="form-control"
							placeholder="UserName"
							onChange={e => setUserName(e.target.value)}
						/>
					</div>
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
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							placeholder="bio"
							onChange={e => setBio(e.target.value)}
						/>
					</div>
					<div className="form-group col-md-6 mt-3 ml-5">
						<button onClick={handlerRegister} className="btn btn-primary">
							Registrarse
						</button>
					</div>
					<i className="fab fa-jedi-order sword" />
				</div>
				<div />
			</form>
		</div>
	);
};
