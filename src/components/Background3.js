import { useMemo } from "react";
import styles from "./Background3.module.css";

const Background3 = ({
  className = "",
  background,
  b5e0681fcd324b9882f20ddfb,
  eSIMIndia,
  from590USD,
  propPadding,
  propHeight,
  propMinWidth,
}) => {
  const heading3Style = useMemo(() => {
    return {
      padding: propPadding,
      height: propHeight,
    };
  }, [propPadding, propHeight]);

  const eSIMIndiaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.background, className].join(" ")}>
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
          <div className={styles.heading3} style={heading3Style}>
            <div className={styles.esimIndia} style={eSIMIndiaStyle}>
              {eSIMIndia}
            </div>
          </div>
          <div className={styles.from590Usd}>{from590USD}</div>
        </div>
      </div>
    </div>
  );
};

Background3.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  b5e0681fcd324b9882f20ddfb: PropTypes.string,
  eSIMIndia: PropTypes.string,
  from590USD: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Background3;
