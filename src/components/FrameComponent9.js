import { useMemo } from "react";
import styles from "./FrameComponent9.module.css";

const FrameComponent9 = ({
  className = "",
  linkFafdd228776e4aaeb3f15,
  immediateDelivery,
  ifYoureInARushOrYoureAlre,
  dontWorryAboutWaitingForD,
  prepaidESIMCardImmediatel,
  canConnectInSecondsThroug,
  suchAsIPhoneXRAndAndroidP,
  propAlignSelf,
  propFlex,
  propMinWidth,
  propWidth,
  propDisplay,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  const immediateDeliveryStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDiv3Style}
    >
      <div className={styles.linkFafdd228776e4aaeb3f1532Wrapper}>
        <img
          className={styles.linkFafdd228776e4aaeb3f1532}
          alt=""
          src={linkFafdd228776e4aaeb3f15}
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.immediateDeliveryWrapper}>
          <h3
            className={styles.immediateDelivery}
            style={immediateDeliveryStyle}
          >
            {immediateDelivery}
          </h3>
        </div>
        <p className={styles.ifYoureInContainer}>
          <span className={styles.ifYoureIn}>{ifYoureInARushOrYoureAlre}</span>
          <span className={styles.dontWorryAbout}>
            {dontWorryAboutWaitingForD}
          </span>
          <span className={styles.prepaidEsimCard}>
            {prepaidESIMCardImmediatel}
          </span>
          <span className={styles.canConnectIn}>
            {canConnectInSecondsThroug}
          </span>
          <span className={styles.suchAsIphone}>
            {suchAsIPhoneXRAndAndroidP}
          </span>
        </p>
      </div>
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
  linkFafdd228776e4aaeb3f15: PropTypes.string,
  immediateDelivery: PropTypes.string,
  ifYoureInARushOrYoureAlre: PropTypes.string,
  dontWorryAboutWaitingForD: PropTypes.string,
  prepaidESIMCardImmediatel: PropTypes.string,
  canConnectInSecondsThroug: PropTypes.string,
  suchAsIPhoneXRAndAndroidP: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default FrameComponent9;
