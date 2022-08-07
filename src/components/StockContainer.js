import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addPortfoilo}) {
  const renderStocks = stocks.map(stock=> {
    return <Stock key={stock.id} stock={stock} addPortfoilo={addPortfoilo}/>
  })
  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
