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
	return (

		// box with entry fields 
		// - could maybe just have "isRegister" bool to determine whether to show the bio, profile pic, which buttons
		// button components - probably just have variants and pass in the text
		// text input component? or a submit form component 
		<div className='register'>
			<MainTitle text="Site Title" />
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
					onUpload={(input) => setPicture(input.target.value)}
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

// options for landing/login screen:
// bool is register that is used to choose between register and login
// router with login and register (might be ideal to have the link change?)