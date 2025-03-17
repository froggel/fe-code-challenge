const calculatePriceChange = (price: number, prevPrice: number) => Math.abs(
  ((price - prevPrice) / prevPrice) * 100
);

export { calculatePriceChange };
