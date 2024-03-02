
const Button = ({ text, variant }) => {
	const buttonStyle = {
		backgroundColor: 'var(--purple)',
		color: 'var(--tan)',
		cursor: 'pointer',
		border: 'none',
		borderRadius: '1rem',
		margin: '1rem',
		padding: '0.25rem 0.5rem'
	}

	return (
		<div>
			<button
				style={buttonStyle}
			>
				{text}
			</button>
		</div>
	)
}

export default Button