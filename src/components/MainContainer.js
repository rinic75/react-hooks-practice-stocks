import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolios, setPortfolios] = useState([])
  const [sort, setSort] = useState("Alphabetically")
  const [filtered, setFiltered] = useState("Tech")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(r => r.json())
      .then(data => setStocks(data))
  }, [])

  function addPortfoilo(newPortfolios) {
    const addedPortfoilos = [...portfolios, newPortfolios]
    setPortfolios(addedPortfoilos)
  }
  function deletePortfoilo(newPortfolios) {
    const deletedPortfoilos = portfolios.filter(portfoilo => portfoilo.id !== newPortfolios.id)
    setPortfolios(deletedPortfoilos)
  }

  const sortedStocks = [...stocks].sort((stock1, stock2) => {
    if (sort === "Price") {
      return stock1.price - stock2.price
    } else if (sort === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name)
    }
  })
  const filteredStocks = sortedStocks.filter(stock => stock.type === filtered)
  return (
    <div>
      <SearchBar onHandleSort={setSort} onHandleFitler={setFiltered} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} addPortfoilo={addPortfoilo} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolios} addPortfoilo={deletePortfoilo} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
