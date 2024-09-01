import { SectionProvider, useCanvas } from "../../Contexts";
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
            content = (
              <SectionProvider section={section}>
                <TitlePageSection />
              </SectionProvider>
            );
            break;

          default:
            content = (
              <SectionProvider section={section}>
                <PageSection sectionInfo={section} />
              </SectionProvider>
            );

            break;
        }

        return <div key={section.id}>{content}</div>;
      })}
    </>
  );
}
