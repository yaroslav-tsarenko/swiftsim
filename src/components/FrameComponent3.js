import { Button } from "@mui/material";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.background} />
        <div className={styles.background1}>
          <div className={styles.d1ba02bf4282845e8299a17005cf1Parent}>
            <img
              className={styles.d1ba02bf4282845e8299a17005cf1Icon}
              loading="lazy"
              alt=""
              src="/6745d1ba02bf4282845e8299a17005cf-1920xjpeg@2x.png"
            />
            <div className={styles.background2} />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.manageYourEsimWithEaseOnWrapper}>
                <h1 className={styles.manageYourEsim}>
                  Manage Your eSIM with Ease on SwiftSIMWave
                </h1>
              </div>
              <p
                className={styles.bestLocal}
              >{`SwiftSIMWave is your one-stop shop for everything eSIM. Whether you're looking to activate a new eSIM, transfer an existing one, or simply learn more about this convenient technology, SwiftSIMWave has you covered. `}</p>
            </div>
            <div className={styles.linkWrapper}>
              <Button
                className={styles.link}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "14",
                  background: "#fff",
                  borderRadius: "42px",
                  "&:hover": { background: "#fff" },
                  width: 137.8,
                  height: 48.4,
                }}
              >
                UP TO 5% OFF
              </Button>
            </div>
          </div>
          <div className={styles.backgroundInner}>
            <div className={styles.containerParent}>
              <div className={styles.container1}>
                <div className={styles.background3} />
              </div>
              <div className={styles.container2}>
                <div className={styles.background4} />
                <div className={styles.background5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
