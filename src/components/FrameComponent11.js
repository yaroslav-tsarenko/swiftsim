import styles from "./FrameComponent11.module.css";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <header className={[styles.containerParent, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.background}>
          <b className={styles.linkWhatsapp}>
            Join Us Today! Offers eSIMs with global data packages in 200+
            countries
          </b>
        </div>
      </div>
      <div className={styles.background1}>
        <div className={styles.header}>
          <div className={styles.container1}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.image3Parent}>
                  <img
                    className={styles.image3Icon}
                    loading="lazy"
                    alt=""
                    src="/image-3@2x.png"
                  />
                  <div className={styles.vectorWrapper}>
                    <img
                      className={styles.vectorIcon}
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.list}>
                <a className={styles.linkDestinations}>Destinations</a>
                <div className={styles.svgWrapper}>
                  <img
                    className={styles.svgIcon}
                    loading="lazy"
                    alt=""
                    src="/svg.svg"
                  />
                </div>
                <a className={styles.linkSupport}>Support</a>
                <div className={styles.svgContainer}>
                  <img className={styles.svgIcon1} alt="" src="/svg-1.svg" />
                </div>
                <a className={styles.linkAbout}>About us</a>
              </div>
            </div>
            <div className={styles.containerInner}>
              <div className={styles.frameGroup}>
                <div className={styles.linkSvgWrapper}>
                  <img
                    className={styles.linkSvg}
                    loading="lazy"
                    alt=""
                    src="/link--svg.svg"
                  />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.linkSvgParent}>
                    <img
                      className={styles.linkSvg1}
                      alt=""
                      src="/link--svg-1.svg"
                    />
                    <img className={styles.svgIcon2} alt="" src="/svg-2.svg" />
                  </div>
                </div>
                <div className={styles.background2}>
                  <div className={styles.container2}>
                    <div className={styles.listWrapper}>
                      <div className={styles.list1} />
                    </div>
                    <div className={styles.button}>
                      <img
                        className={styles.languagesvgIcon}
                        loading="lazy"
                        alt=""
                        src="/languagesvg.svg"
                      />
                      <div className={styles.englishWrapper}>
                        <a className={styles.english}>English</a>
                      </div>
                      <div className={styles.svgFrame}>
                        <img
                          className={styles.svgIcon3}
                          alt=""
                          src="/svg-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
