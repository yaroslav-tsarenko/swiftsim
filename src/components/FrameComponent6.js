import { useMemo } from "react";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({
  className = "",
  background,
  eSIMMalaysia,
  from290USD,
  background1,
  b5e0681fcd324b9882f20ddfb,
  newZealand,
  from290USD1,
  propMinWidth,
  propPadding,
  propHeight,
  propMinWidth1,
  propMinWidth2,
  propPadding1,
  propHeight1,
  propMinWidth3,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const heading34Style = useMemo(() => {
    return {
      padding: propPadding,
      height: propHeight,
    };
  }, [propPadding, propHeight]);

  const eSIMMalaysiaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const from290USD1Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const heading35Style = useMemo(() => {
    return {
      padding: propPadding1,
      height: propHeight1,
    };
  }, [propPadding1, propHeight1]);

  const newZealandStyle = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div
      className={[styles.backgroundParent, className].join(" ")}
      style={frameDiv1Style}
    >
      <div className={styles.background}>
        <div className={styles.overlayshadow} />
        <img className={styles.backgroundIcon} alt="" src={background} />
        <div className={styles.backgroundInner}>
          <div className={styles.heading3Parent}>
            <div className={styles.heading3} style={heading34Style}>
              <div className={styles.esimMalaysia} style={eSIMMalaysiaStyle}>
                {eSIMMalaysia}
              </div>
            </div>
            <div className={styles.from290Usd} style={from290USD1Style}>
              {from290USD}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.background1}>
        <div className={styles.overlayshadow1} />
        <img className={styles.backgroundIcon1} alt="" src={background1} />
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
        <div className={styles.backgroundChild}>
          <div className={styles.heading3Group}>
            <div className={styles.heading31} style={heading35Style}>
              <div className={styles.newZealand} style={newZealandStyle}>
                {newZealand}
              </div>
            </div>
            <div className={styles.from290Usd1}>{from290USD1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  eSIMMalaysia: PropTypes.string,
  from290USD: PropTypes.string,
  background1: PropTypes.string,
  b5e0681fcd324b9882f20ddfb: PropTypes.string,
  newZealand: PropTypes.string,
  from290USD1: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
  propPadding1: PropTypes.any,
  propHeight1: PropTypes.any,
  propMinWidth3: PropTypes.any,
};

export default FrameComponent6;
