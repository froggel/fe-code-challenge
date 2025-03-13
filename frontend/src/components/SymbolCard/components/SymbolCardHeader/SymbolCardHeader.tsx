import './SymbolCardHeader.css';
import { Trend } from "@/lib/types/stockTypes";
import upTrendSrc from '@/assets/up.png';
import downTrendSrc from '@/assets/down.png';

type SymbolCardHeaderProps = {
  id: string;
  trend: Trend;
};

const SymbolCardHeader = ({ id, trend }: SymbolCardHeaderProps) => {
  const getTrendSrc = (trend: Trend) => {
    switch (trend) {
      case 'UP':
        return upTrendSrc;
      case 'DOWN':
        return downTrendSrc;
      default:
        return undefined;
    }
  };

  return (
    <div className="symbolCardHeader">
      <span className="symbolCardHeader__id">{ id }</span>
      {
        trend !== null && (
          <img
            className="symbolCardHeader__trend"
            src={ getTrendSrc(trend) }
            alt={`${ trend?.toLowerCase() } trend`}
          />
        )
      }
    </div>
  );
};

export default SymbolCardHeader;
