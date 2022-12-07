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
        prefetch={false}
      >
        Product
      </Link>
      <a
        href={`https://nextjs-playground-git-7161-alan-ws-team.vercel.app/product/1`}
        onMouseDown={mouseDown}
        onClick={(e) => {
          e.preventDefault();
          router.push("/product/1");
        }}
      >
        Product
      </a>
    </div>
  );
}
