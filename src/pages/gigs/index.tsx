import React, { useRef, useState } from "react";
import "./styled.scss";
import { gigs as gigsData } from "../../data.js";
import GigCard from "../../components/portal/work/cards/gigCard/index";

interface Gig {
  id: number;
  img: string;
  pp: string;
  username: string;
  desc: string;
  star: number;
  price: number;
}

function Gigs() {
  const [sort, setSort] = useState<"sales" | "createdAt">("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);

  const reSort = (type: "sales" | "createdAt"): void => {
    setSort(type);
    setOpen(false);
  };

  const apply = (): void => {
    if (minRef.current && maxRef.current) {
      console.log(minRef.current.value);
      console.log(maxRef.current.value);
    }
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">CodeDev Graphics & Design</span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with CodeDev AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigsData.map((gig: Gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;