import React from "react";
import axios from "axios";

export default class Thing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			searched: false,
			search: "",
			data: {},
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		console.log("submit");
		this.setState({ searched: true, isLoaded: false });
		/*fetch(
			"http://107.191.58.9:5000/find/" +
				encodeURIComponent(this.state.search),
			{
				method: "GET",
				mode: "no-cors",
			}
		)
			.then((res) => res.json())
			.then((data) => {
				this.setState({ data: data, isLoaded: true });
			})
			.catch((err) => {
				console.error(err);
				this.setState({ error: err });
			});*/

		axios
			.get(
				"http://107.191.58.9:5000/find/" +
					encodeURIComponent(this.state.search)
			)
			.then((res) => {
				console.log(res.data);
				this.setState({ data: res.data, isLoaded: true });
			})
			.catch((err) => {
				console.error(err);
				this.setState({ error: err });
			});

		e.preventDefault();
	}

	handleChange(e) {
		this.setState({ search: e.target.value });
	}

	render() {
		const { error, isLoaded, data, searched } = this.state;
		if (error) {
			return (
				<>
					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							value={this.state.search}
							onChange={this.handleChange}
						/>
						<input type="submit" value="Submit" />
					</form>
					<h2 className="error" style={{ color: "red" }}>
						<b>Error: {error.message}</b>
					</h2>
				</>
			);
		} else if (!searched) {
			return (
				<>
					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							value={this.state.search}
							onChange={this.handleChange}
						/>
						<input type="submit" value="Submit" />
					</form>
					<h2 className="instructions" style={{ color: "white" }}>
						Enter your discord name and tag WITHOUT the hashtag (If
						your name is "Joe#1234", write "Joe1234") to find your
						profile information! It is case sensitive.
					</h2>
				</>
			);
		} else if (!isLoaded) {
			return (
				<>
					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							value={this.state.search}
							onChange={this.handleChange}
						/>
						<input type="submit" value="Submit" />
					</form>
					<h2 className="loading">
						Loading... (this might take a while)
					</h2>
				</>
			);
		} else {
			if (data.message) {
				if (data.message === "invalid") {
					return (
						<>
							<form onSubmit={this.handleSubmit}>
								<input
									type="text"
									value={this.state.search}
									onChange={this.handleChange}
								/>
								<input type="submit" value="Submit" />
							</form>
							<h2
								className="UserNotFound error"
								style={{ color: "red" }}
							>
								<b>Error: User Not Found</b>
							</h2>
						</>
					);
				}
			}
			return (
				<>
					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							value={this.state.search}
							onChange={this.handleChange}
						/>
						<input type="submit" value="Submit" />
					</form>
					<table
						className="Thing"
						style={{
							position: "absolute",
							left: "50%",
							top: "50%",
							transform: "translate(-50%, -50%)",
						}}
					>
						<tr>
							<td>Name</td>
							<td>{data.player}</td>
						</tr>
						{/* <tr>
							<td></td>
							<td>{data.}</td>
						</tr> */}
						<tr>
							<td>Gear Score</td>
							<td>{data.playerScore}</td>
						</tr>
						<tr>
							<td>Level</td>
							<td>{data.level}</td>
						</tr>
						<tr>
							<td>Coins</td>
							<td>{data.coins}</td>
						</tr>
						<tr>
							<td>XP</td>
							<td>{data.xp}</td>
						</tr>
						<tr>
							<td>XP to next level</td>
							<td>{data.xpNextLevel}</td>
						</tr>
						<tr>
							<td>Health</td>
							<td>{data.health}</td>
						</tr>
						<tr>
							<td>Strength</td>
							<td>{data.strength}</td>
						</tr>
						<tr>
							<td>Damage</td>
							<td>{data.damage}</td>
						</tr>
						<tr>
							<td>Sea Creature Chance</td>
							<td>{data.seaCreaturechance}</td>
						</tr>
						<tr>
							<td>Fishing Speed</td>
							<td>{data.fishingSpeed}</td>
						</tr>
						<tr>
							<td>Loot Luck</td>
							<td>{data.lootLuck}</td>
						</tr>
						<tr>
							<th>
								<h3>
									<b>Equipment</b>
								</h3>
							</th>
						</tr>
						<tr>
							<th>Helmet</th>
							<th>
								{data.helmet.name} - {data.helmet.description}
							</th>
						</tr>
						<tr>
							<td>Health</td>
							<td>{data.helmet.health}</td>
						</tr>
						<tr>
							<td>Strength</td>
							<td>{data.helmet.strength}</td>
						</tr>
						<tr>
							<td>Sell Price</td>
							<td>{data.helmet.sellValue}</td>
						</tr>

						<tr>
							<th>Chestplate</th>
							<th>
								{data.chestplate.name} -{" "}
								{data.chestplate.description}
							</th>
						</tr>
						<tr>
							<td>Health</td>
							<td>{data.chestplate.health}</td>
						</tr>
						<tr>
							<td>Strength</td>
							<td>{data.chestplate.strength}</td>
						</tr>
						<tr>
							<td>Sell Price</td>
							<td>{data.chestplate.sellValue}</td>
						</tr>

						<tr>
							<th>Leggings</th>
							<th>
								{data.leggings.name} -{" "}
								{data.leggings.description}
							</th>
						</tr>
						<tr>
							<td>Health</td>
							<td>{data.leggings.health}</td>
						</tr>
						<tr>
							<td>Strength</td>
							<td>{data.leggings.strength}</td>
						</tr>
						<tr>
							<td>Sell Price</td>
							<td>{data.leggings.sellValue}</td>
						</tr>

						<tr>
							<th>Boots</th>
							<th>
								{data.boots.name} - {data.boots.description}
							</th>
						</tr>
						<tr>
							<td>Health</td>
							<td>{data.boots.health}</td>
						</tr>
						<tr>
							<td>Strength</td>
							<td>{data.boots.strength}</td>
						</tr>
						<tr>
							<td>Sell Price</td>
							<td>{data.boots.sellValue}</td>
						</tr>

						<tr>
							<th>Pet</th>
							<th>
								{data.pet[0].name} - {data.pet[0].description}
							</th>
						</tr>
						<tr>
							<td>Health</td>
							<td>{data.pet[0].health}</td>
						</tr>
						<tr>
							<td>Strength</td>
							<td>{data.pet[0].strength}</td>
						</tr>
						<tr>
							<td>Sell Price</td>
							<td>{data.pet[0].sellValue}</td>
						</tr>

						<tr>
							<th>Fishing Rod</th>
							<th>
								{data.fishingRod[0].name} -{" "}
								{data.fishingRod[0].description}
							</th>
						</tr>
						<tr>
							<td>Health</td>
							<td>{data.fishingRod[0].health}</td>
						</tr>
						<tr>
							<td>Strength</td>
							<td>{data.fishingRod[0].strength}</td>
						</tr>
						<tr>
							<td>Sell Price</td>
							<td>{data.fishingRod[0].sellValue}</td>
						</tr>
					</table>
				</>
			);
		}
	}
}
