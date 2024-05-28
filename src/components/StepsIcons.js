import { useMemo } from "react";
import styles from "./StepsIcons.module.css";

const StepsIcons = ({
  className = "",
  link7375xpng,
  check,
  makeSureYourMobilePhoneIs,
  compatibleWithESIM,
  propWidth,
  propPadding,
  propDisplay,
  propMinWidth,
  propWidth1,
}) => {
  const stepsIconsStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const checkStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      width: propWidth1,
    };
  }, [propDisplay, propMinWidth, propWidth1]);

  return (
    <div
      className={[styles.stepsIcons, className].join(" ")}
      style={stepsIconsStyle}
    >
      <div className={styles.stepsImage}>
        <img className={styles.link7375xpng} alt="" src={link7375xpng} />
      </div>
      <div className={styles.stepsDescription}>
        <div className={styles.stepsTitles}>
          <b className={styles.check} style={checkStyle}>
            {check}
          </b>
        </div>
        <p className={styles.makeSureYourContainer}>
          <span className={styles.makeSureYour}>
            {makeSureYourMobilePhoneIs}
          </span>
          <span className={styles.compatibleWithEsim}>
            {compatibleWithESIM}
          </span>
        </p>
      </div>
    </div>
  );
};

StepsIcons.propTypes = {
  className: PropTypes.string,
  link7375xpng: PropTypes.string,
  check: PropTypes.string,
  makeSureYourMobilePhoneIs: PropTypes.string,
  compatibleWithESIM: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default StepsIcons;
