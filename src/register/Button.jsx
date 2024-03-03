
const Button = ({ text, onClick, variant='primary' }) => {
	const buttonStyle = {
		backgroundColor: 'var(--purple)',
		color: 'var(--tan)',
		cursor: 'pointer',
		border: 'none',
		borderRadius: '1rem',
		margin: '1rem',
		padding: '0.25rem 0.5rem',
		fontFamily: '"Inter", sans-serif',
		fontSize: 'x-large'
	}

	return (
		<div>
			<button
				style={buttonStyle}
				onClick={onClick}
			>
				{text}
			</button>
		</div>
	)
}

export default Button