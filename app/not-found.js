import React from "react"
import styles from "./(common)/page.module.css"
import Link from "next/link"
import PortfolioLayout from "./(common)/layout"

export default function NotFound({ children }) {
  return (
    <PortfolioLayout>
      <main className={styles.main}>
        <section className={`${styles.content} ${styles.error}`}>
          <div className={styles.block}>
            <h1>404</h1>
            <div className="notFoundLine"></div>
            <h2>Page Not Found</h2>
            <p>
              <span style={{ display: "inline-block", float: "right", marginRight: "24px", fontSize: "4rem" }}>✨</span>
              Go to the top menu & hopefully you will find what you are searching for.
            </p>

          </div>
        </section>
      </main>
      {children}
    </PortfolioLayout>
  )
}
