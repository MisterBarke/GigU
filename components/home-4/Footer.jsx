import Image from "next/image";
import CopyrightFooter from "../footer/common-footer/CopyrightFooter";
import FooterApps from "../footer/FooterApps";
import FooterContent3 from "../footer/FooterContent3";
import SearchForm2 from "../footer/SearchForm2";

const Footer = () => {
  return (
    <footer
      className="main-footer style-three"
      style={{ backgroundImage: "url(/images/background/3.png)" }}
    >
      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="newsletter-form wow fadeInUp">
            <div className="sec-title light text-center">
              <h2>Souscrivez à notre Newsletter</h2>
              <div className="text">Nous n'envoyons pas de spam.</div>
            </div>
            <SearchForm2 />
          </div>
          {/* End .newsletter-form */}

          <div className="row">
            <div className="big-column col-xl-3 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <a href="#">
                  <h1 className="bold text-light">GigU</h1>
                  </a>
                </div>
                <p className="phone-num">
                  <span>Appelez nous </span>
                  <a href="https://softart.live">+227 99361120</a>
                </p>
                <p className="address">
                  Niamey/Niger
                  <a href="mailto:companysoftart@gmail.com" className="email">
                    support@gigu.com
                  </a>
                </p>
              </div>
            </div>
            {/* End footer address left widget */}

            <div className="big-column col-xl-9 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent3 />

                <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                  {/* <div className="footer-widget">
                    <h4 className="widget-title">Réseaux sociaux</h4>
                    <FooterApps />
                  </div> */}
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
  );
};

export default Footer;
