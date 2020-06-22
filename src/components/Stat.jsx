import React from "react";

export default class Stat extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.data}</td>
			</tr>
		);
	}
}
