import { useReducer, useEffect, useCallback } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null
      };

    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null
      };

    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error
      };

    default:
      throw new Error(`error type is : ${action.type}`);
  }
};

const useAxios = (callback, deps = []) => {
  const [state, dispatch] = useReducer({
    loading: false,
    data: null,
    error: null
  });

  const FETCH_RECIPE_API = useCallback(async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (error) {
      dispatch({ type: 'ERROR', error: error });
    }
  }, [callback]);

  useEffect(() => {
    // if (skip) return;
    FETCH_RECIPE_API();
  }, [FETCH_RECIPE_API, deps]);

  return [state, FETCH_RECIPE_API];
};

export default useAxios;
