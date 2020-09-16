import { useState } from 'react';
import api from '@/services/api';
import { RequestParams } from '@/models/RequestParams';

export interface State<T> {
  data?: T
  loading?: boolean
  error?: string
}

const initialState = {
  data: undefined,
  error: undefined,
  loading: true,
};

const useRest = <T>(url:string): [State<T>, (params: RequestParams) => Promise<void>] => {
  const [state, setState] = useState<State<T>>(initialState);

  const call = async (params: RequestParams) => {
    setState({ ...state, loading: true });
    try {
      const response = await api.get<T>(url, { params });
      setState({
        ...state, data: response.data, loading: false,
      });
    } catch (e) {
      setState({
        ...state, error: e, loading: false,
      });
    }
  };

  return [{ ...state }, call];
};

export { useRest };
