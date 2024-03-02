// import { useState } from 'react'
import Button from './Button'
import FormCard from './FormCard'
import TextInput from './TextInput'
import MainTitle from './MainTitle'
import ImgUpload from './ImgUpload'
import './register.css'

const Register = ({ presenter }) => {
	// [username, setUsername] = useState('')
	// [password, setPassword] = useState('')
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
				/>
				<TextInput
					label="Password"
					placeholder=""
				/>
				<TextInput
					label="Bio"
					placeholder=""
					type="textarea"
				/>
				<ImgUpload
					label="Profile Picture"
				/>
				<Button
					text="Register"
					variant="primary"
				/>
			</FormCard>
		</div>
	)
}

export default Register

// options for landing/login screen:
// bool is register that is used to choose between register and login
// router with login and register (might be ideal to have the link change?)