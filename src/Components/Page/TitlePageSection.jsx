import { useCanvas, useSection } from "../../Contexts";
import FontSize from "../../Theme/FontSize";

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
          <div
            style={{
              borderRadius: "50%",
              width: "100px",
              height: "100px",
              backgroundColor: "red",
              marginRight: "10px",
              overflow: "hidden",
            }}
          >
            {userImage && (
              <img
                src={URL.createObjectURL(userImage)}
                alt=""
                width={"100%"}
                height={"100%"}
                style={{
                  display: "block",
                  textAlign: "center",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
        </div>
        <div>
          <p style={FontSize.h1Styles}>{title}</p>
          <p style={FontSize.p1Styles}>{desc}</p>
        </div>
      </div>
    </div>
  );
}
