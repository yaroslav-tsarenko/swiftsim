import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent5 from "../components/FrameComponent5";
import Background2 from "../components/Background2";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import Background3 from "../components/Background3";
import Footer1 from "../components/Footer1";
import styles from "./ProductListing.module.css";

const ProductListing = () => {
  return (
    <div className={styles.productlisting}>
      <div className={styles.productlistingInner}>
        <FrameComponent8 />
      </div>
      <img
        className={styles.xpngIcon}
        loading="lazy"
        alt=""
        src="/1-4-1944xpng@2x.png"
      />
      <main className={styles.containerParent}>
        <section className={styles.container}>
          <div className={styles.gradient} />
          <div className={styles.containerInner}>
            <div className={styles.linkHomeParent}>
              <a
                className={styles.linkHome}
                href="https://www.figma.com/design/CbcKFd3HahloGFWryZhyOg?node-id=1-2"
                target="_blank"
              >
                Home /
              </a>
              <div className={styles.linkLocal}>Local eSIMs</div>
            </div>
          </div>
          <h1 className={styles.heading1}>Local eSIMs</h1>
        </section>
        <section className={styles.frameWrapper}>
          <FrameComponent5 />
        </section>
        <section className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.backgroundParent}>
                <Background2
                  background="/background-10@2x.png"
                  japanESIM="Singapore"
                  from290USD="From $2.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="72.2px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="111px"
                />
                <Background2
                  background="/background-111@2x.png"
                  japanESIM="Mainland China eSIM"
                  from290USD="From $2.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="unset"
                  propDisplay="unset"
                  propTextDecoration="unset"
                  propMinWidth1="111px"
                />
              </div>
              <div className={styles.backgroundGroup}>
                <Background2
                  background="/background-12@2x.png"
                  japanESIM={`Hong Kong & Macao`}
                  from290USD="From $2.50 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="unset"
                  propDisplay="unset"
                  propTextDecoration="unset"
                  propMinWidth1="111px"
                />
                <Background2
                  background="/background-13@2x.png"
                  japanESIM="United Arab Emirates"
                  from290USD="From $2.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="unset"
                  propDisplay="unset"
                  propTextDecoration="unset"
                  propMinWidth1="111px"
                />
              </div>
              <FrameComponent6
                background="/background-14@2x.png"
                eSIMMalaysia="Taiwan"
                from290USD="From $3.90 USD"
                background1="/background-15@2x.png"
                b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                newZealand="Switzerland"
                from290USD1="From $3.90 USD"
                propMinWidth="259px"
                propPadding="unset"
                propHeight="22.4px"
                propMinWidth1="51px"
                propMinWidth2="111px"
                propPadding1="0px 0px 0.2px"
                propHeight1="unset"
                propMinWidth3="80.2px"
              />
              <div className={styles.backgroundContainer}>
                <Background2
                  background="/background-16@2x.png"
                  japanESIM="Egypt"
                  from290USD="From $2.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="40px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="111px"
                />
                <Background2
                  background="/background-17@2x.png"
                  japanESIM="eSIM Philippines"
                  from290USD="From $4.20 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="111.2px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="111.2px"
                />
              </div>
              <FrameComponent7
                background="/background-18@2x.png"
                b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                indonesiaESIM="Turkey"
                from290USD="From $4.90 USD"
                background1="/background-19@2x.png"
                southKoreaESIM="Canada"
                from390USD="From $5.50 USD"
                propMinWidth="259px"
                propPadding="unset"
                propHeight="22.4px"
                propMinWidth1="46px"
                propPadding1="0px 0px 0.2px"
                propHeight1="unset"
                propMinWidth2="58px"
                propMinWidth3="112px"
              />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.backgroundParent1}>
                <Background3
                  background="/background-20@2x.png"
                  b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                  eSIMIndia="France"
                  from590USD="From $4.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="48.2px"
                />
                <Background3
                  background="/background-21@2x.png"
                  b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                  eSIMIndia="Italy"
                  from590USD="From $4.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="30px"
                />
              </div>
              <FrameComponent7
                background="/background-22@2x.png"
                b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                indonesiaESIM="Spain"
                from290USD="From $4.90 USD"
                background1="/background-23@2x.png"
                southKoreaESIM="Cambodia"
                from390USD="From $2.90 USD"
                propMinWidth="259px"
                propPadding="unset"
                propHeight="22.4px"
                propMinWidth1="40px"
                propPadding1="unset"
                propHeight1="22.4px"
                propMinWidth2="76px"
                propMinWidth3="111px"
              />
              <FrameComponent6
                background="/background-24@2x.png"
                eSIMMalaysia="Saudi Arabia"
                from290USD="From $7.00 USD"
                background1="/background-25@2x.png"
                b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                newZealand="Netherlands"
                from290USD1="From $4.90 USD"
                propMinWidth="259px"
                propPadding="0px 0px 0.2px"
                propHeight="unset"
                propMinWidth1="90.1px"
                propMinWidth2="111px"
                propPadding1="unset"
                propHeight1="22.4px"
                propMinWidth3="86px"
              />
              <div className={styles.backgroundParent2}>
                <Background2
                  background="/background-26@2x.png"
                  japanESIM="Vanuatu"
                  from290USD="From $39.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="61px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="120px"
                />
                <Background2
                  background="/background-27@2x.png"
                  japanESIM="Nigeria"
                  from290USD="From $5.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="50px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="112px"
                />
              </div>
              <FrameComponent7
                background="/background-28@2x.png"
                b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                indonesiaESIM="United Kingdom"
                from290USD="From $3.90 USD"
                background1="/background-29@2x.png"
                southKoreaESIM="Kuwait"
                from390USD="From $5.90 USD"
                propMinWidth="259px"
                propPadding="0px 0px 0.2px"
                propHeight="unset"
                propMinWidth1="112.3px"
                propPadding1="0px 0px 0.2px"
                propHeight1="unset"
                propMinWidth2="47.2px"
                propMinWidth3="112px"
              />
            </div>
            <div className={styles.frameParent1}>
              <FrameComponent6
                background="/background-30@2x.png"
                eSIMMalaysia="Peru"
                from290USD="From $12.90 USD"
                background1="/background-31@2x.png"
                b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                newZealand="Germany"
                from290USD1="From $4.90 USD"
                propMinWidth="259px"
                propPadding="0px 0px 0.2px"
                propHeight="unset"
                propMinWidth1="31.4px"
                propMinWidth2="116px"
                propPadding1="unset"
                propHeight1="22.4px"
                propMinWidth3="66px"
              />
              <div className={styles.backgroundParent3}>
                <Background2
                  background="/background-32@2x.png"
                  japanESIM="South Africa"
                  from290USD="From $11.80 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="85px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="113px"
                />
                <Background2
                  background="/background-33@2x.png"
                  japanESIM="Russia"
                  from290USD="From $5.50 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="45.3px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="112px"
                />
              </div>
              <div className={styles.backgroundParent4}>
                <Background3
                  background="/background-34@2x.png"
                  b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                  eSIMIndia="Poland"
                  from590USD="From $3.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="49px"
                />
                <Background3
                  background="/background-35@2x.png"
                  b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                  eSIMIndia="Israel"
                  from590USD="From $4.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="38px"
                />
              </div>
              <div className={styles.backgroundParent5}>
                <Background2
                  background="/background-36@2x.png"
                  japanESIM="Mexico"
                  from290USD="From $7.80 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="49px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="111px"
                />
                <Background2
                  background="/background-37@2x.png"
                  japanESIM="Pakistan"
                  from290USD="From $2.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="60px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="111px"
                />
              </div>
              <FrameComponent7
                background="/background-38@2x.png"
                b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                indonesiaESIM="Greece"
                from290USD="From $4.90 USD"
                background1="/background-39@2x.png"
                southKoreaESIM="Sri Lanka"
                from390USD="From $4.50 USD"
                propMinWidth="259px"
                propPadding="0px 0px 0.2px"
                propHeight="unset"
                propMinWidth1="51px"
                propPadding1="0px 0px 0.2px"
                propHeight1="unset"
                propMinWidth2="62.2px"
                propMinWidth3="112.2px"
              />
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.backgroundParent6}>
                <Background2
                  background="/background-40@2x.png"
                  japanESIM="Dominican Republic"
                  from290USD="From $5.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="unset"
                  propDisplay="unset"
                  propTextDecoration="unset"
                  propMinWidth1="112px"
                />
                <Background2
                  background="/background-41@2x.png"
                  japanESIM="Vatican City"
                  from290USD="From $3.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="86px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="111px"
                />
              </div>
              <div className={styles.backgroundParent7}>
                <Background2
                  background="/background-42@2x.png"
                  japanESIM="Guam"
                  from290USD="From $9.20 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="44.1px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="111px"
                />
                <Background2
                  background="/background-43@2x.png"
                  japanESIM="Bahrain"
                  from290USD="From $25.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="55px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="120px"
                />
              </div>
              <div className={styles.backgroundParent8}>
                <Background2
                  background="/background-44@2x.png"
                  japanESIM="Andorra"
                  from290USD="From $28.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="57.1px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="120px"
                />
                <Background2
                  background="/background-45@2x.png"
                  japanESIM="San Marino"
                  from290USD="From $28.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="79px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="120px"
                />
              </div>
              <FrameComponent7
                background="/background-46@2x.png"
                b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                indonesiaESIM="Sweden"
                from290USD="From $4.90 USD"
                background1="/background-47@2x.png"
                southKoreaESIM="Faroe Islands"
                from390USD="From $16.90 USD"
                propMinWidth="259px"
                propPadding="unset"
                propHeight="22.4px"
                propMinWidth1="56px"
                propPadding1="unset"
                propHeight1="22.4px"
                propMinWidth2="93px"
                propMinWidth3="117px"
              />
              <div className={styles.backgroundParent9}>
                <Background3
                  background="/background-48@2x.png"
                  b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                  eSIMIndia="Norway"
                  from590USD="From $4.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="53.2px"
                />
                <Background3
                  background="/background-49@2x.png"
                  b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                  eSIMIndia="Iceland"
                  from590USD="From $3.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="52.3px"
                />
              </div>
            </div>
            <div className={styles.frameParent3}>
              <FrameComponent7
                background="/background-50@2x.png"
                b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                indonesiaESIM="Cyprus"
                from290USD="From $4.90 USD"
                background1="/background-51@2x.png"
                southKoreaESIM="Chad"
                from390USD="From $43.90 USD"
                propMinWidth="259px"
                propPadding="0px 0px 0.2px"
                propHeight="unset"
                propMinWidth1="50px"
                propPadding1="0px 0px 0.2px"
                propHeight1="unset"
                propMinWidth2="39px"
                propMinWidth3="120.3px"
              />
              <FrameComponent7
                background="/background-52@2x.png"
                b5e0681fcd324b9882f20ddfb="/b5e0681fcd324b9882f20ddfb770dec4png@2x.png"
                indonesiaESIM="Northern Cyprus"
                from290USD="From $3.90 USD"
                background1="/background-53@2x.png"
                southKoreaESIM="Reunion"
                from390USD="From $4.90 USD"
                propMinWidth="259px"
                propPadding="unset"
                propHeight="22.4px"
                propMinWidth1="115px"
                propPadding1="unset"
                propHeight1="22.4px"
                propMinWidth2="57px"
                propMinWidth3="112px"
              />
              <div className={styles.backgroundParent10}>
                <Background2
                  background="/background-54@2x.png"
                  japanESIM="U.S. Virgin Islands"
                  from290USD="From $43.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="121px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="120.3px"
                />
                <Background2
                  background="/background-55@2x.png"
                  japanESIM="Tajikistan"
                  from290USD="$43.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="66px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="80.2px"
                />
              </div>
              <div className={styles.backgroundParent11}>
                <Background2
                  background="/background-56@2x.png"
                  japanESIM="British Virgin Islands"
                  from290USD="$43.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="unset"
                  propDisplay="unset"
                  propTextDecoration="unset"
                  propMinWidth1="80.2px"
                />
                <Background2
                  background="/background-57@2x.png"
                  japanESIM="Nauru"
                  from290USD="$43.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="43px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="80.2px"
                />
              </div>
              <div className={styles.backgroundParent12}>
                <Background2
                  background="/background-58@2x.png"
                  japanESIM="Svalbard and Jan Mayen"
                  from290USD="$43.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="unset"
                  propDisplay="unset"
                  propTextDecoration="unset"
                  propMinWidth1="80.2px"
                />
                <Background2
                  background="/background-59@2x.png"
                  japanESIM="Monaco"
                  from290USD="From $43.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="57.3px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="120.3px"
                />
              </div>
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.backgroundParent13}>
                <Background2
                  background="/background-60@2x.png"
                  japanESIM="Moldova"
                  from290USD="From $9.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="61px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="112px"
                />
                <Background2
                  background="/background-61@2x.png"
                  japanESIM="Madagascar"
                  from290USD="From $12.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="90.2px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="116px"
                />
              </div>
              <div className={styles.backgroundParent14}>
                <Background2
                  background="/background-62@2x.png"
                  japanESIM="Gabon"
                  from290USD="From $43.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="48.1px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="120.3px"
                />
                <Background2
                  background="/background-63@2x.png"
                  japanESIM="Montenegro"
                  from290USD="From $16.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="86px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="117px"
                />
              </div>
              <div className={styles.backgroundParent15}>
                <Background2
                  background="/background-64@2x.png"
                  japanESIM="Kyrgyzstan"
                  from290USD="From $2.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="77px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="111px"
                />
                <Background2
                  background="/background-65@2x.png"
                  japanESIM="Tunisia"
                  from290USD="From $43.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="50px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="120.3px"
                />
              </div>
              <div className={styles.backgroundParent16}>
                <Background2
                  background="/background-66@2x.png"
                  japanESIM="Bhutan"
                  from290USD="From $25.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="51px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="120px"
                />
                <Background2
                  background="/background-67@2x.png"
                  japanESIM="Senegal"
                  from290USD="From $43.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="57.3px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="120.3px"
                />
              </div>
              <div className={styles.backgroundParent17}>
                <Background2
                  background="/background-68@2x.png"
                  japanESIM="Laos"
                  from290USD="$5.99 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="32.2px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="71.3px"
                />
                <Background2
                  background="/background-69@2x.png"
                  japanESIM="El Salvador"
                  from290USD="From $43.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="77px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="120.3px"
                />
              </div>
              <div className={styles.backgroundParent18}>
                <Background2
                  background="/background-70@2x.png"
                  japanESIM="Greenland"
                  from290USD="$43.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="74.1px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="80.2px"
                />
                <Background2
                  background="/background-71@2x.png"
                  japanESIM="Guatemala"
                  from290USD="From $43.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="80.2px"
                  propDisplay="inline-block"
                  propTextDecoration="none"
                  propMinWidth1="120.3px"
                />
              </div>
              <div className={styles.backgroundParent19}>
                <Background2
                  background="/background-72@2x.png"
                  japanESIM="Western Samoa"
                  from290USD="$43.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="112.3px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="80.2px"
                />
                <Background2
                  background="/background-73@2x.png"
                  japanESIM="Bolivia"
                  from290USD="$43.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="46px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="80.2px"
                />
              </div>
              <div className={styles.backgroundParent20}>
                <Background2
                  background="/background-74@2x.png"
                  japanESIM="Tonga"
                  from290USD="$43.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="45px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="80.2px"
                />
                <Background2
                  background="/background-75@2x.png"
                  japanESIM="Honduras"
                  from290USD="$43.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="69px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="80.2px"
                />
              </div>
              <div className={styles.backgroundParent21}>
                <Background2
                  background="/background-76@2x.png"
                  japanESIM="Nicaragua"
                  from290USD="From $43.90 USD"
                  propPadding="0px 0px 0.2px"
                  propHeight="unset"
                  propMinWidth="74.1px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="120.3px"
                />
                <div className={styles.background}>
                  <div className={styles.overlayshadow} />
                  <div className={styles.backgroundParent22}>
                    <img
                      className={styles.backgroundIcon}
                      alt=""
                      src="/background-77@2x.png"
                    />
                    <div className={styles.background1}>
                      <div className={styles.save3}>Save $3</div>
                    </div>
                  </div>
                  <div className={styles.backgroundInner}>
                    <div className={styles.heading3Parent}>
                      <div className={styles.heading3}>
                        <div className={styles.oman}>Oman</div>
                      </div>
                      <div className={styles.from1290UsdParent}>
                        <div className={styles.from1290Usd}>
                          From $12.90 USD
                        </div>
                        <b className={styles.usd}>$15.90 USD</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.backgroundParent23}>
                <Background2
                  background="/background-78@2x.png"
                  japanESIM="Solomon Islands"
                  from290USD="$43.90 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="116px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="80.2px"
                />
                <Background2
                  background="/background-79@2x.png"
                  japanESIM="Kenya"
                  from290USD="From $8.80 USD"
                  propPadding="unset"
                  propHeight="22.4px"
                  propMinWidth="44px"
                  propDisplay="inline-block"
                  propTextDecoration="unset"
                  propMinWidth1="112px"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer1 />
      </main>
      <div className={styles.horizontalborder} />
      <img className={styles.backgroundIcon1} alt="" src="/background-80.svg" />
    </div>
  );
};

export default ProductListing;
