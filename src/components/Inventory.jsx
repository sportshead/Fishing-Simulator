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
						<Item
							data={item}
							name={
								item.type === "boots"
									? "Boots"
									: item.type === "helmet"
									? "Helmet"
									: item.type === "leggings"
									? "Leggings"
									: item.type === "chestplate"
									? "Chestplate"
									: item.type === "fishingRod"
									? "Fishing Rod"
									: item.type === "pet"
									? "Pet"
									: "Item"
							}
							weapon={item.type === "fishingRod"}
						/>
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
