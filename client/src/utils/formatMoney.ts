export default (money: number): string => `€${(money / 1000000).toFixed(2).toString()}M`;
