import NavigationButton from "../../../components/NavigationButton";
import styles from "../../../styles/Home.module.css";

export function getStaticProps() {
  return {
    props: {
      time: new Date().toUTCString(),
    },
  };
}

export default function challenge1({ time }: any) {
  return (
    <>
      <div className={styles.container}>
        <NavigationButton Path="/" ButtonText={"Home"} corner={"TL"} />
        <main className={styles.main}>
          <h1 className={styles.title}>Challenge 1</h1>
          <h2>Static Gegeneration</h2>

          <h1>Current Time: {time}</h1>
          <div style={{ width: "100vh" }}>
            <h4>
              {" "}
              The time above is pre-render at build time using props returned by
              getStaticProps.And its not reflecting current time.
            </h4>
            <h4>
              To solve these type problem of problem Next have a feature named
              Incremental Static Generation.
            </h4>
          </div>
        </main>
        <NavigationButton
          Path="/feature/isg/challenge2"
          corner="BR"
          ButtonText={"Next"}
        />
      </div>
    </>
  );
}
