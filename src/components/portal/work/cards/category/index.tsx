import React from "react";
import { Link } from "react-router-dom";
import "./styled.scss";

interface CatCardProps {
  item:{
    name: string;
    description: string;
    picture: string;
   }
}

const CatCard: React.FC<CatCardProps> = ({ item }) => {

  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={item.picture} alt="" />
        <span className="desc">{item.description}</span>
        <span className="title">{item.name}</span>
      </div>
    </Link>
  );
};

export default CatCard;