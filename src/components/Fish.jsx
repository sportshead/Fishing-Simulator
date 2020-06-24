import React from "react";
import Stat from "./Stat";
import StatHeader from "./StatHeader";

export default class Fish extends React.Component {
	render() {
		return (
			<>
				<StatHeader name="Name" data={this.props.data.name} />
				<Stat name="Amount" data={this.props.data.amount} />
				<Stat name="Sell Price" data={this.props.data.sellValue} />
			</>
		);
	}
}
