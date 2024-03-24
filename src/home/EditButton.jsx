import { FaRegPenToSquare } from 'react-icons/fa6'

const EditButton = () => {
	const iconStyle = {
		backgroundColor: 'var(--peach)',
		borderRadius: "50%",
		color: 'var(--pink)',
		cursor: 'pointer',
		fontSize: "4em",
		marginTop: "0.3em",
		marginLeft: "0.3em",
		padding: '20px',
		width: '1em',
		height: '1em',
		"--hover-bg": 'var(--pink)',
		"--hover-color": 'var(--tan)'
	}

	return (
		<div className="hover-button" style={iconStyle}>
			<FaRegPenToSquare/>
		</div>
	)
}

export default EditButton