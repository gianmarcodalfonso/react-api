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
			<header></header>
			<main></main>
		</>
	);
}

export default App;
