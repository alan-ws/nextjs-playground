import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href={{ pathname: "/blogs/[id]", query: { id: "1" } }}>GO TO BLOG ONE</Link>
    </div>
  );
}
