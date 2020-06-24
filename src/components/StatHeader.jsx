import React from "react";

export default class StatHeader extends React.Component {
	render() {
		return (
			<tr>
				<th>{this.props.name}</th>
				<th>{this.props.data}</th>
			</tr>
		);
	}
}
