import React from "react";
import "./styled.scss";
const imgMan =  require('../../../assets/img/man.png');
const imgSearch =  require('../../../assets/img/search.png');

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
          Encontre os serviços <span>freelance</span> perfeitos para o seu negócio
          </h1>
          <div className="search">
            <div className="searchInput">
            <img src={imgSearch} alt="" />
              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src={imgMan} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;