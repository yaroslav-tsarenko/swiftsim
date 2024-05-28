import styles from "./SwiftSimWaveBenefits.module.css";

const SwiftSimWaveBenefits = ({ className = "" }) => {
  return (
    <div className={[styles.swiftSimWaveBenefits, className].join(" ")}>
      <div className={styles.background}>
        <div className={styles.whyTitle}>
          <h1 className={styles.whySwiftsimwave}>Why Choose SwiftSIMWave?</h1>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.link11375xpngParent}>
            <img
              className={styles.link11375xpng}
              loading="lazy"
              alt=""
              src="/link--1-1-375xpng@2x.png"
            />
            <div className={styles.convenienceContent}>
              <b className={styles.convenience}>Convenience</b>
              <p className={styles.activateAndManage}>
                Activate and manage your eSIM directly from your device, no need
                to wait for a physical card in the mail.
              </p>
            </div>
          </div>
          <div className={styles.link21375xpngParent}>
            <img
              className={styles.link21375xpng}
              loading="lazy"
              alt=""
              src="/link--2-1-375xpng@2x.png"
            />
            <div className={styles.securityContent}>
              <h3 className={styles.security}>Security</h3>
              <p className={styles.esimsAreMore}>
                eSIMs are more secure than traditional SIM cards, making them
                less vulnerable to loss or theft.
              </p>
            </div>
          </div>
          <div className={styles.flexibilityContentParent}>
            <div className={styles.flexibilityContent}>
              <img
                className={styles.link31375xpng}
                loading="lazy"
                alt=""
                src="/link--3-1-375xpng@2x.png"
              />
              <div className={styles.flexibilityParent}>
                <b className={styles.flexibility}>Flexibility</b>
                <p className={styles.easilySwitchBetween}>
                  Easily switch between eSIM profiles on compatible devices,
                  allowing you to have multiple phone numbers or data plans.
                </p>
              </div>
            </div>
            <div className={styles.link4Sinm2375xpngParent}>
              <img
                className={styles.link4Sinm2375xpng}
                loading="lazy"
                alt=""
                src="/link--4sinm-2-375xpng@2x.png"
              />
              <div className={styles.globalConnectivityParent}>
                <h3 className={styles.globalConnectivity}>
                  Global Connectivity
                </h3>
                <p className={styles.travelSeamlesslyWith}>
                  Travel seamlessly with eSIMs, as they can be programmed with
                  data plans from different carriers around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SwiftSimWaveBenefits.propTypes = {
  className: PropTypes.string,
};

export default SwiftSimWaveBenefits;
