import styles from "./Page.module.css";

export default Page;

function Page() {
  return (
    <div className={styles.PageContainer}>
      <div className={styles.Page}>
        <p>Hello</p>
        <p style={{ fontSize: "16px" }}>Hello</p>
        <p style={{ fontSize: "14px" }}>Hello</p>
        <p style={{ fontSize: "12px" }}>Hello</p>
      </div>
    </div>
  );
}
