import React from "react";
import Section from "./Section";
import Item from "./Item";

export default class Fish extends React.Component {
	render() {
		return (
			<>
				<Section name="Inventory" />

				{this.props.inv.length > 0 ? (
					this.props.inv.map((item) => (
						<Item name="Item" data={item} />
					))
				) : (
					<tr>
						<td colSpan="2">Empty inventory!</td>
					</tr>
				)}
			</>
		);
	}
}
