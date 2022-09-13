import type { NextPage } from "next";
import Head from "next/head";
import HomeButton from "../../components/HomeButton";
import styles from "../../styles/Home.module.css";

const StaticGeneration: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HomeButton />
        <h1 className={styles.title}>Server Side Generation</h1>

        <div className={styles.grid}></div>
      </main>
    </div>
  );
};

export default StaticGeneration;