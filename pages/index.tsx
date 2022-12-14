import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavigationButton from "../components/NavigationButton";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Experimental app</title>
        <meta
          name="description"
          content="Experimental application to test Incremental Static Regeneration"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Exploring Next Features</h1>

        <div className={styles.grid}>
          <Link href="/feature/isg/challenge1">
            <a className={styles.card}>
              <h2>Static Generation </h2>
            </a>
          </Link>
          <Link href="feature/serverSideRendering">
            <a className={styles.card}>
              <h2>Server-side Rendering </h2>
            </a>
          </Link>
        </div>
        <Link href={"https://github.com/salmankarim64/ISR-NEXT"}>
          <button>Github Repo</button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
