import axios from 'axios';
import { useCallback } from 'react';
import FETCH_ERROR_TYPES from '../constants/fetchErrorTypes';
import _ from 'lodash';

function useFetch() {
  const axiosHandler = useCallback(
    async (axiosFunction, successHandler, errorHandler) => {
      try {
        const response = await axiosFunction();

        if (_.isFunction(successHandler)) successHandler(response);
        return response;
      } catch (error) {
        const result = {
          error,
          type: null,
        };
        if (error.response) {
          result.type = FETCH_ERROR_TYPES.SERVER;
        } else if (error.request) {
          result.type = FETCH_ERROR_TYPES.CLIENT;
        } else {
          result.type = FETCH_ERROR_TYPES.OTHER;
        }

        if (_.isFunction(errorHandler)) {
          errorHandler(result);
        }
      }
    },
    []
  );

  const get = useCallback(
    async (url, config, handlers) => {
      return await axiosHandler(
        async () => await axios.get(url, config),
        handlers?.successHandler,
        handlers?.errorHandler
      );
    },
    [axiosHandler]
  );

  const post = useCallback(
    async (url, data, config, handlers) => {
      return await axiosHandler(
        async () => await axios.post(url, data, config),
        handlers?.successHandler,
        handlers?.errorHandler
      );
    },
    [axiosHandler]
  );

  const put = useCallback(
    async (url, data, config, handlers) => {
      return await axiosHandler(
        async () => await axios.put(url, data, config),
        handlers?.successHandler,
        handlers?.errorHandler
      );
    },
    [axiosHandler]
  );

  const del = useCallback(
    async (url, config, handlers) => {
      return await axiosHandler(
        async () => await axios.delete(url, config),
        handlers?.successHandler,
        handlers?.errorHandler
      );
    },
    [axiosHandler]
  );

  return { get, post, put, del };
}

export default useFetch;
