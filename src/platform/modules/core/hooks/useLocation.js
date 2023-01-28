import { useMemo } from 'react';
import { useLocation as useLocationRouter } from 'react-router-dom';
function useLocation() {
  const { search } = useLocationRouter();

  const queryParams = useMemo(() => {
    const searchParams = new URLSearchParams(search);
    const result = {};
    searchParams.forEach((param, key) => {
      result[key] = param;
    });
    return result;
  }, [search]);

  return { queryParams };
}

export default useLocation;
