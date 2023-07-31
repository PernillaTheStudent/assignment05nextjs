import heroStyle from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import superHeroOne from "../assets/superhero1.png";
import superHeroTwo from "../assets/superhero2.png";
import superHeroThree from "../assets/superhero3.png";
import styles from "../page.module.css"

export default function Superhero({ params }) {
  return (
    <>
      <h1>API connected webpage</h1>
      <p className={styles.ingress}>
        The aim for this project was to create a webpage that dynamically loads data from an API. Techniques used are HTML, CSS, Vanilla JS and jQuery.
      </p>
      <h2>Superhero indeX</h2>
      <div style={{ width: "100%", display: "flex", marginBottom: "20px" }}>
        <Image
          className={heroStyle.hero}
          alt="SuperHero Index front page"
          src={superHeroOne}
          width={419}
          height={809}
        />
        <Image
          className={heroStyle.hero}
          style={{ margin: "55px 0 0 5px" }}
          alt="SuperHero Index search result"
          src={superHeroTwo}
          width={416}
          height={809}
        />
      </div>
      <p>The start page contains a search field for whatever word you want to put in or you can randomly generate a hero by clicking Get Random Hero.</p>
      <div style={{ display: "flex", width: "100%", justifyContent: "center", margin:"10px 0 16px" }}>
        <Image
          className={heroStyle.single}
          alt="SuperHero Index search result"
          src={superHeroThree}
          width={410}
          height={809}
        />
      </div>
      <p>When clicking on a hero, the quaities of that character is listed, as for example Strength, Speed, Power and if they have good or bad alignment. You can also switch between dark and light mode.</p>
      <Link href="https://pernillathestudent.github.io/mySuperHeroes/" target="_blank">SuperHero Index Webpage</Link>

    </>
  );
}
