import PostItem from "./postItem";
import UserHeaderItem from "./userHeaderItem";

const DisplayPost = ({ presenter }) => {
  const getPost = async (presenter) => {
    return await presenter.getPost();
  };

  const post = getPost(presenter);

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
