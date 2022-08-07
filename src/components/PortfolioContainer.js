import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, addPortfoilo}) {
  const renderPortfolios = stocks.map(stock => {
    return <Stock key={stock.id} stock={stock} addPortfoilo={addPortfoilo}/>
  })
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        renderPortfolios
      }
    </div>
  );
}

export default PortfolioContainer;
