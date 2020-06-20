import React from "react";

export default class Thing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			data: {},
		};
	}

	componentDidMount() {
		// eslint-disable-next-line no-unused-vars
		const ok = {
			pet: "leg dragon lvl 100 pog",
			username: "sportzpikachu",
			money: "10000000000000",
		};
		// eslint-disable-next-line no-unused-vars
		const user = { message: "invalid" };
		new Promise((res, rej) => setTimeout(res(ok), 10000)).then((result) => {
			this.setState({
				isLoaded: true,
				data: result,
			});
		});
		// replace with api call ^
	}

	render() {
		const { error, isLoaded, data } = this.state;
		if (error) {
			return <div className="Thing">Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div className="Thing">Loading...</div>;
		} else {
			if (data.message) {
				if (data.message === "invalid") {
					return (
						<h2 className="UserNotFound" style={{ color: "red" }}>
							<b>Error: User Not Found</b>
						</h2>
					);
				}
			}
			return (
				<table
					className="Thing"
					style={{
						position: "absolute",
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%)",
					}}
				>
					{Object.keys(data).map((key) => (
						<tr>
							<td>{key}</td>
							<td>{data[key]}</td>
						</tr>
					))}
				</table>
			);
		}
	}
}
