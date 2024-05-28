import { useMemo } from "react";
import styles from "./Item.module.css";

const Item = ({
  className = "",
  container,
  list,
  iHaveUsedSwiftsimwaveCard,
  laganaMartinUS,
  propWidth,
  propDisplay,
}) => {
  const laganaMartinStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div className={[styles.item, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.avatarImageParent}>
            <div className={styles.avatarImage}>
              <img className={styles.containerIcon} alt="" src={container} />
            </div>
            <img className={styles.listIcon} alt="" src={list} />
          </div>
        </div>
        <p className={styles.iHaveUsed}>{iHaveUsedSwiftsimwaveCard}</p>
      </div>
      <div className={styles.laganaMartinUsWrapper}>
        <div className={styles.laganaMartin} style={laganaMartinStyle}>
          {laganaMartinUS}
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  list: PropTypes.string,
  iHaveUsedSwiftsimwaveCard: PropTypes.string,
  laganaMartinUS: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default Item;
