import { useCanvas } from "../../Contexts";
import PageSection from "./PageSection";
import TitlePageSection from "./TitlePageSection";

export default PageContent;

function PageContent() {
  const canvas = useCanvas();
  const sections = canvas.sections;

  //console.log(sections);

  return (
    <>
      {sections.map((section) => {
        let content;
        switch (section.type) {
          case "title":
            content = <TitlePageSection sectionInfo={section} />;
            break;

          default:
            content = <PageSection sectionInfo={section} />;
            break;
        }

        return <div key={section.id}>{content}</div>;
      })}
    </>
  );
}
