import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  const mouseDown = useCallback(() => {
    router.prefetch("/product/1", undefined, { priority: true });
  }, [router]);

  return (
    <div className={styles.container}>
      <Link
        href={{ pathname: "/product/[slug]", query: { slug: 1 } }}
        as={"/product/[slug]"}
      >
        Product
      </Link>
      <a href="/product/1" onMouseDown={mouseDown}>
        Product
      </a>
    </div>
  );
}
