import { useState } from 'react'
import Button from './Button'
import FormCard from './FormCard'
import TextInput from './TextInput'
import MainTitle from './MainTitle'
import ImgUpload from './ImgUpload'
import './register.css'

const Register = ({ presenter }) => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [picture, setPicture] = useState('')

	const style = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100vw'
	}

	return (
		<div className='register' style={style}>
			<MainTitle text="Anti-Scroll" />
			<FormCard>
				<TextInput
					label="First Name"
					placeholder=""
					type="text"
					onChange={(input) => setFirstName(input.target.value)}
				/>
				<TextInput
					label="Last Name"
					placeholder=""
					type="text"
					onChange={(input) => setLastName(input.target.value)}
				/>
				<TextInput
					label="Username"
					placeholder=""
					type="text"
					onChange={(input) => setUsername(input.target.value)}
				/>
				<TextInput
					label="Password"
					placeholder=""
					type="password"
					onChange={(input) => setPassword(input.target.value)}
				/>
				<ImgUpload
					label="Profile Picture"
					onUpload={(input) => setPicture(input)}
				/>
				<Button
					text="Register"
					variant="primary"
					onClick={() => {presenter.register(firstName, lastName, username, password, picture)}}
				/>
			</FormCard>
		</div>
	)
}

export default Register