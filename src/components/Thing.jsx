import React from "react";
import Item from "./Item";
import Stat from "./Stat";
import Section from "./Section";
import FishInv from "./FishInv";
import Inventory from "./Inventory";
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
							transform: "translate(-50%, 0)",
							marginBottom: "15vh",
						}}
					>
						<tbody>
							<Stat name="Name" data={data.player} />
							<Stat name="Gear Score" data={data.playerScore} />
							<Stat name="Level" data={data.level} />
							<Stat name="Coins" data={data.coins} />
							<Stat name="XP" data={data.xp} />
							<Stat
								name="XP to next level"
								data={data.xpNextLevel}
							/>
							<Stat name="Health" data={data.health} />
							<Stat name="Strength" data={data.strength} />
							<Stat name="Damage" data={data.damage} />
							<Stat
								name="Sea Creature Chance"
								data={data.seaCreaturechance}
							/>
							<Stat
								name="Fishing Speed"
								data={data.fishingSpeed}
							/>
							<Stat name="Loot Luck" data={data.lootLuck} />

							<Section name="Equipment" />

							<Item name="Helmet" data={data.helmet} />
							<Item name="Chestplate" data={data.chestplate} />
							<Item name="Leggings" data={data.leggings} />
							<Item name="Boots" data={data.boots} />
							<Item name="Pet" data={data.pet} />
							<Item
								name="Fishing Rod"
								data={data.fishingRod}
								weapon={true}
							/>

							<Inventory inv={data.inventory} />

							<FishInv fish={data.fish} />
						</tbody>
					</table>
				</>
			);
		}
	}
}
