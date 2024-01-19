import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "./data.json";

export default function Home() {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);

  const onItemClick = (item) => {
    setSuggestions([]);
    item = { ...item, Qty: Number(item.Qty) === 0 ? +1 : Number(item.Qty) };
    navigate(`/ItemDetails`, { state: item });
  };
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <div>
            <div className="Style">
              {data.Grocery.map((item) => (
                <div
                  key={item.id}
                  className="item"
                  onClick={() => onItemClick(item)}
                >
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                  <div className="product__rating">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <p>🌟</p>
                      ))}
                  </div>
                  <p>Price: ₹{item.Price}</p>
                </div>
              ))}
            </div>
            <div className="Style">
              {data.Mobiles.map((item) => (
                <div
                  key={item.id}
                  className="item"
                  onClick={() => onItemClick(item)}
                >
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                  <div className="product__rating">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <p>🌟</p>
                      ))}
                  </div>
                  <p>Price: ₹{item.Price}</p>
                </div>
              ))}
            </div>
            <div className="Style">
              {data.Fashion.map((item) => (
                <div
                  key={item.id}
                  className="item"
                  onClick={() => onItemClick(item)}
                >
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                  <div className="product__rating">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <p>🌟</p>
                      ))}
                  </div>
                  <p>Price: ₹{item.Price}</p>
                </div>
              ))}
            </div>
            <div className="Style">
              {data["T.V's & Appliances"].map((item) => (
                <div
                  key={item.id}
                  className="item"
                  onClick={() => onItemClick(item)}
                >
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                  <div className="product__rating">
                    {Array(item.rating)
                      .fill()
                      .map((_, i) => (
                        <p>🌟</p>
                      ))}
                  </div>
                  <p>Price: ₹{item.Price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
