import PostItem from "./postItem";
import UserHeaderItem from "./userHeaderItem";

const DisplayPost = ({ presenter }) => {
  const post = presenter.getPost();
  return (
    <div
      style={{
        backgroundColor: "var(--tan)",
        minHeight: "100vh",
        paddingBottom: "20px",
      }}
    >
      {/* Display the user info. */}
      <UserHeaderItem user={post.user} />

      {/* Display the post. */}
      <PostItem post={post} />
    </div>
  );
};

export default DisplayPost;
