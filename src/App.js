import React, { useState } from "react";
import Thing from "./components/Thing.jsx"
import "./App.css";

function App() {
	const [isHover, setHover] = useState(false);
	return (
		<div className="App">
			<header className="App-header">
				<h1>Skyblock Stock Brokers Fishing Simulator</h1>
			</header>
			<Thing />
			<footer className="App-footer">
				<h3 className="discordHover" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>Join our discord!</h3>
			</footer>
			<iframe onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} style={{ display: isHover ? "block" : "none" }} title="Join our discord at discord.gg/ssb!" src="https://discordapp.com/widget?id=715801930877894706&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" className="discordPopup"></iframe>
			{/* <div className="discordHitbox" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}></div> */}
		</div>
	);
}

export default App;
