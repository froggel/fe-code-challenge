import ListItem from '@/components/ListItem';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { formatCurrency } from '@/utils/format';

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
  const marketCapLabel = formatCurrency(
    marketCap,
    { notation: 'compact', maximumSignificantDigits: 2 }
  );

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

export default SymbolCardCompanyInfo;
