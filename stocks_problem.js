// Suppose we could access yesterday's stock prices as an array, where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

// Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

let yesterdayStockPrices = [5,4,3,2,1];

//this function is used to sort number values correctely instead of unicode values
function compareNumber(a, b) {
    return a - b;
}

let maxProfit = 0;
let sortedYesterdayStockPrices = [];

function getMaxProfit() {

    for (let earlierTime = 1; earlierTime < yesterdayStockPrices.length; earlierTime++) {
        //this first if statement is to test if the scenario of a stock that lost money all day. the profit will be negative
        if (yesterdayStockPrices[0] > yesterdayStockPrices[earlierTime] ) {
            
            maxProfit = yesterdayStockPrices[yesterdayStockPrices.length-1] - yesterdayStockPrices[yesterdayStockPrices.length-2]
            
        //the else statement is for the scenario where stock increased and decreased throught the day. profit will be positive  
        } else {
            console.log("entered the else section");
            sortedYesterdayStockPrices = yesterdayStockPrices.sort(compareNumber);
            maxProfit = sortedYesterdayStockPrices[sortedYesterdayStockPrices.length-1] - sortedYesterdayStockPrices[0];
        }
    }
    return maxProfit
}

getMaxProfit();