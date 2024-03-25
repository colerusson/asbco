const ProfilePicture = ({imgUrl}) => {
  const profilePictureStyle = {
    height:  "7em",
    margin: "1em",
  }

  const imageStyle = {
    maxHeight: "100%",
    borderRadius: "100%"

  }

  return (
	  <div className="profilePicture" style={profilePictureStyle}>
      <img src={imgUrl} style={imageStyle}></img>
    </div>
  )
}

export default ProfilePicture