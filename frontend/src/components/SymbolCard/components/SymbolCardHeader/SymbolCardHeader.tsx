import './SymbolCardHeader.css';
import { Trend } from "@/lib/types/stockTypes";
import upTrendSrc from '@/assets/up.png';
import downTrendSrc from '@/assets/down.png';
import { memo, useMemo } from 'react';

type SymbolCardHeaderProps = {
  id: string;
  trend: Trend;
};

const SymbolCardHeader = ({ id, trend }: SymbolCardHeaderProps) => {
  const trendSrc = useMemo(() => {
    switch (trend) {
      case 'UP':
        return upTrendSrc;
      case 'DOWN':
        return downTrendSrc;
      default:
        return undefined;
    }
  }, [trend]);

  return (
    <div className="symbolCardHeader">
      <span className="symbolCardHeader__id">{ id }</span>
      {
        trend !== null && (
          <img
            className="symbolCardHeader__trend"
            src={ trendSrc }
            alt={`${ trend?.toLowerCase() } trend`}
          />
        )
      }
    </div>
  );
};

export default memo(SymbolCardHeader);
