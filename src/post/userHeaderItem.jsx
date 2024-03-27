const UserHeaderItem = ({ user }) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "var(--purple)",
        color: "var(--tan)",
        width: "100vw", // Set width to 100% of viewport width
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80" // Increase the width to make the icon larger
        height="80" // Increase the height to make the icon larger
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-left"
        style={{ cursor: "pointer", margin: "auto", paddingLeft: "15px" }}
        onClick={() => {
          window.history.back();
        }}
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
      <img
        src={user.profilePicture}
        alt={user.username}
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          padding: "25px",
        }}
      />
      <div
        style={{ paddingLeft: "20px", paddingTop: "15px", textAlign: "left" }}
      >
        <h1>{user.firstName + " " + user.lastName}</h1>
        <p style={{ maxWidth: "80%" }}>{user.bio}</p>
      </div>
    </div>
  );
};

export default UserHeaderItem;
