import PostPreview from "./PostPreview"

const PostList = ({ posts }) => {
  return (
	<div>
		<div>
			{posts.map((post, idx) => {
				return (
					<div key={idx}>
						<PostPreview post={post}/>
			  		</div>
				);
			})}
		</div>
	</div>
  )
}

export default PostList