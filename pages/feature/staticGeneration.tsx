import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeButton from "../../components/HomeButton";
import NavigationButton from "../../components/NavigationButton";
import styles from "../../styles/Home.module.css";

const StaticGeneration: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavigationButton Path="/" ButtonText={"Home"} corner={"TL"} />
      <main className={styles.main}>
        <h1 className={styles.title}>Static Generation</h1>

        {/* <div className={styles.grid}></div> */}

        <div></div>
      </main>
      <NavigationButton
        Path="/feature/isg/challenge1"
        corner="BR"
        ButtonText={"Next"}
      />
    </div>
  );
};

export default StaticGeneration;
