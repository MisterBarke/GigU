'use client'

import { useRouter } from "next/navigation";



const SearchForm3 = () => {
    const router = useRouter()
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <div className="row">
        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-4 col-md-12 col-sm-12">
          <span className="icon flaticon-search-1"></span>
          <input
            type="text"
            name="field_name"
            placeholder="Nom du job, mots clés, ou entreprise"
          />
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
          <span className="icon flaticon-map-locator"></span>
          <input type="text" name="field_name" placeholder="Pays" />
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-3 col-md-12 col-sm-12 category">
          <span className="icon flaticon-briefcase"></span>
          <select className="chosen-single form-select">
            <option defaultValue="">Toutes les catégories</option>
            <option defaultValue="44">Comptabilité/Finance</option>
            <option defaultValue="106">Transport</option>
            <option defaultValue="46">Plomberie</option>
            <option defaultValue="48">Design</option>
            <option defaultValue="47">Developpement</option>
            <option defaultValue="45">Santé</option>
            <option defaultValue="105">Marketing</option>
            <option value="107">Project Management</option>
          </select>
        </div>

        {/* <!-- Form Group --> */}
        <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right">
          <button
            type="submit"
            className="theme-btn btn-style-one"
            onClick={() => router.push("/job-list-v3")}
          >
            Trouver le Job
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm3;
