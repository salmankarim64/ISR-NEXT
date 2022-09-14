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
          <h1>{time}</h1>
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
