import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OverlayShadow1 from "./OverlayShadow1";
import OverlayShadow from "./OverlayShadow";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/pdp");
  }, [navigate]);

  const onLinkClick = useCallback(() => {
    navigate("/productlisting");
  }, [navigate]);

  return (
    <section className={[styles.homepageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.heading2LocalEslmsParent}>
              <h2 className={styles.heading2}>Local eSlMs</h2>
              <div className={styles.horizontalborder} />
            </div>
            <h2 className={styles.itemHeading}>Regional eSlMs</h2>
          </div>
        </div>
        <div className={styles.eSIMCardItemsParent}>
          <div className={styles.eSIMCardItems}>
            <div className={styles.eSIMCardRow}>
              <div className={styles.overlayshadow}>
                <div className={styles.link} onClick={onLinkContainerClick}>
                  <img
                    className={styles.imagename1684140246097375xjpIcon}
                    loading="lazy"
                    alt=""
                    src="/imagename1684140246097-375xjpeg@2x.png"
                  />
                  <div className={styles.linkInner}>
                    <div className={styles.usaParent}>
                      <a
                        className={styles.usa}
                        href="https://www.figma.com/design/CbcKFd3HahloGFWryZhyOg?node-id=1-4455"
                        target="_blank"
                      >
                        USA
                      </a>
                      <div className={styles.usd}>$3.90 USD</div>
                    </div>
                  </div>
                </div>
              </div>
              <OverlayShadow1
                c812d45a1b7456695c833b055="/7f0961f86c894ba7b89fe6d4fc9f10dc-375xjpeg@2x.png"
                southKoreaESIM="eSIM India"
                uSD="$5.90 USD"
                propDebugCommit="unset"
                propDisplay="inline-block"
                propMinWidth="82px"
              />
            </div>
            <div className={styles.overlayshadowParent}>
              <OverlayShadow1
                c812d45a1b7456695c833b055="/e67cbd94711e4435bf17b864b4dc78c6-375xjpeg@2x.png"
                southKoreaESIM="Japan eSIM"
                uSD="$2.90 USD"
                propDebugCommit="unset"
                propDisplay="inline-block"
                propMinWidth="93px"
              />
              <OverlayShadow1
                c812d45a1b7456695c833b055="/7071d054bc94408f8ba9dc7f86f2406a-375xpng@2x.png"
                southKoreaESIM="Indonesia eSIM"
                uSD="$2.90 USD"
                propDebugCommit="unset"
                propDisplay="inline-block"
                propMinWidth="120.2px"
              />
              <OverlayShadow1
                c812d45a1b7456695c833b055="/52657d559c894b4eb7554108f94654f1-375xjpg@2x.png"
                southKoreaESIM="eSIM Malaysia"
                uSD="$2.90 USD"
                propDebugCommit="unset"
                propDisplay="inline-block"
                propMinWidth="113.1px"
              />
              <OverlayShadow1
                c812d45a1b7456695c833b055="/15e38a27d1d34142a6d1176cd4753d66-375xjpeg@2x.png"
                southKoreaESIM="Vietnam eSIM"
                uSD="$2.90 USD"
                propDebugCommit="unset"
                propDisplay="inline-block"
                propMinWidth="110px"
              />
              <OverlayShadow1
                c812d45a1b7456695c833b055="/f5b5c0c069254c5293fd69025ea3c38b-375xjpeg@2x.png"
                southKoreaESIM="Thailand"
                uSD="$2.90 USD"
                propDebugCommit="unset"
                propDisplay="inline-block"
                propMinWidth="70px"
              />
              <OverlayShadow1
                c812d45a1b7456695c833b055="/4c812d45a1b7456695c833b05522dc20-375xjpeg@2x.png"
                southKoreaESIM="South Korea eSIM"
                uSD="$3.90 USD"
              />
              <OverlayShadow1
                c812d45a1b7456695c833b055="/imagename1709895537576-375xjpeg@2x.png"
                southKoreaESIM="New Zealand"
                uSD="$2.90 USD"
                propDebugCommit="unset"
                propDisplay="inline-block"
                propMinWidth="104.1px"
              />
              <OverlayShadow1
                c812d45a1b7456695c833b055="/e5b07808ceef419d9b250624de63e081-375xjpeg@2x.png"
                southKoreaESIM="Australia"
                uSD="$2.90 USD"
                propDebugCommit="unset"
                propDisplay="inline-block"
                propMinWidth="71px"
              />
            </div>
          </div>
          <div className={styles.eSIMCardItems1}>
            <div className={styles.philippinesParent}>
              <OverlayShadow1
                c812d45a1b7456695c833b055="/5aa30f96aeea49c9aab43b9616e284c1-375xjpeg@2x.png"
                southKoreaESIM="Singapore"
                uSD="$2.90 USD"
                propDebugCommit="unset"
                propDisplay="inline-block"
                propMinWidth="83px"
              />
              <OverlayShadow1
                c812d45a1b7456695c833b055="/787758472e964234bd3ff27e56f6ec4b-375xpng@2x.png"
                southKoreaESIM="Mainland China eSIM"
                uSD="$2.90 USD"
                propDebugCommit="unset"
                propDisplay="unset"
                propMinWidth="unset"
              />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.overlayshadowGroup}>
                <OverlayShadow
                  d38359ffd2e47fdb6e6c31482="/2d38359ffd2e47fdb6e6c314828c91e3-375xjpeg@2x.png"
                  hongKongMacao={`Hong Kong & Macao`}
                  uSD="$2.50 USD"
                />
                <OverlayShadow
                  d38359ffd2e47fdb6e6c31482="/719204d61bd74403b5b2c0101ec9f685-375xjpeg@2x.png"
                  hongKongMacao="Taiwan"
                  uSD="$3.90 USD"
                  propDisplay="inline-block"
                  propMinWidth="58px"
                />
              </div>
              <div className={styles.overlayshadowContainer}>
                <OverlayShadow
                  d38359ffd2e47fdb6e6c31482="/0fe4685726a143d39d4f9dfbd6051060-375xjpeg@2x.png"
                  hongKongMacao="United Arab Emirates"
                  uSD="$2.90 USD"
                  propDisplay="unset"
                  propMinWidth="unset"
                />
                <OverlayShadow
                  d38359ffd2e47fdb6e6c31482="/imagename1709894105448-375xjpeg@2x.png"
                  hongKongMacao="Switzerland"
                  uSD="$3.90 USD"
                  propDisplay="inline-block"
                  propMinWidth="92px"
                />
              </div>
            </div>
            <div className={styles.philippinesParent1}>
              <OverlayShadow1
                c812d45a1b7456695c833b055="/92e3bc4840b54b1a9c631c234ce99180-375xjpeg@2x.png"
                southKoreaESIM="Egypt"
                uSD="$2.90 USD"
                propDebugCommit="unset"
                propDisplay="inline-block"
                propMinWidth="45px"
              />
              <OverlayShadow1
                c812d45a1b7456695c833b055="/fd1f0c8f8d6e4a3fa0be4555e27b657b-375xjpeg@2x.png"
                southKoreaESIM="eSIM Philippines"
                uSD="$4.20 USD"
                propDebugCommit="unset"
                propDisplay="inline-block"
                propMinWidth="127.1px"
              />
            </div>
            <div className={styles.canadaParent}>
              <OverlayShadow1
                c812d45a1b7456695c833b055="/4b69f7e2c67e4067ba854bc2f63859a6-375xpng@2x.png"
                southKoreaESIM="Turkey"
                uSD="$4.90 USD"
                propDebugCommit="unset"
                propDisplay="inline-block"
                propMinWidth="53px"
              />
              <OverlayShadow1
                c812d45a1b7456695c833b055="/2fc7cccb96534016b5a749cb90b242bf-375xjpeg@2x.png"
                southKoreaESIM="Canada"
                uSD="$5.50 USD"
                propDebugCommit="unset"
                propDisplay="inline-block"
                propMinWidth="66.2px"
              />
            </div>
          </div>
        </div>
        <div className={styles.destinationsLink}>
          <Button
            className={styles.link1}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#193170",
              borderRadius: "41px",
              "&:hover": { background: "#193170" },
              width: 184.7,
            }}
            onClick={onLinkClick}
          >
            More destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
