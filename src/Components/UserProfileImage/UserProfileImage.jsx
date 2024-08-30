import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { secondaryColor } from "../../Theme/Colors";

export default UserProfileImage;

function UserProfileImage({
  userImage,
  size = "100px",
  iconSize = "3x",
  style = {},
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: secondaryColor(75),
        overflow: "hidden",
        ...style,
      }}
    >
      {userImage ? (
        <img
          src={URL.createObjectURL(userImage)}
          alt=""
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faBan} size={iconSize} />
        </div>
      )}
    </div>
  );
}
