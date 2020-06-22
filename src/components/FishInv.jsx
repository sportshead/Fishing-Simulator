import React from "react";
import Section from "./Section";
import Fish from "./Fish";

export default class FishInv extends React.Component {
	render() {
		return (
			<>
				<Section name="Fish" />

				{this.props.fish.length > 0 ? (
					this.props.fish.map((fish) => <Fish data={fish} />)
				) : (
					<tr>
						<td colSpan="2">No Fish!</td>
					</tr>
				)}
			</>
		);
	}
}
