import FontSize from "../../Theme/FontSize";

export default PageSection;

const listId = [];

function PageSection({ sectionInfo }) {
  const id = sectionInfo.id;
  const title = sectionInfo.title;
  const infos = sectionInfo.infos;

  while (listId.length < infos.length) {
    if (listId.length <= 0) {
      listId.push(1);
    } else {
      listId.push(listId[listId.length - 1] + 1);
    }
  }

  const styles = {
    margin: "10px 10px 0",
  };

  return (
    <div style={styles}>
      <p style={FontSize.h2Styles}>{title}</p>
      <ul style={FontSize.p2Styles}>
        {infos.map((info, index) => (
          <li key={listId[index]}>{info}</li>
        ))}
      </ul>
    </div>
  );
}
