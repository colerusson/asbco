import ProfileBio from "./ProfileBio"
import ProfilePicture from "./ProfilePicture"

const ProfileHeader = ({ user }) => {
	const headerStyle = {
		display: "flex",
		backgroundColor: "var(--purple)",
		color: "var(--tan)",
		padding: "0.5em 1em 1em 1em",
		textAlign: "left",
	}

	const nameStyle = {
		fontSize: "2rem"
	}

	const dummyBio = "🌸 Blooming enthusiast 🌿 | Lover of all things floral 🌼 | Embracing the beauty of nature, one petal at a time 🌹 | Dreaming in shades of pink and green 🌿| Let's bloom together! 🌸"
	const dummyPicture = "https://th.bing.com/th/id/R.f5b29666e4b5d2a210728222f9db8b4a?rik=4LXsUtP2XUDwRw&riu=http%3a%2f%2fimages.allpeoplequilt.mdpcdn.com%2fsites%2fallpeoplequilt.com%2ffiles%2fstyles%2ffacebook_og_image%2fpublic%2fapq311724_square_insquare_convertedbad_600.jpg%3fitok%3djH_ifM6W&ehk=lGyDxOJoOzsG7ngHrtMQNAcHBgtRdcDdEmqD0NXzVJI%3d&risl=&pid=ImgRaw&r=0"

	return (
		<div className="profileHeader" style={headerStyle}>
			<ProfilePicture imgUrl={user.profilePicture || dummyPicture}/>
			<div>
				<p style={nameStyle}>
					{user.first_name + " " + user.last_name}
				</p>
				<ProfileBio bio={user.bio || dummyBio}/>
			</div>
		</div>
	)
}

export default ProfileHeader