import StepsIcons from "./StepsIcons";
import PropTypes from "prop-types";
import styles from "./Background1.module.css";

const Background1 = ({ className = "" }) => {
  return (
    <div className={[styles.background, className].join(" ")}>
      <StepsIcons
        link7375xpng="/link---7-375xpng@2x.png"
        check="Check"
        makeSureYourMobilePhoneIs="Make sure your mobile phone is"
        compatibleWithESIM="compatible with eSIM."
      />
      <StepsIcons
        link7375xpng="/link---8-375xpng@2x.png"
        check="Buy"
        makeSureYourMobilePhoneIs="Choose your destination and"
        compatibleWithESIM="select your data plan."
        propWidth="246.5px"
        propPadding="0px 14px 0px 0px"
        propDisplay="flex"
        propMinWidth="46.2px"
        propWidth1="46.2px"
      />
      <div className={styles.stepsIcons}>
        <div className={styles.link9375xpngWrapper}>
          <img
            className={styles.link9375xpng}
            alt=""
            src="/link---9-375xpng@2x.png"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.installTheQrWrapper}>
            <h3 className={styles.installTheQr}>Install the QR</h3>
          </div>
          <div className={styles.activateYourPlanContainer}>
            <p className={styles.activateYourPlan}>
              Activate your plan using the
            </p>
            <p className={styles.qrCodeFrom}>QR code from email.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Background1.propTypes = {
  className: PropTypes.string,
};

export default Background1;
