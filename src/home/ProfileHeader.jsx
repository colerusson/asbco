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
	const dummyPicture = "https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png"

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