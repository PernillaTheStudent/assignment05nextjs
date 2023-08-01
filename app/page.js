import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import pwIcon from "../public/assets/pwIcon.svg";
import pattern from "../public/assets/portfolioPattern.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <section className={styles.section}>
          <div className={styles.logoIcon}>
            <Link href="/">
              <Image
                // src="./assets/pw-icon.svg"
                src={pwIcon}
                alt="PW icon"
                width={70}
                height={70}
                priority
              />
            </Link>
          </div>
          <div className={styles.topMenu}>
            <Link href="/about">About</Link>
            <Link href="/projects">Codexperience</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.content}>
            <h1>code(x)</h1>
            <h2>where design meets code</h2>
            <p className={`${styles.ingress}`}>
            Aspiring frontend developer, crafting inspiring web solutions. Let's shape the digital future together. Join me on this journey.
            </p>
            <Link className={styles.button} href="/projects/assignment-01?">
              <span>Explore more</span>
            </Link>
          </div>
        </section>
        <aside className={styles.aside}>
          <Image
            src={pattern}
            alt="Pattern for PWs Portfolio"
            width={528}
            height={899}
          />
        </aside>
      </div>
    </main>
  );
}