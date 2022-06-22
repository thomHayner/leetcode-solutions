/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
//     let mostProfitableSale = 0;
//     let biggest = Math.max(prices);
//     let smallest = Math.min(prices);
//     let possibleMax = biggest-smallest
//     let length = prices.length
    
//     prices.map((n,i) => {
//         for (let j = i+1; j < length; j++) {
//             if (prices[j] - n === possibleMax) {
//                 return possibleMax
//             }
//             if (prices[j] > prices[i]) {
//                 if (prices[j]-prices[i] > mostProfitableSale) {
//                     mostProfitableSale = prices[j]-prices[i]
//                 }
//             }
//         }
//     });
    
// //     for (let i = 0; i < prices.length-1; i++) {
// //         if (!(biggest - prices[i] < mostProfitableSale)) {
// //             for (let j = i+1; j < prices.length; j++) {
// //             if (prices[j] > prices[i]) {
// //                 if (prices[j]-prices[i] > mostProfitableSale) {
// //                     mostProfitableSale = prices[j]-prices[i]
// //                 }
// //             }
// //         }
// //     }
    
//     return mostProfitableSale
};
