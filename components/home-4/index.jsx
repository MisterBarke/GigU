import Header from "./Header";
import Footer from "./Footer";
import Hero4 from "../hero/hero-4";
import JobFilterTab from "../job-featured/JobFilterTab";
import Block2 from "../block/Block2";
import TopCompany from "../top-company/TopCompany";
import JobCategorie from "../job-categories/JobCategorie";
import Blog3 from "../blog/Blog3";
import Partner from "../common/partner/Partner";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";

const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero4 />
      {/* <!-- End Banner Section--> */}

      <section className="job-section alternate">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Emplois les plus populaires</h2>
            <div className="text">
              Connaissez votre valeur et trouvez un emploi qui qualifie votre vie
            </div>
          </div>
          {/* End sec-title */}

          <div className="default-tabs tabs-box">
            <JobFilterTab />
          </div>
          {/* End .default-tabs */}
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <section className="process-section pt-0">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Comment ça marche</h2>
            <div className="text">Job pour n'importe qui, n'importe où</div>
          </div>

          <div className="row" data-aos="fade-up">
            <Block2 />
          </div>
        </div>
      </section>
      {/* <!-- End Process Section --> */}

      <section className="top-companies style-two">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Top des societés enregistrés</h2>
            <div className="text">
              Quelques societés que nous avions aider à recrutrer d'excellents freelancers.
            </div>
          </div>

          <div className="carousel-outer" data-aos="fade-up">
            <div className="companies-carousel">
              <TopCompany />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Top Companies --> */}

      <section className="job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Les Jobs populaires</h2>
            <div className="text">2003 Jobs en ligne - 293 ajoutés aujourd'hui.</div>
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <!-- Category Block --> */}
            <JobCategorie />
          </div>
        </div>
      </section>
      {/* End Job Categorie Section */}

      <section className="news-section style-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Articles récents</h2>
            <div className="text">
              De nouvelles offres postées tout les jours.
            </div>
          </div>
          {/* End ."sec-title */}
          <div className="row" data-aos="fade-up">
            <Blog3 />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}

      <section className="clients-section alternate">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>
      {/* <!-- End Clients Section--> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
