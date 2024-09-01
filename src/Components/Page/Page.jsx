import html2canvas from "html2canvas";
import styles from "./Page.module.css";
import PageContent from "./PageContent";
import jsPDF from "jspdf";

export default Page;

function Page() {
  function handleOnClickPrint() {
    //const input = document.getElementById("pageToPrint");
    //html2canvas(input).then((canvas) => {
    //  const imgData = canvas.toDataURL("image/png");
    //  const pdf = new jsPDF();
    //  pdf.addImage(imgData, "JPEG", 0, 0);
    //  pdf.save("download.pdf");
    //});
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
