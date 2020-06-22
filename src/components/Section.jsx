import React from "react";

export default class Section extends React.Component {
	render() {
		return (
			<tr>
				<th
					colSpan="2"
					style={{
						textAlign: "center",
					}}
				>
					<h2>{this.props.name}</h2>
				</th>
			</tr>
		);
	}
}
