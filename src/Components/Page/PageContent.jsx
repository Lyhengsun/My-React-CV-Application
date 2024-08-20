import { useCanvas } from "../../Contexts/CanvasContext";
import TitlePageSection from "./TitlePageSection";

export default PageContent;

function PageContent() {
  const sections = useCanvas();

  console.log(sections);

  return (
    <>
      {sections.map((section) => {
        let content;
        switch (section.type) {
          case "title":
            content = <TitlePageSection sectionInfo={section} />;
            break;

          default:
            content = section.title;
            break;
        }

        return <div key={section.id}>{content}</div>;
      })}
    </>
  );
}
