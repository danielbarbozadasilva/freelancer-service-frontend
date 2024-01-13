import React from "react";
import "./styled.scss";
import { Link } from "react-router-dom";

interface ProductCardProps {
  item: {
    _id?: string;
    userId?: string;
    title: string
    description: string
    category: string
    price: number
    promotion: number
    images: string[]
    deliveryTime: number
    features: string[]
    sales: number
    rating?: string
    likes?: string
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (<></>
    // <Link to={`/product/${item.id}`} className="link">
    //   <div className="productCard">
    //     <img src={item.images} alt="" />
    //     <div className="info">
    //       <div className="user">
    //         <span>{item.username}</span>
    //       </div>
    //       <p>{item.desc}</p>
    //       <div className="star">
    //         <img src="./img/star.png" alt="" />
    //         <span>{item.star}</span>
    //       </div>
    //     </div>
    //     <hr />
    //     <div className="detail">
    //       <img src="./img/heart.png" alt="" />
    //       <div className="price">
    //         <span>STARTING AT</span>
    //         <h2>
    //           R$ {item.price}
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    // </Link>
  );
};

export default ProductCard;