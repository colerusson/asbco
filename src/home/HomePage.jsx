import PostList from "./PostList"
import ProfileHeader from "./ProfileHeader"
import { useState, useEffect } from "react";

import "../index.css"

const HomePage = ({ presenter }) => {
	const [posts, setPosts] = useState([]);
	const [username, setUsername] = useState('dahlia_girl'); // TODO
	const [user, setUser] = useState({}); // TODO

	useEffect(() => {
		async function getPosts() {
			setPosts(await presenter.getPosts(username));
		}
		getPosts();

		async function getUserInfo() {
			const dummyUser = {};
			const user = await presenter.getUserInfo(username);
			setUser(user || dummyUser);
		}
		getUserInfo()
	}, [presenter, username]);
	
	const homePageStyle = {
		backgroundColor: "var(--tan)",
		position: "fixed",
		top: "0",
		left: "0",
		width: "100%",
		height: "100%",
		overflow: "scroll"
	}

	return (
		<div className="homePage" style={homePageStyle}>
			<ProfileHeader user={user} />
			<div>
				<PostList posts={posts}/>
			</div>
		</div>
	)
}

export default HomePage