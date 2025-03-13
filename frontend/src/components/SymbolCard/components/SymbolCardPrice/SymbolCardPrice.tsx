import './SymbolCardPrice.css';
import { formatCurrency } from '@/utils/format';

type SymbolCardPriceProps = {
  price?: number;
}

const SymbolCardPrice = ({ price }: SymbolCardPriceProps) => {
  return (
    <div className="symbolCardPrice">
      <span className="symbolCardPrice__text">Price:</span>
      <span className="symbolCardPrice__amount">{ formatCurrency(price) }</span>
    </div>
  );
}

export default SymbolCardPrice;
