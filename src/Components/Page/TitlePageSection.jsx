import FontSize from "../../Theme/FontSize";

export default TitlePageSection;

function TitlePageSection({ sectionInfo }) {
  const id = sectionInfo.id;
  const title = sectionInfo.title;
  const desc = sectionInfo.infos[0].infos[0];

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
              aspectRatio: "1",
              backgroundColor: "red",
              marginRight: "10px",
            }}
          ></div>
        </div>
        <div>
          <p style={FontSize.h1Styles}>{title}</p>
          <p style={FontSize.p1Styles}>{desc}</p>
        </div>
      </div>
    </div>
  );
}
