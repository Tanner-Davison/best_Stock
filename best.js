function bestStockTimeToSell(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
  
    for (let i = 1; i < prices.length; i++) {
      const price = prices[i];
      const profit = price - minPrice;
  
      if (profit > maxProfit) {
        maxProfit = profit;
      }
  
      if (price < minPrice) {
        minPrice = price;
      }
    }
  
    return console.log(`buy at ${minPrice} and sell at ${maxProfit}`)

}
  
  const myStock = [3, 4, 5, 6];
  console.log(bestStockTimeToSell(myStock));