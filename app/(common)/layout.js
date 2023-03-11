import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import pwIcon from "../../public/assets/pwIcon.svg";

export default function PortfolioLayout({ children }) {
  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.logoIcon}>
          <Link href="/">
            <Image
              // src="../assets/pw-icon.svg"
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
      </nav>
      {children}
    </>
  );
}
