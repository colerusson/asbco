const MainTitle = ({ text }) => {
	const titleStyle = {
		fontFamily: "Lato, sans-serif",
		fontWeight: "300",
		fontSize: "xxx-large"
	}

	return (
		<div>
			<h1 style={titleStyle}>
				{text}
			</h1>
		</div>
	)
}

export default MainTitle