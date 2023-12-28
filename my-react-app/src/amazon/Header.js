import React, { useState } from "react";
import "./Header.css";
// import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "./CartProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "./data.json";

function Header() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onItemClick = (item) => {
    setSuggestions([]);
    item = { ...item, Qty: Number(item.Qty) === 0 ? +1 : Number(item.Qty) };
    navigate(`/ItemDetails`, { state: item });
  };
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    const filteredSuggestions = Object.keys(data)
      .flatMap((category) => data[category])
      .filter((item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
      );
    if (inputValue.length > 0) {
      setSuggestions(filteredSuggestions);
    } else setSuggestions([]);
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="header-logo"
        />
      </Link>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search for items..."
          value={searchInput}
          onChange={handleInputChange}
        />
        <SearchIcon className="header__searchIcon" />
        <ul className="suggestions">
          {suggestions.map((item) => (
            <li key={item.id} onClick={() => onItemClick(item)}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="search-container"></div> */}

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/Cart">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {cartItems?.length}
            </span>
          </div>
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/Grocery">
              Grocery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Mobiles">
              Mobiles
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Fashion">
              Fashion
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/Cart">
              {cartItems.length > 0 ? (
                <>
                  <span>
                    <ShoppingCartIcon />
                  </span>
                  <span className="cartIcon">{cartcount}</span>
                </>
              ) : (
                <>
                  <span>
                    <ShoppingCartIcon />
                  </span>
                  <span className="cartIcon">{cartcount}</span>
                </>
              )}
              <span className="CartIcon"></span>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Header;
