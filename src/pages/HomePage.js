import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import Background1 from "../components/Background1";
import SwiftSimWaveBenefits from "../components/SwiftSimWaveBenefits";
import FrameComponent1 from "../components/FrameComponent1";
import Background from "../components/Background";
import FrameComponent from "../components/FrameComponent";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <section className={styles.backgroundParent}>
        <div className={styles.background} />
        <div className={styles.container}>
          <img
            className={styles.backgroundIcon}
            loading="lazy"
            alt=""
            src="/background@2x.png"
          />
          <div className={styles.link} />
        </div>
      </section>
      <section className={styles.esimSteps}>
        <Background1 />
        <SwiftSimWaveBenefits />
        <h2 className={styles.heading2}>They already tried</h2>
      </section>
      <FrameComponent1 />
      <section className={styles.backgroundGroup}>
        <Background />
        <FrameComponent />
      </section>
    </div>
  );
};

export default HomePage;
