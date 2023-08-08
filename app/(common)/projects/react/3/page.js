import dashboardStyle from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import dashboard from "../../assets/reactAssignment3.png";
import dashboardDesign from "../../assets/dashboardDesign.png"
import styles from "../../page.module.css";

export default function Portfolio({ params }) {
  return (
    <>
      <h1>Pixel perfect design aim with interactivity</h1>
      <p className={styles.ingress}>
        This app calculates the number of words and letters that the users put in the field. Time and date is shown in the top bar and adds to the dashboard feeling.
      </p>
      <h2>Dashboard design</h2>
      <div style={{ width: "100%", display: "flex", margin: "0px 0 40px", alignItems: "center", flexDirection: "column", justifyContent: "center", }}>
        <Image
          className={dashboardStyle.single}
          // style={{ marginBottom: "22px" }}
          alt="First React site"
          src={dashboard}
          width={1000}
          height={844}
        />
      </div>
      <p>The aim of this assignment was to find a design that could fit the interactivity of my choice and give credit to the designer and try implementing it pixel perfectly.</p>
      <div style={{ width: "100%", display: "flex", margin: "20px 0 40px", alignItems: "center", flexDirection: "column", justifyContent: "center", }}>
        <Image
          className={dashboardStyle.single}
          // style={{ marginBottom: "22px" }}
          alt="First React site"
          src={dashboardDesign}
          width={1000}
          height={750}
        />
      </div>
      <p>This free dashboard design from Emran Hossain was very nice and fitted my &quot;Letters and Words calculation&quot; function. Had to do a lots of downscaling of course to fit my minimised app. I followed the color scheme, chose to implement only two columns and three icons in the top bar and added personal choice of font sizes and a hover button effect for the function.</p>
      <Link href="https://react-assignment-three-mu.vercel.app/" target="_blank">Dashboard design</Link>

    </>
  );
}
