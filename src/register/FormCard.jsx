const FormCard = ({ children }) => {
	const formCardStyle = {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'var(--tan)',
		margin: '1rem',
		padding: '4rem',
		width: "33%"
	}

	return (
		<div
			style={formCardStyle}
		>
			{children}
		</div>
	)
}

export default FormCard