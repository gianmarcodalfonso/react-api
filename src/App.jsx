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
							return (
								<div key={actress.id} className="card">
									<img src={actress.image} className="card-img-top" alt="..." />
									<div className="card-body">
										<p className="card-text">{actress.name}</p>
										<p className="card-text">{actress.birth_year}</p>
										<p className="card-text">{actress.nationality}</p>
										<p className="card-text">{actress.biography}</p>
										<p className="card-text">{actress.awards}</p>
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
