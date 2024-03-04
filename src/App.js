import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './register/Register.jsx';
import RegisterPresenter from './register/registerPresenter.js';
import Login from './login/login.jsx';
import LoginPresenter from './login/LoginPresenter.js';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path='/register'
					element={
						<Register
							presenter={new RegisterPresenter()}
						/>
					}
					exact
				/>
				<Route
					path='/login'
					element={
						<Login
							presenter={new LoginPresenter()}
						/>
					}
					exact
				/>
			</Routes>
			{/* <Register></Register> */}
		</div>
	);
}

export default App;
