import FontSize from "../../Theme/FontSize";

export default TitlePageSection;

const listId = [];

function TitlePageSection({ sectionInfo }) {
  const id = sectionInfo.id;
  const title = sectionInfo.title;
  const desc = sectionInfo.desc;
  const infos = sectionInfo.infos;

  while (listId.length < infos.length) {
    if (listId.length <= 0) {
      listId.push(1);
    } else {
      listId.push(listId[listId.length - 1] + 1);
    }
  }

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
      {infos.length > 0 &&
        (infos.length > 1 ? (
          <ul style={FontSize.p2Styles}>
            {infos.map((info, index) => (
              <li key={listId[index]}>{info}</li>
            ))}
          </ul>
        ) : (
          <p key={1}>{infos[0]}</p>
        ))}
    </div>
  );
}
