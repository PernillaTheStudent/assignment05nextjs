import Link from "next/link";
import styles from "../../(common)/page.module.css";
import Image from "next/image";
import patternSmall from "../../../public/assets/portfolioPatternSmall.svg";

export default function Contact() {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <h1>Welcome to contact me</h1>
        <p className={styles.ingress}>
          Feel free to drop me a line, whether you have a question, feedback, or a collaboration opportunity, this is the place to reach out.
        </p>
        <Link href="mailto:pernilla.codex@gmail.com">Send me an email</Link>
      </section>
      <aside className={styles.aside}>
        <div className={styles.block}>
          {/* <Link href="/articles/1">Disney channel</Link> */}
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
  );
}
