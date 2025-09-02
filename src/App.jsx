import { useState, useEffect } from "react";
import axios from "axios";

const actressesLink = `https://lanciweb.github.io/demo/api/actresses/`;

function App() {
	const [actresses, setActresses] = useState([]);
	const fetchActressesList = () => {
		axios.get(actressesLink).then((res) => {
			console.log(res.data);
			setActresses(res.data);
		});
	};

	useEffect(fetchActressesList, []);

	return (
		<>
			<header className="bg-darkblue py-2">
				<h1>Wonderful cast</h1>
			</header>
			<main>
				<div className="container">
					<div className="row">
						{actresses.map((actress) => {
							const {
								id,
								image,
								name,
								birth_year,
								nationality,
								biography,
								awards,
							} = actress;
							return (
								<div className="col-6 col-md-4">
									<div key={id} className="card">
										<img src={image} className="card-img-top p-3" alt="..." />
										<div className="card-body">
											<p className="card-text">{name}</p>
											<p className="card-text">{birth_year}</p>
											<p className="card-text">{nationality}</p>
											<p className="card-text">{biography}</p>
											<p className="card-text">{awards}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
