export function maxProfit(prices: number[]): number {
    let result = 0;
    let min = prices[0];
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        result = Math.max(result, prices[i] - min);
    }
    return result;
}
