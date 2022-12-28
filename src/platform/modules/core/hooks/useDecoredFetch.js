import useFetch from '../../../../core/hooks/useFetch';
import useSnackbar from '../../../../core/contexts/SnackbarContext/useSnackbar';
import { useCallback, useMemo } from 'react';
import useLocale from '../../../../core/contexts/LocaleContext/useLocale';
import CORE_TEXTS from '../constants/texts';
import _ from 'lodash';
function useDecoredFetch() {
  const { success, error } = useSnackbar();
  const { translate } = useLocale();

  const defaultConfig = useMemo(
    () => ({
      successMessage: translate(CORE_TEXTS.GENERIC_SUCCESS),
      showSuccessMessage: true,
      showErrorMessage: true,
      errorMessage: translate(CORE_TEXTS.GENERIC_ERROR),
    }),
    [translate]
  );

  const getHandlers = useCallback(
    (config = {}) => {
      const resultConfig = _.merge(defaultConfig, config);
      return {
        successHandler: () => {
          if (resultConfig?.showSuccessMessage)
            success(resultConfig?.successMessage);
        },
        errorHandler: () => {
          if (resultConfig?.showErrorMessage) error(resultConfig?.errorMessage);
        },
      };
    },
    [defaultConfig, error, success]
  );

  const {
    get: coreGet,
    put: corePut,
    post: corePost,
    del: coreDel,
  } = useFetch();

  const get = useCallback(
    async (url, reqConfig, config) => {
      const handlers = getHandlers(config);
      const result = await coreGet(url, reqConfig, handlers);
      return result;
    },
    [coreGet, getHandlers]
  );

  const post = useCallback(
    async (url, data, reqConfig, config) => {
      const handlers = getHandlers(config);
      const result = await corePost(url, data, reqConfig, handlers);
      return result;
    },
    [corePost, getHandlers]
  );

  const put = useCallback(
    async (url, data, reqConfig, config) => {
      const handlers = getHandlers(config);
      const result = await corePut(url, data, reqConfig, handlers);
      return result;
    },
    [corePut, getHandlers]
  );

  const del = useCallback(
    async (url, reqConfig, config) => {
      const handlers = getHandlers(config);
      const result = await coreDel(url, reqConfig, handlers);
      return result;
    },
    [coreDel, getHandlers]
  );

  return { get, put, post, del };
}

export default useDecoredFetch;
