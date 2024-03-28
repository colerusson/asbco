import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./register/Register.jsx";
import RegisterPresenter from "./register/registerPresenter.js";
import Login from "./login/login.jsx";
import LoginPresenter from "./login/LoginPresenter.js";
import HomePage from "./home/HomePage.jsx";
import HomePagePresenter from "./home/HomePagePresenter.js";
import CreatePost from "./post/CreatePost.jsx";
import CreatePostPresenter from "./post/CreatePostPresenter.js";
import DisplayPost from "./post/DisplayPost.jsx";
import DisplayPostPresenter from "./post/DisplayPostPresenter.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={<HomePage presenter={new HomePagePresenter()} />}
          exact
        />
        <Route
          path="/register"
          element={<Register presenter={new RegisterPresenter()} />}
          exact
        />
        <Route
          path="/"
          element={<Login presenter={new LoginPresenter()} />}
          exact
        />
        <Route
          path="/create-post"
          element={<CreatePost presenter={new CreatePostPresenter()} />}
          exact
        />
        <Route
          path="/display-post"
          element={<DisplayPost presenter={new DisplayPostPresenter()} />}
          exact
        />
      </Routes>
    </div>
  );
}

export default App;
