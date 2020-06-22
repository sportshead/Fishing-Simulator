import React from "react";

export default class Item extends React.Component {
	render() {
		return (
			<>
				<tr>
					<th>{this.props.name}</th>
					<th>
						{this.props.data.name} - {this.props.data.description}
					</th>
				</tr>
				{this.props.weapon ? (
					<tr>
						<td>Damage</td>
						<td>{this.props.data.damage}</td>
					</tr>
				) : (
					<tr>
						<td>Health</td>
						<td>{this.props.data.health}</td>
					</tr>
				)}

				<tr>
					<td>Strength</td>
					<td>{this.props.data.strength}</td>
				</tr>
				<tr>
					<td>Sell Price</td>
					<td>{this.props.data.sellValue}</td>
				</tr>
			</>
		);
	}
}
