import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>FeeWolf</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>FeeWolf!</a>
        </h1>

        <p className={styles.description}>
          Helping you make smarter decisions with your crypto
        </p>

        <div className={styles.grid}>
          <Link href="/exchange">
            <a className={styles.card}>
              <h2>Exchange &rarr;</h2>
              <p>Find the cheapest places to purchase your own crypto assets</p>
            </a>
          </Link>

          <Link href="/gas">  
            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Gas &rarr;</h2>
              <p>Chose the best time to make transactions by tracking current gas fees</p>
            </a>
          </Link>


          <Link href="/about">
            <a
              href="/about"
              className={styles.card}
            >
              <h2>About &rarr;</h2>
              <p>FeeWolf's mission and story</p>
            </a>
          </Link>


        </div>
      </main>
    </>
  )
}
