import styles from "./Page.module.css";
import PageContent from "./PageContent";

export default Page;

function Page() {
  return (
    <div className={styles.PageContainer}>
      <div style={{ width: "230mm", height: "297mm", margin: "0 auto" }}>
        <div className={styles.Page}>
          <PageContent />
        </div>
      </div>
    </div>
  );
}
