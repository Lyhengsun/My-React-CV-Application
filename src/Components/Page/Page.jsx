import styles from "../../styles/Page.module.css";
import PageContent from "./PageContent";

export default Page;

function Page() {
  return (
    <div className={styles.PageContainer}>
      <div
        style={{
          width: "230mm",
          height: "307mm",
          margin: "0 auto",
        }}
      >
        <div
          id="pageToPrint"
          className={styles.Page}
          style={{ backgroundColor: "white" }}
        >
          <PageContent />
        </div>
      </div>
    </div>
  );
}
