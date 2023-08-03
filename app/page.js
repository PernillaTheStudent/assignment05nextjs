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
            <h2>Where design meets code</h2>
            <p className={`${styles.ingress}`}>
            Frontend developer in the making. My dedication to reliable and well-crafted code intrigues me to build websites that leave a positive impact on users. Feel free to reach out or explore more. 
            </p>
            <Link className={styles.button} href="/projects">
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