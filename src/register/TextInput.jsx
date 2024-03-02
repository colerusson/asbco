
const TextInput = ({ label, placeholder, type }) => {
	const blockStyle = {
		width: 'fit-content'
	}
	
	const labelStyle = {
		fontSize: 'x-small',
		paddingTop: '0.25rem',
		textAlign: 'left'
	}

	const inputStyle = {
		backgroundColor: 'var(--peach)',
		border: 'none'
	}

	return (
		<div style={blockStyle}>
			<div style={labelStyle}>{label}</div>
			{type === "text" 
				&& <input
					type="text"
					style={inputStyle} 
					placeholder={placeholder}
				/>}
			{type === "textarea" 
				&& <textarea
					style={inputStyle}
					placeholder={placeholder}
				/>}
		</div>
	)
}

TextInput.defaultProps = {
	type: "text"
}

export default TextInput