import NavigationButton from "../../../components/NavigationButton";
import styles from "../../../styles/Home.module.css";

export function getStaticProps() {
  return {
    props: {
      time: new Date().toUTCString(),
    },
    revalidate: 3600,
  };
}

export default function challenge2({ time }: any) {
  return (
    <>
      <div className={styles.container}>
        <NavigationButton Path="/" ButtonText={"Home"} corner={"TL"} />
        <main className={styles.main}>
          <h1 className={styles.title}>Challenge 3</h1>
          <h3>On Demand ISR</h3>
          <button> Get Time</button>
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
