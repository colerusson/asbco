import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Register from './register/Register'

function App() {
  return (
    <div className="App">
		  <Routes>
			  <Route
				  path='/register'
				  element={
					  <Register/>
				  }
				  exact
			  />
		  </Routes>
      {/* <Register></Register> */}
    </div>
  );
}

export default App;
