import ListItem from '@/components/ListItem';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { formatCurrency } from '@/utils/format';
import { memo, useMemo } from 'react';

type SymbolCardCompanyInfoProps = {
  companyName: string;
  industry: string;
  marketCap: number;
};

const SymbolCardCompanyInfo = ({
  companyName,
  industry,
  marketCap
}: SymbolCardCompanyInfoProps) => {
  const marketCapLabel = useMemo(() => formatCurrency(
    marketCap,
    { notation: 'compact', maximumSignificantDigits: 2 }
  ), [marketCap]);

  return (
    <div className="symbolCardCompanyInfo">
      <ListItem 
        Icon={ <CompanyIcon /> }
        label={ companyName }
        spacing="space-between"
      />
      <ListItem 
        Icon={ <IndustryIcon /> }
        label={ industry }
        spacing="space-between"
      />
      <ListItem 
        Icon={ <MarketCapIcon /> }
        label={ marketCapLabel }
        spacing="space-between"
      />
    </div>
  );
};

export default memo(SymbolCardCompanyInfo);
