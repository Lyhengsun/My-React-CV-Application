import { useCanvas, useSection } from "../../Contexts";
import FontSize from "../../Theme/FontSize";
import { UserProfileImage } from "../UserProfileImage";

export default TitlePageSection;

function TitlePageSection() {
  const canvas = useCanvas();
  const userImage = canvas.userImage;
  const section = useSection();
  const title = section.title;
  const desc = section.infos[0].infos[0];

  //console.log(infos);

  const styles = {
    margin: "10px 10px 0px",
  };

  return (
    <div style={styles}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginBottom: "10px" }}>
          <UserProfileImage
            userImage={userImage}
            style={{ marginRight: "10px" }}
          />
        </div>
        <div>
          <p style={FontSize.h1Styles}>{title}</p>
          <p style={FontSize.p1Styles}>{desc}</p>
        </div>
      </div>
    </div>
  );
}
