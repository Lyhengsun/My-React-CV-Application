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
    margin: "10px",
  };

  return (
    <div style={styles}>
      <h1>{title}</h1>
      <p>{desc}</p>
      {infos.length > 0 &&
        (infos.length > 1 ? (
          <ul>
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
