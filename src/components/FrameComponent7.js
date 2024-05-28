import { useMemo } from "react";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = ({
  className = "",
  background,
  b5e0681fcd324b9882f20ddfb,
  indonesiaESIM,
  from290USD,
  background1,
  southKoreaESIM,
  from390USD,
  propMinWidth,
  propPadding,
  propHeight,
  propMinWidth1,
  propPadding1,
  propHeight1,
  propMinWidth2,
  propMinWidth3,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const heading32Style = useMemo(() => {
    return {
      padding: propPadding,
      height: propHeight,
    };
  }, [propPadding, propHeight]);

  const indonesiaESIMStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const heading33Style = useMemo(() => {
    return {
      padding: propPadding1,
      height: propHeight1,
    };
  }, [propPadding1, propHeight1]);

  const southKoreaESIM1Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const from390USDStyle = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div
      className={[styles.backgroundParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.background}>
        <div className={styles.overlayshadow} />
        <img className={styles.backgroundIcon} alt="" src={background} />
        <div className={styles.rectangle} />
        <div className={styles.rectangle1} />
        <div className={styles.rectangle2} />
        <div className={styles.rectangle3} />
        <div className={styles.rectangle4} />
        <div className={styles.rectangle5} />
        <img
          className={styles.b5e0681fcd324b9882f20ddfb770deIcon}
          alt=""
          src={b5e0681fcd324b9882f20ddfb}
        />
        <div className={styles.rectangle6} />
        <div className={styles.rectangle7} />
        <div className={styles.backgroundInner}>
          <div className={styles.heading3Parent}>
            <div className={styles.heading3} style={heading32Style}>
              <div className={styles.indonesiaEsim} style={indonesiaESIMStyle}>
                {indonesiaESIM}
              </div>
            </div>
            <div className={styles.from290Usd}>{from290USD}</div>
          </div>
        </div>
      </div>
      <div className={styles.background1}>
        <div className={styles.overlayshadow1} />
        <img className={styles.backgroundIcon1} alt="" src={background1} />
        <div className={styles.backgroundChild}>
          <div className={styles.heading3Group}>
            <div className={styles.heading31} style={heading33Style}>
              <div
                className={styles.southKoreaEsim}
                style={southKoreaESIM1Style}
              >
                {southKoreaESIM}
              </div>
            </div>
            <div className={styles.from390Usd} style={from390USDStyle}>
              {from390USD}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  b5e0681fcd324b9882f20ddfb: PropTypes.string,
  indonesiaESIM: PropTypes.string,
  from290USD: PropTypes.string,
  background1: PropTypes.string,
  southKoreaESIM: PropTypes.string,
  from390USD: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propPadding1: PropTypes.any,
  propHeight1: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propMinWidth3: PropTypes.any,
};

export default FrameComponent7;
