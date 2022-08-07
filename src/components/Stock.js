import React from "react";

function Stock({stock, addPortfoilo, deletePortfolios}) {
  const {name, price} = stock
  function handleClick() {
    addPortfoilo(stock)
  }
  
  return (
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
