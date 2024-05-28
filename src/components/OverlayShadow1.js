import { useMemo } from "react";
import styles from "./OverlayShadow1.module.css";

const OverlayShadow1 = ({
  className = "",
  c812d45a1b7456695c833b055,
  southKoreaESIM,
  uSD,
  propDebugCommit,
  propDisplay,
  propMinWidth,
}) => {
  const overlayShadowStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const southKoreaESIMStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={[styles.overlayshadow, className].join(" ")}
      style={overlayShadowStyle}
    >
      <img
        className={styles.c812d45a1b7456695c833b05522dc2Icon}
        loading="lazy"
        alt=""
        src={c812d45a1b7456695c833b055}
      />
      <div className={styles.newZealandLabel}>
        <div className={styles.newZealandPrice}>
          <div className={styles.southKoreaEsim} style={southKoreaESIMStyle}>
            {southKoreaESIM}
          </div>
          <div className={styles.usd}>{uSD}</div>
        </div>
      </div>
    </div>
  );
};

OverlayShadow1.propTypes = {
  className: PropTypes.string,
  c812d45a1b7456695c833b055: PropTypes.string,
  southKoreaESIM: PropTypes.string,
  uSD: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default OverlayShadow1;
