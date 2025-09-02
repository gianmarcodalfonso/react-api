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
			<div className="container">
				<div className="row">
					<div className="col-6 col-md-4">
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
								<div key={id} className="card">
									<img src={image} className="card-img-top" alt="..." />
									<div className="card-body">
										<p className="card-text">{name}</p>
										<p className="card-text">{birth_year}</p>
										<p className="card-text">{nationality}</p>
										<p className="card-text">{biography}</p>
										<p className="card-text">{awards}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
