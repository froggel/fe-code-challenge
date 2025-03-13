import './symbolCard.css';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { useAppSelector } from '@/hooks/redux';
import ListItem from '@/components/ListItem';
import SymbolCardHeader from './components/SymbolCardHeader/SymbolCardHeader';
import SymbolCardPrice from './components/SymbolCardPrice/SymbolCardPrice';
import SymbolCardCompanyInfo from './components/SymbolCardCompanyInfo/SymbolCardCompanyInfo';

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
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <div onClick={handleOnClick} className="symbolCard">
      <SymbolCardHeader id={ id } trend={ trend } />
      <SymbolCardPrice price={ price } />
      <SymbolCardCompanyInfo
        companyName={companyName}
        industry={industry}
        marketCap={marketCap}
      />
    </div>
  );
};
export default SymbolCard;
