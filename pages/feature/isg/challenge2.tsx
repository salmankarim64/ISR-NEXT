import NavigationButton from "../../../components/NavigationButton";
import styles from "../../../styles/Home.module.css";

export function getStaticProps() {
  return {
    props: {
      time: new Date().toUTCString(),
    },
    revalidate: 60,
  };
}

export default function challenge2({ time }: any) {
  return (
    <>
      <div className={styles.container}>
        <NavigationButton Path="/" ButtonText={"Home"} corner={"TL"} />
        <main className={styles.main}>
          <h1 className={styles.title}>Challenge 2</h1>
          <h1>{time}</h1>
        </main>
        <NavigationButton
          Path="/feature/isg/challenge2"
          corner="BR"
          ButtonText={"Next"}
        />
        <NavigationButton
          Path="/feature/isg/challenge1"
          corner="BL"
          ButtonText={"Back"}
        />
      </div>
    </>
  );
}
