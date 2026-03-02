/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = 0;
    let sell = 0;
    let profit = 0;

    for(let i = 1; i < prices.length; i++){
        if(prices[buy] > prices[i]){
            buy = i;
            if(buy > sell){
                sell = buy;
            }
        }
        if(prices[sell] < prices[i]){
            sell = i;
        }
        if(prices[sell] - prices[buy] > profit){
            profit = prices[sell] - prices[buy];
        }
    }
    return profit
};