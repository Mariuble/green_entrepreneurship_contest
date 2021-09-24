export default (money: number): string => `$${(money / 1000).toFixed(2).toString()}k`;
