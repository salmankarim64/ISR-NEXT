import NavigationButton from "../../../components/NavigationButton";
import styles from "../../../styles/Home.module.css";

export function getStaticProps() {
  return {
    props: {
      time: new Date().toUTCString(),
    },
    revalidate: 30,
  };
}

export default function challenge2({ time }: any) {
  return (
    <>
      <div className={styles.container}>
        <NavigationButton Path="/" ButtonText={"Home"} corner={"TL"} />
        <main className={styles.main}>
          <h1 className={styles.title}>Challenge 2</h1>
          <h2>Incremental Static Regeneration</h2>

          <h1>Current Time: {time}</h1>
          <div style={{ width: "100vh" }}>
            <h4> The time above will update after 30s.</h4>
            <h4>
              Adding revalidate prop in getStaticProps will re trigger
              getStaticProps. After particular time (mention in revalidate
              prop), getStaticProps will be recalled and page will get fresh
              props.
            </h4>
            <h4>
              User can also trigger getStaticProps function. This feature is
              know as on demand incremental Static Generation{" "}
            </h4>
          </div>
        </main>
        <NavigationButton
          Path="/feature/isg/challenge3"
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
