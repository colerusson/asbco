const PostPreview = ({ post }) => {
	const postStyle = {
		backgroundColor: "var(--peach)",
		margin: "2em",
		textAlign: "left",
		padding: "0.01em 1em 1em 1em",
		borderRadius: "15px",
		fontSize: "1em"
	}

	return (
		<div className="postPreview" style={postStyle}>
			<h3>
				{post.title}
			</h3>
			<div>
				{post.post_text}
			</div>
		</div>
	)
}

export default PostPreview