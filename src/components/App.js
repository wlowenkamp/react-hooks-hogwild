import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="hog-cards">
				{hogs.map((hog) => (
					<div key={hog.name} className="hog-card">
						<img src={hog.image} alt={hog.name} />
						<p>{hog.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}


export default App;
