import { FaUpload } from 'react-icons/fa'

const ImgUpload = ({ label, onUpload, styleProp }) => {
	const blockStyle = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'left',
		...styleProp
	}

	const labelStyle = {
		fontSize: 'medium',
		paddingTop: '0.25rem',
		textAlign: 'left'
	}

	const iconStyle = {
		backgroundColor: 'var(--peach)',
		color: 'var(--purple)', 
		cursor: 'pointer',
		border: '1px solid var(--purple)',
		padding: '0.25rem',
		width: '5rem',
		height: '5rem'
	}

	return (
		<div style={blockStyle}>
			<div style={labelStyle}>{label}</div>
			<FaUpload
				style={iconStyle}
				onClick={() => onUpload()}
			/>
		</div>
	)
}

export default ImgUpload