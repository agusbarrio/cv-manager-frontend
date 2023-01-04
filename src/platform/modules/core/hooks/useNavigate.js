import { useCallback } from 'react';
import { useNavigate as useNavigateRouter } from 'react-router-dom';

function useNavigate() {
  const navigate = useNavigateRouter();
  const go = useCallback(
    (...p) => {
      navigate(...p);
    },
    [navigate]
  );
  return { go };
}

export default useNavigate;
