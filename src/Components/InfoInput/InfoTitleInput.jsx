import { useSection } from "../../Contexts";
import FontSize from "../../Theme/FontSize";
import styles from "./InfoSectionInput.module.css";

export default InfoTitleInput;

function InfoTitleInput() {
  const section = useSection();
  const id = section.id;
  const title = section.title;
  const infos = section.infos;
  const userImg = section.useImg;

  return (
    <div className={styles.InfoSectionInput}>
      <p style={FontSize.h1Styles}>Title</p>
    </div>
  );
}
