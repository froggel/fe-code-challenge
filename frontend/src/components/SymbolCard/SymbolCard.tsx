import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import SymbolCardHeader from './components/SymbolCardHeader/SymbolCardHeader';
import SymbolCardPrice from './components/SymbolCardPrice/SymbolCardPrice';
import SymbolCardCompanyInfo from './components/SymbolCardCompanyInfo/SymbolCardCompanyInfo';
import { selectActiveSymbol, selectShowCardInfo } from '@/store/dashboardOptionsSlice';
import useCardAnimation from '@/hooks/useCardAnimation';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const {
    trend,
    companyName,
    industry,
    marketCap
  } = useAppSelector((state) => state.stocks.entities[id]);
  const showCardInfo = useAppSelector(selectShowCardInfo);
  const animation = useCardAnimation(price);
  const activeSymbol = useAppSelector(selectActiveSymbol);

  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <div onClick={handleOnClick} className={
      `symbolCard ${animation} ${
        activeSymbol !== null
          ? activeSymbol === id
            ? 'symbolCard__selected'
            : 'symbolCard__unselected'
          : ''
      }`.trim()
    }>
      <SymbolCardHeader id={ id } trend={ trend } />
      <SymbolCardPrice price={ price } />
      {
        showCardInfo &&
        <SymbolCardCompanyInfo
          companyName={ companyName }
          industry={ industry }
          marketCap={ marketCap }
        />
      }
    </div>
  );
};
export default SymbolCard;
