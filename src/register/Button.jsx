
const Button = ({ text, onClick, variant = 'primary' }) => {
	const primaryButtonStyle = {
		backgroundColor: 'var(--purple)',
		color: 'var(--tan)',
		cursor: 'pointer',
		border: 'none',
		borderRadius: '1rem',
		margin: '1rem',
		padding: '0.25rem 0.75rem',
		fontFamily: '"Inter", sans-serif',
		fontSize: 'x-large'
	}

	const secondaryButtonStyle = {
		backgroundColor: 'var(--pink)',
		color: 'var(--tan)',
		cursor: 'pointer',
		border: 'none',
		borderRadius: '1rem',
		margin: '.5rem',
		padding: '0.25rem 0.75rem',
		fontFamily: '"Inter", sans-serif',
		fontSize: 'medium'
	}

	return (
		<div>
			<button
				style={variant === 'primary' ? primaryButtonStyle : secondaryButtonStyle}
				onClick={onClick}
			>
				{text}
			</button>
		</div>
	)
}

export default Button