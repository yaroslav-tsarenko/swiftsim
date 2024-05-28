import styles from "./Background.module.css";

const Background = ({ className = "" }) => {
  return (
    <div className={[styles.background, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.frequentlyAskedQuestionsFaWrapper}>
          <h2 className={styles.frequentlyAskedQuestions}>
            Frequently Asked Questions (FAQs)
          </h2>
        </div>
        <div className={styles.container1}>
          <div className={styles.fAQCard}>
            <div className={styles.fAQDropdown}>
              <input className={styles.svg} type="radio" />
            </div>
            <p className={styles.howDoesSwiftsimwave}>
              How does SwiftSIMWave eSIM help me save on roaming charges?
            </p>
          </div>
          <div className={styles.fAQAnswer}>
            <div className={styles.answerContent}>
              <input className={styles.svg1} type="radio" />
              <input className={styles.svg2} type="radio" />
              <input className={styles.svg3} type="radio" />
              <input className={styles.svg4} type="radio" />
              <input className={styles.svg5} type="radio" />
              <input className={styles.svg6} type="radio" />
            </div>
            <div className={styles.answerListWrapper}>
              <div className={styles.answerList}>
                <div className={styles.additionalAnswers}>
                  <p className={styles.howFastAnd}>
                    How fast and easy is the connectivity with SwiftSIMWave
                    eSIM?
                  </p>
                  <p className={styles.doINeed}>
                    Do I need to submit passport or ID information for
                    SwiftSIMWave eSIM activation?
                  </p>
                  <div className={styles.whichDevicesAre}>
                    Which devices are compatible with eSIM card?
                  </div>
                </div>
                <div className={styles.whenShouldI}>
                  When should I set up my eSIM?
                </div>
                <div className={styles.canIMake}>
                  Can I make phone calls and send SMS with eSIM?
                </div>
                <div className={styles.howCanI}>
                  How can I check my data balance?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
