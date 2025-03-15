import './symbolCard.css';
import { useAppSelector } from '@/hooks/redux';
import SymbolCardHeader from './components/SymbolCardHeader/SymbolCardHeader';
import SymbolCardPrice from './components/SymbolCardPrice/SymbolCardPrice';
import SymbolCardCompanyInfo from './components/SymbolCardCompanyInfo/SymbolCardCompanyInfo';
import { selectShowCardInfo } from '@/store/dashboardOptionsSlice';

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

  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <div onClick={handleOnClick} className="symbolCard">
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
