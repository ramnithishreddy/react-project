import React from "react";
import { useNavigate } from "react-router-dom";
import FilterButton from "./FilterButton";
import { useCart } from "./CartProvider";

const Grocery = () => {
  const navigate = useNavigate();
  const {
    handleLowToHigh,
    handleHighToLow,
    sortedData,
    currentQuantity,
    setCurrentQuantity,
  } = useCart();

  const onItemClick = (item) => {
    item = {
      ...item,
      Qty: Number(currentQuantity) === 0 ? +1 : Number(currentQuantity),
    };
    setCurrentQuantity(Number(item.Qty));
    navigate(`/ItemDetails`, { state: item });
  };
  return (
    <div>
      <FilterButton
        handleLowToHigh={handleLowToHigh}
        handleHighToLow={handleHighToLow}
      />
      <div className="Style">
        {sortedData.map((item) => (
          <div key={item.id} className="item" onClick={() => onItemClick(item)}>
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
  );
};

export default Grocery;
