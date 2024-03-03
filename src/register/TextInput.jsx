
const TextInput = ({ label, placeholder, type, onChange }) => {
	const blockStyle = {
		width: '100%'
	}
	
	const labelStyle = {
		fontSize: 'medium',
		paddingTop: '0.25rem',
		textAlign: 'left'
	}

	const inputStyle = {
		backgroundColor: 'var(--peach)',
		border: 'none',
		width: '100%',
		height: type === "text" ? '1.5rem' : 'none'
	}

	return (
		<div style={blockStyle}>
			<div style={labelStyle}>{label}</div>
			{type === "text" 
				&& <input
					type="text"
					style={inputStyle} 
					placeholder={placeholder}
					onChange={onChange}
				/>}
			{type === "textarea" 
				&& <textarea
					rows={5}
					style={inputStyle}
					placeholder={placeholder}
					onChange={onChange}
				/>}
		</div>
	)
}

TextInput.defaultProps = {
	type: "text"
}

export default TextInput