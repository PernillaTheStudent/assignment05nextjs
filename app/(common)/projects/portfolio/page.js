import portoStyle from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import portfolioOne from "../assets/portfolio.png";
import portfolioTwo from "../assets/portfolio2.png";
import styles from "../page.module.css";

export default function Portfolio({ params }) {
  return (
    <>
      <h1>Next.js 13</h1>
      <p className={styles.ingress}>
        This very site you are looking at is the result of the last assignment in the React course (actually JS Ramverk in swedish). The aim was to build a portfolio using Next.js 13 with App folders and Layouts.
      </p>
      <h2>Portfolio</h2>
      <div style={{ width: "100%", display: "flex", padding: "48px 0", margin: "0px 0 40px", alignItems: "center", flexDirection: "column", backgroundColor: "#F9F2E5", justifyContent: "center", }}>
        <Image
          className={portoStyle.single}
          style={{ marginBottom: "22px" }}
          alt="PW codex portfolio"
          src={portfolioOne}
          width={1000}
          height={650}
        />
        <Image
          className={portoStyle.single}
          alt="PW codex portfolio"
          src={portfolioTwo}
          width={1000}
          height={650}
        />
      </div>
      <p>The design was created in Figma with patterns (slightly adjusted) and inspiration from Paaatterns. </p>
      <p>A customized 404 page was included.</p>
      <Link href="https://products.ls.graphics/paaatterns/preview.html" target="_blank">Paaatterns</Link>

    </>
  );
}
