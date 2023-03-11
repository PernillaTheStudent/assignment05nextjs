import Link from "next/link";
import styles from "../../(common)/page.module.css";
import Image from "next/image";
import patternSmall from "../../../public/assets/portfolioPatternSmall.svg";

export default function Contact() {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <h1>Contact</h1>
        <p className={styles.ingress}>
          Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales.
        </p>
        <h2>Creating React state as an array</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
          placerat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus.
        </p>
        <p>
          Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
          suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
          maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales
          sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat
          placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit
        </p>
      </section>
      <aside className={styles.aside}>
        <div className={styles.block}>
          <Link href="/articles/1">Disney channel</Link>
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
