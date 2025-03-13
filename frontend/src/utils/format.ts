const formatCurrency = (
  price: number | undefined,
  options: Intl.NumberFormatOptions = {}
) => {
  if (price === undefined) return '--';

  const defaultOptions: Intl.NumberFormatOptions = {
    currency: 'USD',
    style: 'currency',
    maximumFractionDigits: 0
  };

  return Intl.NumberFormat("en", {
    ...defaultOptions,
    ...options
  }).format(price);
}

export { formatCurrency };
