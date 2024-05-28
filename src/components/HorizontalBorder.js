import "./HorizontalBorder.css";

const HorizontalBorder = ({ className = "" }) => {
  return (
    <footer className={`horizontalborder8 ${className}`}>
      <div className="container12">
        <div className="frame-parent20">
          <div className="image-3-parent2">
            <img className="image-3-icon5" alt="" src="/image-3@2x.png" />
            <div className="vector-wrapper2">
              <img className="vector-icon4" alt="" src="/vector-1.svg" />
            </div>
          </div>
          <div className="frame-wrapper9">
            <div className="link-svg-parent1">
              <img className="link-svg13" alt="" src="/link--svg-2.svg" />
              <img className="link-svg14" alt="" src="/link--svg-3.svg" />
              <img className="link-svg15" alt="" src="/link--svg-4.svg" />
            </div>
          </div>
        </div>
        <div className="frame-parent21">
          <div className="top-destinations-container">
            <b className="top-destinations3">TOP DESTINATIONS</b>
            <div className="list16">
              <div className="item-link57">USA eSIM</div>
              <div className="item-link58">Japan eSIM</div>
              <div className="item-link59">Indonesia eSIM</div>
              <div className="item-link60">India eSIM</div>
              <div className="item-link61">South Korea eSIM</div>
              <div className="item-link62">China eSIM</div>
              <div className="item-link63">Europe eSIM</div>
            </div>
          </div>
          <div className="about-us-container">
            <b className="about-us3">ABOUT US</b>
            <div className="list17">
              <a className="item-link64">About Us</a>
              <a
                className="item-link65"
                href="https://www.figma.com/design/CbcKFd3HahloGFWryZhyOg?node-id=1-7001"
                target="_blank"
              >
                Contact Us
              </a>
              <div className="item-link66">Terms of Use</div>
              <a
                className="item-link67"
                href="https://www.figma.com/design/CbcKFd3HahloGFWryZhyOg?node-id=1-12372"
                target="_blank"
              >
                Affiliate Partners
              </a>
            </div>
          </div>
        </div>
        <div className="frame-parent22">
          <div className="support-policy-container">
            <div className="support-policy3">{`SUPPORT & POLICY`}</div>
            <div className="list18">
              <a
                className="item-link68"
                href="https://www.figma.com/design/CbcKFd3HahloGFWryZhyOg?node-id=1-12520"
                target="_blank"
              >
                Payment Methods
              </a>
              <a className="item-link69">Privacy Policy</a>
              <div className="item-link70">Refunds Policy</div>
              <a
                className="item-link71"
                href="https://www.figma.com/design/CbcKFd3HahloGFWryZhyOg?node-id=1-6138"
                target="_blank"
              >
                FAQs
              </a>
            </div>
          </div>
          <div className="learn-more-container">
            <a className="learn-more4">LEARN MORE</a>
            <div className="list19">
              <a className="item-link72">Blog</a>
              <div className="item-link73">Shipping Policy</div>
              <a
                className="item-link74"
                href="https://www.figma.com/design/CbcKFd3HahloGFWryZhyOg?node-id=1-7748"
                target="_blank"
              >
                eSIM compatible devices
              </a>
              <a
                className="item-link75"
                href="https://www.figma.com/design/CbcKFd3HahloGFWryZhyOg?node-id=1-15679"
                target="_blank"
              >
                How to set up your eSIM
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

HorizontalBorder.propTypes = {
  className: PropTypes.string,
};

export default HorizontalBorder;
