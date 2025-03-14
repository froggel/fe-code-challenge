import './desktopInfo.css';
import HighlightSymbols from '@/components/HighlightedSymbols';
import TopHeadlines from '@/components/TopHeadlines';
import { HTMLAttributes, memo } from 'react';

const DesktopInfo = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`desktopInfo ${className}`}>
      <HighlightSymbols />
      <TopHeadlines />
    </div>
  );
};

export default memo(DesktopInfo);
