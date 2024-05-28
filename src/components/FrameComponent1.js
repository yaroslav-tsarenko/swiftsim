import Item from "./Item";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={[styles.testimonialsContentWrapper, className].join(" ")}
    >
      <div className={styles.testimonialsContent}>
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.testimonialContent}>
              <div className={styles.testimonialUser}>
                <img
                  className={styles.containerIcon}
                  loading="lazy"
                  alt=""
                  src="/container@2x.png"
                />
              </div>
              <div className={styles.testimonialQuoteParent}>
                <div className={styles.testimonialQuote}>
                  <img
                    className={styles.listIcon}
                    loading="lazy"
                    alt=""
                    src="/list.svg"
                  />
                </div>
                <p className={styles.swiftsimwavecomProvidesHigh}>
                  SwiftSIMWave made switching to an eSIM a breeze! The process
                  was quick and easy, and their customer support was fantastic
                  when I had a question.
                </p>
              </div>
            </div>
            <div className={styles.userNameLocation}>
              <div className={styles.kerryJp}>2022-11-02 Kerry 🇯🇵 JP</div>
            </div>
          </div>
          <Item
            container="/container-1@2x.png"
            list="/list-1.svg"
            iHaveUsedSwiftsimwaveCard="I love the convenience of eSIMs. With SwiftSIMWave, I can easily manage my data plans for both work and travel all from one place."
            laganaMartinUS="2022-11-08 Lagana Martin 🇺🇸 US"
          />
          <Item
            container="/container-2@2x.png"
            list="/list-2.svg"
            iHaveUsedSwiftsimwaveCard="I was worried about switching to an eSIM, but SwiftSIMWave's website was so user-friendly that I had no problems. Now I can't imagine going back to traditional SIM cards!"
            laganaMartinUS="2022-11-10 Roosy Bilan 🇨🇦 CA"
            propWidth="188.3px"
            propDisplay="flex"
          />
          <div className={styles.item1} />
          <div className={styles.item2} />
          <div className={styles.item3} />
        </div>
        <div className={styles.container1}>
          <img className={styles.linkSvg} alt="" src="/link--svg-2.svg" />
          <div className={styles.navigationPlaceholder}>{`1/2 `}</div>
          <img className={styles.linkSvg1} alt="" src="/link--svg-3.svg" />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
