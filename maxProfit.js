// 121. Best Time to Buy and Sell Stock
// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock),
// design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// time O(n)
// space O(1)
function maxProfit (arr) {
    let buy = 0;
    let sell = 1;
    let maxProfit = 0;
    
    while(sell < arr.length) {
        if(arr[sell] > arr[buy]) {
            maxProfit = Math.max(maxProfit, arr[sell] - arr[buy]);
            sell++;
        } else {
            buy = sell;
            sell++;
        }
    }
    return maxProfit;
}