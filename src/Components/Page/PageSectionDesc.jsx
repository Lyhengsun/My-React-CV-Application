export default PageSectionDesc;

function PageSectionDesc({ infos }) {
  const sectionInfos = infos.infos;
  const fontWeight = infos.bold ? "bold" : "normal";

  return <div style={{ fontWeight: fontWeight }}>{sectionInfos[0]}</div>;
}
