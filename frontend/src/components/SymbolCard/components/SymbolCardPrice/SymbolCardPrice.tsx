import { memo, useMemo } from 'react';
import './SymbolCardPrice.css';
import { formatCurrency } from '@/utils/format';

type SymbolCardPriceProps = {
  price?: number;
}

const SymbolCardPrice = ({ price }: SymbolCardPriceProps) => {
  const formattedPrice = useMemo(() => formatCurrency(price), [price]);

  return (
    <div className="symbolCardPrice">
      <span className="symbolCardPrice__text">Price:</span>
      <span className="symbolCardPrice__amount">{ formattedPrice }</span>
    </div>
  );
}

export default memo(SymbolCardPrice);
