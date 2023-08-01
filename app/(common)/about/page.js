import Link from "next/link";
import styles from "../../(common)/page.module.css";
import Image from "next/image";
import patternSmall from "../../../public/assets/portfolioPatternSmall.svg";

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <h1>About & History</h1>
        <p className={styles.ingress}>
          I currently study to become proficient in frontend development with a focus on React and Next.js 13. I have a passion for creating visually appealing and interactive web experiences that makes a delightful user experience. 
        </p>
        <h2>PW codex</h2>
        <p>
          The foundation of my frontend skills were laid with insatiable curiosity for HTML, CSS and Vanilla JavaScript. The next step was embracing the power of React and Next.js 13, appreciating their ability to build robust and dynamic applications. This is my on-going work to deepen that knowledge.
        </p>
        <p>
          While frontend development is the core of my work, I have also touched the techniques used in backend such as database management and authentication. I find immense value understanding how the two sides of web development complement each other, creating holistic and seamless web solutions.
        </p>
      </section>
      <aside className={styles.aside}>
        {/* <div className={styles.block}>
          <Link href="/articles/1">Disney channel</Link>
        </div> */}
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
  );
}
