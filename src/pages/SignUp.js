import FrameComponent13 from "../components/FrameComponent13";
import SignIn1 from "../components/SignIn1";
import Footer4 from "../components/Footer4";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signup}>
      <FrameComponent13 />
      <section className={styles.frameParent}>
        <div className={styles.signInWrapper}>
          <SignIn1 />
        </div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-491@2x.png"
        />
      </section>
      <Footer4 />
    </div>
  );
};

export default SignUp;
