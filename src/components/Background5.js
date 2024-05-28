import FrameComponent10 from "./FrameComponent10";
import FrameComponent9 from "./FrameComponent9";
import PropTypes from "prop-types";
import styles from "./Background5.module.css";

const Background5 = ({ className = "" }) => {
  return (
    <div className={[styles.background, className].join(" ")}>
      <div className={styles.heading2WhyTrustUsWrapper}>
        <h1 className={styles.heading2}>Why trust us</h1>
      </div>
      <div className={styles.frameParent}>
        <FrameComponent10
          link4d5c9eaa28f3485eaa5bc="/link--8d170b3e4a83417595c392a588a1478a-375xpng@2x.png"
          customerSupport="Competitive Price"
          needHelpContactUsAnytimeV="As a reliable network provider, With millions customers"
          hourWhatsAppSupportOurHum="per year, SwiftSIMWave is able to provide attractive offers"
          hereNoBotsJustGenuineAssi="worldwide for tourists and business travelers."
          propAlignSelf="unset"
          propFlex="1"
          propMinWidth="325px"
          propMargin="unset"
          propFlex1="unset"
          propAlignSelf1="stretch"
        />
        <div className={styles.frameGroup}>
          <div className={styles.linkF473eeb364ab4cb78ab7a13Wrapper}>
            <img
              className={styles.linkF473eeb364ab4cb78ab7a13}
              alt=""
              src="/link--f473eeb364ab4cb78ab7a13f2335b076-375xpng@2x.png"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.networkQualityWrapper}>
              <b className={styles.networkQuality}>Network Quality</b>
            </div>
            <p className={styles.asALicensedContainer}>
              <span className={styles.asALicensed}>
                As a licensed telecom oprerator, SwiftSIMWave delivers best
              </span>
              <span className={styles.cellularNetworkSpeeds}>
                cellular network speeds and leads on overall network
              </span>
              <span className={styles.qualityByPartnering}>
                quality  by  partnering with the best local carriers in
              </span>
              <span className={styles.countries}>200+ countries.</span>
            </p>
          </div>
        </div>
        <FrameComponent9
          linkFafdd228776e4aaeb3f15="/link--9526810b657a468f9e3a02d0cca30501-375xpng@2x.png"
          immediateDelivery="Flexible Plan Options"
          ifYoureInARushOrYoureAlre="We offer a wide variety of plans. Cellular data range"
          dontWorryAboutWaitingForD="from 300MB/Day to 50GB or even unlimited calls and"
          prepaidESIMCardImmediatel="data plans. Service time ranges from 1 day to 30 days."
          canConnectInSecondsThroug="You have more than 50 kinds of data plans to choose"
          suchAsIPhoneXRAndAndroidP="from in popular destinations."
          propAlignSelf="unset"
          propFlex="1"
          propMinWidth="324px"
          propWidth="252.2px"
          propDisplay="flex"
        />
      </div>
    </div>
  );
};

Background5.propTypes = {
  className: PropTypes.string,
};

export default Background5;
