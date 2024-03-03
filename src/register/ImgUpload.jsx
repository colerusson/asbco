import { FaUpload } from 'react-icons/fa'

const ImgUpload = ({ label, onUpload }) => {
	const blockStyle = {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'left'
	}

	const labelStyle = {
		fontSize: 'x-small',
		paddingTop: '0.25rem',
		textAlign: 'left'
	}

	const iconStyle = {
		backgroundColor: 'var(--peach)',
		color: 'var(--purple)', 
		cursor: 'pointer',
		border: '1px solid black',
		padding: '0.25rem',
		width: '25%'
	}

	return (
		<div style={blockStyle}>
			<div style={labelStyle}>{label}</div>
			<FaUpload
				style={iconStyle}
			/>
		</div>
	)
}

export default ImgUpload