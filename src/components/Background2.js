import { useMemo } from "react";
import styles from "./Background2.module.css";

const Background2 = ({
  className = "",
  background,
  japanESIM,
  from290USD,
  propPadding,
  propHeight,
  propMinWidth,
  propDisplay,
  propTextDecoration,
  propMinWidth1,
}) => {
  const heading31Style = useMemo(() => {
    return {
      padding: propPadding,
      height: propHeight,
    };
  }, [propPadding, propHeight]);

  const japanESIMStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
      textDecoration: propTextDecoration,
    };
  }, [propMinWidth, propDisplay, propTextDecoration]);

  const from290USDStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.background, className].join(" ")}>
      <div className={styles.overlayshadow} />
      <img className={styles.backgroundIcon} alt="" src={background} />
      <div className={styles.backgroundInner}>
        <div className={styles.heading3Parent}>
          <div className={styles.heading3} style={heading31Style}>
            <div className={styles.japanEsim} style={japanESIMStyle}>
              {japanESIM}
            </div>
          </div>
          <div className={styles.from290Usd} style={from290USDStyle}>
            {from290USD}
          </div>
        </div>
      </div>
    </div>
  );
};

Background2.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  japanESIM: PropTypes.string,
  from290USD: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propTextDecoration: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Background2;
