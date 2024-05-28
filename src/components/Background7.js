import { useCallback } from "react";
import styles from "./Background7.module.css";

const Background7 = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    // Please sync "FAQ" to the project
  }, []);

  return (
    <div className={[styles.background, className].join(" ")}>
      <div className={styles.backgroundInner}>
        <div className={styles.frameParent}>
          <div className={styles.howDoesParent}>
            <div className={styles.howDoes}>How does</div>
            <h1 className={styles.heading2}>USA eSIM work?</h1>
            <p className={styles.theEasiestWay}>
              The easiest way to get connected. Simple, Online. No Retail
              Stores, No Inflated Prices.
            </p>
            <div className={styles.itemMakeSureYourMobilePWrapper}>
              <p className={styles.itemMakeContainer}>
                <span className={styles.makeSureYour}>
                  Make sure your mobile phone is compatible with eSIM for USA.
                </span>
                <span className={styles.buyUnlimitedEsim}>
                  Buy unlimited eSIM data plans that fit your USA travel needs.
                </span>
                <span className={styles.activateYourMobile}>
                  Activate your mobile plan using the QR code from email.
                </span>
              </p>
            </div>
          </div>
          <div className={styles.link} onClick={onLinkContainerClick}>
            <a
              className={styles.waitIHave}
              href="https://www.figma.com/design/CbcKFd3HahloGFWryZhyOg?node-id=1-6138"
              target="_blank"
            >
              Wait, I have more questions
            </a>
            <img className={styles.icon} alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
      <img className={styles.xpngIcon} alt="" src="/11-2-540xpng@2x.png" />
    </div>
  );
};

Background7.propTypes = {
  className: PropTypes.string,
};

export default Background7;
