import { calculatePriceChange } from '@/utils/price';
import { useEffect, useRef, useState } from 'react';

const PRICE_THRESHOLD = 25;

const useCardAnimation = (price: number) => {
  const prevPriceRef = useRef(price);
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    if (price === prevPriceRef.current) return;

    const pricePercentageDiff = calculatePriceChange(price, prevPriceRef.current);
    const shakeAnimation = pricePercentageDiff >= PRICE_THRESHOLD
      ? 'symbolCard__shake'
      : '';
    const priceChangeAnimation = price > prevPriceRef.current
      ? 'symbolCard__priceUp'
      : 'symbolCard__priceDown';

    setAnimation('');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimation(`${priceChangeAnimation} ${shakeAnimation}`.trim());
      });
    });
    
    prevPriceRef.current = price;
  }, [price]);

  return animation;
};

export default useCardAnimation;
