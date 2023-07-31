import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import patternSmall from "../../../public/assets/portfolioPatternSmall.svg";

export default function ProjectsLayout({ children }) {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.content}>{children}</section>
        <aside className={styles.aside}>
          <div className={`${styles.block} ${styles.menu}`}>
            <h3>Javascript, jQuery, APIs</h3>
            <Link href="/projects/superhero">Superhero indeX</Link>
            <br />
            <h3>React & Next.js 13</h3>
            <Link href="/projects/portfolio">Portfolio</Link>
            <Link href="/projects/assignment-01">First React site</Link>
            <Link href="/projects/assignment-02">Assigment no02</Link>
            <Link href="/projects/assignment-03">Assigment no03</Link>
            {/* <Link href="/projects/assignment-04">Assigment no04</Link> */}
            <Link href="/projects/assignment-05">Assigment no05</Link>
          </div>
          <div className={styles.block}>
            <h3>Articles</h3>
            <Link href="/articles/1">Articles</Link>
          </div>
        </aside>
        <div className={styles.decoreElement}>
          <Image
            className={styles.pattern}
            src={patternSmall}
            alt="Pattern for PWs portfolio"
            height={177}
            width={882}
          />
        </div>
      </main>
    </>
  );
}
