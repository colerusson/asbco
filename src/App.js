import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Register from './register/Register.jsx';
import RegisterPresenter from './register/RegisterPresenter.js';

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
		  </Routes>
      {/* <Register></Register> */}
    </div>
  );
}

export default App;
