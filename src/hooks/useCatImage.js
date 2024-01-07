import { useEffect, useState } from 'react';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says';

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(' ', 3).join('%20');

    setImageUrl(`${CAT_PREFIX_IMAGE_URL}/${threeFirstWords}`);
  }, [fact]);

  return { imageUrl };
}