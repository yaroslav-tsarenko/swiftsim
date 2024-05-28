import { useMemo } from "react";
import styles from "./FrameComponent10.module.css";

const FrameComponent10 = ({
  className = "",
  link4d5c9eaa28f3485eaa5bc,
  customerSupport,
  needHelpContactUsAnytimeV,
  hourWhatsAppSupportOurHum,
  hereNoBotsJustGenuineAssi,
  propAlignSelf,
  propFlex,
  propMinWidth,
  propMargin,
  propFlex1,
  propAlignSelf1,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  const customerSupportStyle = useMemo(() => {
    return {
      margin: propMargin,
      flex: propFlex1,
    };
  }, [propMargin, propFlex1]);

  const needHelpContactContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDiv2Style}
    >
      <div className={styles.link4d5c9eaa28f3485eaa5bc14Wrapper}>
        <img
          className={styles.link4d5c9eaa28f3485eaa5bc14}
          alt=""
          src={link4d5c9eaa28f3485eaa5bc}
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.customerSupportWrapper}>
          <h3 className={styles.customerSupport} style={customerSupportStyle}>
            {customerSupport}
          </h3>
        </div>
        <p
          className={styles.needHelpContactContainer}
          style={needHelpContactContainerStyle}
        >
          <span className={styles.needHelpContact}>
            {needHelpContactUsAnytimeV}
          </span>
          <span className={styles.hourWhatsappSupport}>
            {hourWhatsAppSupportOurHum}
          </span>
          <span className={styles.hereNoBots}>{hereNoBotsJustGenuineAssi}</span>
        </p>
      </div>
    </div>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
  link4d5c9eaa28f3485eaa5bc: PropTypes.string,
  customerSupport: PropTypes.string,
  needHelpContactUsAnytimeV: PropTypes.string,
  hourWhatsAppSupportOurHum: PropTypes.string,
  hereNoBotsJustGenuineAssi: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMargin: PropTypes.any,
  propFlex1: PropTypes.any,
  propAlignSelf1: PropTypes.any,
};

export default FrameComponent10;
