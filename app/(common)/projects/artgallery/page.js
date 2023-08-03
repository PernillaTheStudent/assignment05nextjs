import galleryStyle from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import galleryMacTwo from "../assets/galleryMac2.png";
import nickelfox from "../assets/nickelfoxDesign.png";
import styles from "../page.module.css";

export default function ArtGallery({ params }) {
  return (
    <>
      <h1>API fetch in React app</h1>
      <p className={styles.ingress}>
        This app makes several data fetches from an open API from the Art Institute of Chicago. Top menu (buttons) filter the result to four categories - Paintings, Drawings, Prints & Drawings and Sculptures. The titles are truncated if too long.
      </p>
      <h2>Art Gallery</h2>
      <div style={{ width: "100%", display: "flex", margin: "0px 0 40px", alignItems: "center", flexDirection: "column", justifyContent: "center", }}>
        <Image
          className={galleryStyle.single}
          // style={{ marginBottom: "22px" }}
          alt="Art Gallery"
          src={galleryMacTwo}
          width={1000}
          height={844}
        />
      </div>
      <p>A clean up function assures no unnecessary calls to the server occurs. The layout is responsive when minimizing or maximizing the screen width but not adapted for small screens yet.</p>
      <div style={{ width: "100%", display: "flex", margin: "20px 0 40px", alignItems: "center", flexDirection: "column", justifyContent: "center", }}>
        <Image
          className={galleryStyle.single}
          // style={{ marginBottom: "22px" }}
          alt="Design Layout for Art Gallery"
          src={nickelfox}
          width={1000}
          height={750}
        />
      </div>
      <p>The app is designed after a layout from Nickelfox design. I have strived to follow the design guides as far as it fitted this project.</p>
      <Link href="https://art-gallery-one-teal.vercel.app/" alt="Art Gallery" target="_blank">Art Gallery - art from the Art Institute of Chicago</Link>

    </>
  );
}
