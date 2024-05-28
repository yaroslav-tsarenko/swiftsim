import FrameComponent10 from "./FrameComponent10";
import FrameComponent9 from "./FrameComponent9";
import PropTypes from "prop-types";
import styles from "./Background8.module.css";

const Background8 = ({ className = "" }) => {
  return (
    <div className={[styles.background, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <FrameComponent10
            link4d5c9eaa28f3485eaa5bc="/link--4d5c9eaa28f3485eaa5bc14b530b77c5-540xgif@2x.png"
            customerSupport="24/7 Customer Support"
            needHelpContactUsAnytimeV="Need help? Contact us anytime via email or our 24-"
            hourWhatsAppSupportOurHum="hour WhatsApp support. Our human team is always"
            hereNoBotsJustGenuineAssi="here, no bots, just genuine assistance."
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.heading2AdvantagesWrapper}>
            <b className={styles.heading2}>Advantages</b>
          </div>
          <FrameComponent9
            linkFafdd228776e4aaeb3f15="/link--fafdd228776e4aaeb3f1532d879b500f-375xgif@2x.png"
            immediateDelivery="Immediate delivery"
            ifYoureInARushOrYoureAlre="If you’re in a rush or you’re already traveling in USA,"
            dontWorryAboutWaitingForD="don’t worry about waiting for delivery. We send the"
            prepaidESIMCardImmediatel="prepaid eSIM card immediately to your email, so you"
            canConnectInSecondsThroug="can connect in seconds  through compatible devices"
            suchAsIPhoneXRAndAndroidP="such as iPhone XR and Android phones."
          />
        </div>
      </div>
      <div className={styles.backgroundInner}>
        <div className={styles.frameContainer}>
          <div className={styles.link25f64d155931460f96d5791Wrapper}>
            <img
              className={styles.link25f64d155931460f96d5791}
              alt=""
              src="/link--25f64d155931460f96d57914a5a59015-375xgif@2x.png"
            />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.unlimitedDataPlansWrapper}>
              <h3 className={styles.unlimitedDataPlans}>
                Unlimited data plans
              </h3>
            </div>
            <p className={styles.highSpeed5glteContainer}>
              <span className={styles.highSpeed5glte}>
                High speed (5G/LTE) eSIM data plan,
              </span>
              <span className={styles.unlimited128kbpsAfterward}>
                Unlimited 128kbps afterward.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Background8.propTypes = {
  className: PropTypes.string,
};

export default Background8;
