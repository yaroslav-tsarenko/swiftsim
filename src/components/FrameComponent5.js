import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Background3 from "./Background3";
import Background2 from "./Background2";
import FrameComponent7 from "./FrameComponent7";
import FrameComponent6 from "./FrameComponent6";
import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/pdp");
  }, [navigate]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.backgroundParent}>
        <div className={styles.background}>
          <div className={styles.overlayshadow} />
          <div className={styles.link} onClick={onLinkContainerClick}>
            <img
              className={styles.backgroundIcon}
              loading="lazy"
              alt=""
              src="/background1@2x.png"
            />
            <div className={styles.rectangle} />
            <div className={styles.rectangle1} />
            <div className={styles.rectangle2} />
            <div className={styles.rectangle3} />
            <div className={styles.rectangle4} />
            <div className={styles.rectangle5} />
            <img
              className={styles.b5e0681fcd324b9882f20ddfb770deIcon}
              alt=""
              src="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
            />
            <div className={styles.rectangle6} />
            <div className={styles.rectangle7} />
            <div className={styles.linkInner}>
              <div className={styles.heading3Parent}>
                <div className={styles.heading3}>
                  <a
                    className={styles.usa}
                    href="https://www.figma.com/design/CbcKFd3HahloGFWryZhyOg?node-id=1-4455"
                    target="_blank"
                  >
                    USA
                  </a>
                </div>
                <a
                  className={styles.from390Usd}
                  href="https://www.figma.com/design/CbcKFd3HahloGFWryZhyOg?node-id=1-4455"
                  target="_blank"
                >
                  From $3.90 USD
                </a>
              </div>
            </div>
          </div>
        </div>
        <Background3
          background="/background-11@2x.png"
          b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
          eSIMIndia="eSIM India"
          from590USD="From $5.90 USD"
        />
      </div>
      <div className={styles.backgroundGroup}>
        <Background2
          background="/background-2@2x.png"
          japanESIM="Japan eSIM"
          from290USD="From $2.90 USD"
        />
        <Background2
          background="/background-3@2x.png"
          japanESIM="Thailand"
          from290USD="From $2.90 USD"
          propPadding="0px 0px 0.2px"
          propHeight="unset"
          propMinWidth="61.2px"
          propDisplay="inline-block"
          propTextDecoration="unset"
          propMinWidth1="111px"
        />
      </div>
      <FrameComponent7
        background="/background-4@2x.png"
        b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
        indonesiaESIM="Indonesia eSIM"
        from290USD="From $2.90 USD"
        background1="/background-5@2x.png"
        southKoreaESIM="South Korea eSIM"
        from390USD="From $3.90 USD"
      />
      <FrameComponent6
        background="/background-6@2x.png"
        eSIMMalaysia="eSIM Malaysia"
        from290USD="From $2.90 USD"
        background1="/background-7@2x.png"
        b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
        newZealand="New Zealand"
        from290USD1="From $2.90 USD"
      />
      <div className={styles.backgroundContainer}>
        <Background2
          background="/background-8@2x.png"
          japanESIM="Vietnam eSIM"
          from290USD="From $2.90 USD"
          propPadding="0px 0px 0.2px"
          propHeight="unset"
          propMinWidth="96px"
          propDisplay="inline-block"
          propTextDecoration="unset"
          propMinWidth1="111px"
        />
        <Background2
          background="/background-9@2x.png"
          japanESIM="Australia"
          from290USD="From $2.90 USD"
          propPadding="0px 0px 0.2px"
          propHeight="unset"
          propMinWidth="62.2px"
          propDisplay="inline-block"
          propTextDecoration="unset"
          propMinWidth1="111px"
        />
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
