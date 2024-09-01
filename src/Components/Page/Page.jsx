import styles from "./Page.module.css";
import PageContent from "./PageContent";

export default Page;

function Page() {
  function handleOnClickPrint() {
    window.print();
  }

  return (
    <div className={styles.PageContainer}>
      <div
        style={{
          width: "230mm",
          height: "307mm",
          margin: "0 auto",
        }}
      >
        <div id="pageToPrint" className={styles.Page}>
          <PageContent />
        </div>
      </div>
      <button
        style={{ position: "absolute", top: "10px", right: "10px" }}
        onClick={handleOnClickPrint}
      >
        Print
      </button>
    </div>
  );
}
