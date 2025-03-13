const formatCurrency = (price?: number) => {
  if (price === undefined) return '--';

  return Intl.NumberFormat("en", {
    currency: 'USD',
    style: 'currency',
    maximumFractionDigits: 0
  }).format(price);
}

export { formatCurrency };
