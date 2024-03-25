import { useState } from 'react'
import FormCard from '../register/FormCard'
import TextInput from '../register/TextInput'
import MainTitle from '../register/MainTitle'
import Button from '../register/Button'
import '../register/register.css'

const Login = ({ presenter }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')


	const style = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100vw'
	}

	return (
		<div className='login' style={style}>
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
					type="password"
					onChange={(input) => setPassword(input.target.value)}
				/>
				<Button
					text="Login"
					variant="primary"
					onClick={() => { presenter.login(username, password) }}
				/>
				<Button
					text="Register"
					variant="secondary"
					onClick={() => { window.location.href = '/register' }}
				/>
			</FormCard>
		</div>
	)
}

export default Login
