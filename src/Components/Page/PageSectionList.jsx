import FontSize from "../../Theme/FontSize";

export default PageSectionList;

const listId = [];

function PageSectionList({ infos }) {
  const sectionInfos = infos.infos;

  while (listId.length < sectionInfos.length) {
    if (listId.length <= 0) {
      listId.push(1);
    } else {
      listId.push(listId[listId.length - 1] + 1);
    }
  }

  return (
    <ul style={FontSize.p2Styles}>
      {sectionInfos.map((info, index) => (
        <li key={listId[index]}>{info}</li>
      ))}
    </ul>
  );
}
