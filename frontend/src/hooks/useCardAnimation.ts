import { calculatePriceChange } from '@/utils/price';
import { useEffect, useRef, useState } from 'react';

const PRICE_THRESHOLD = 25;

const useCardAnimation = (price: number) => {
  const prevPriceRef = useRef(price);
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    if (price === prevPriceRef.current) return;

    const pricePercentageDiff = calculatePriceChange(price, prevPriceRef.current);
    const nextAnimation = () => {
      switch (true) {
        case pricePercentageDiff >= PRICE_THRESHOLD:
          return 'symbolCard__shake';
        default:
          return "";
      }
    };

    setAnimation('');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimation(nextAnimation());
      });
    });
    
    prevPriceRef.current = price;
  }, [price]);

  return animation;
};

export default useCardAnimation;
