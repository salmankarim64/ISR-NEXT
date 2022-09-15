import Router from "next/router";
import { useState } from "react";
import NavigationButton from "../../../components/NavigationButton";
import styles from "../../../styles/Home.module.css";

export function getStaticProps() {
  return {
    props: {
      time: new Date().toUTCString(),
    },
  };
}

export default function challenge3({ time }: any) {
  return (
    <>
      <div className={styles.container}>
        <NavigationButton Path="/" ButtonText={"Home"} corner={"TL"} />
        <main className={styles.main}>
          <h1 className={styles.title}>Challenge 3</h1>

          <h1>Current Time: {time}</h1>
          <h3>On Demand ISR</h3>

          <button
            onClick={() => {
              fetch("/api/revalidate");
              // Router.reload();
            }}
          >
            {" "}
            Update Time
          </button>
        </main>

        <NavigationButton
          Path="/feature/isg/challenge2"
          corner="BL"
          ButtonText={"Back"}
        />
      </div>
    </>
  );
}
