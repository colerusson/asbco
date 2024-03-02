const FormCard = ({ children }) => {
	const formCardStyle = {
		backgroundColor: 'var(--tan)',
		margin: '1rem',
		padding: '1rem',
		width: 'fit-content'
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