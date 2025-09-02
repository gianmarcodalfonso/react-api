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
			<header className="bg-darkblue py-2 mb-3 text-light">
				<h1 className="text-center">Wonderful cast</h1>
			</header>
			<main>
				<h2 className="text-center">Actresses</h2>
				<p className="text-center">List of actresses fetched from an API</p>
				<div className="container">
					<div className="row align-items-stretch">
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
								<div className="col-12 col-md-6 col-lg-4 my-2">
									<div key={id} className="card text-light bg-darkblue h-100">
										<div className="card-body">
											<h3 className="card-text">{name}</h3>
											<img src={image} className="card-img-top p-2" alt="..." />
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
