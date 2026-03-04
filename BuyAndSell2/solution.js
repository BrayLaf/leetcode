/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;

    for(let i = 1; i < prices.length; i++){
        // greedy pairwise approach 
        const dailyprof = prices[i] - prices[i - 1];
        //if dailyprof drops add 0 aka no transaction
        profit += Math.max(0, dailyprof);
    }
    return profit;
};