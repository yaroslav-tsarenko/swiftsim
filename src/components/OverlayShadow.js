import { useMemo } from "react";
import styles from "./OverlayShadow.module.css";

const OverlayShadow = ({
  className = "",
  d38359ffd2e47fdb6e6c31482,
  hongKongMacao,
  uSD,
  propDisplay,
  propMinWidth,
}) => {
  const hongKongStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={[styles.overlayshadow, className].join(" ")}>
      <img
        className={styles.d38359ffd2e47fdb6e6c314828c91eIcon}
        loading="lazy"
        alt=""
        src={d38359ffd2e47fdb6e6c31482}
      />
      <div className={styles.overlayshadowInner}>
        <div className={styles.hongKongMacaoParent}>
          <div className={styles.hongKong} style={hongKongStyle}>
            {hongKongMacao}
          </div>
          <div className={styles.usd}>{uSD}</div>
        </div>
      </div>
    </div>
  );
};

OverlayShadow.propTypes = {
  className: PropTypes.string,
  d38359ffd2e47fdb6e6c31482: PropTypes.string,
  hongKongMacao: PropTypes.string,
  uSD: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default OverlayShadow;
