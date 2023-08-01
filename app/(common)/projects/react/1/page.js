import portoStyle from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import reactOne from "../../assets/react1.png";
import portfolioTwo from "../../assets/portfolio2.png";
import styles from "../../page.module.css";

export default function Portfolio({ params }) {
  return (
    <>
      <h1>React with active menues and show all or one article</h1>
      <p className={styles.ingress}>
        This was my first React site with three articles and buttons to switch between the articles. A bonus button (here an expand icon) to show all articles at the same time.
      </p>
      <h2>First React site</h2>
      <div style={{ width: "100%", display: "flex", margin: "0px 0 40px", alignItems: "center", flexDirection: "column", justifyContent: "center", }}>
        <Image
          className={portoStyle.single}
          // style={{ marginBottom: "22px" }}
          alt="First React site"
          src={reactOne}
          width={755}
          height={887}
        />
      </div>
      <p>Important lessons for a newbie to React are the concepts of useState, props, destructuring and spreading. In this assignment maps was used for mapping through an array and ternary operators among other things.</p>
      <Link href="https://react-assignment-one-sandy.vercel.app/" target="_blank">First React Site</Link>

    </>
  );
}
