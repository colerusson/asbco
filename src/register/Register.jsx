import { useState } from 'react'
import Button from './Button'
import FormCard from './FormCard'
import TextInput from './TextInput'
import MainTitle from './MainTitle'
import ImgUpload from './ImgUpload'
import './register.css'

const Register = ({ presenter }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [bio, setBio] = useState('')
	const [picture, setPicture] = useState()

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
					label="Username"
					placeholder=""
					onChange={(input) => setUsername(input.target.value)}
				/>
				<TextInput
					label="Password"
					placeholder=""
					onChange={(input) => setPassword(input.target.value)}
				/>
				<TextInput
					label="Bio"
					placeholder=""
					type="textarea"
					onChange={(input) => setBio(input.target.value)}
				/>
				<ImgUpload
					label="Profile Picture"
					onUpload={(input) => setPicture(input)}
				/>
				<Button
					text="Register"
					variant="primary"
					onClick={() => {presenter.register(username, password, bio, picture)}}
				/>
			</FormCard>
		</div>
	)
}

export default Register