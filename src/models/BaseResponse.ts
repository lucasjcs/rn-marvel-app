import { BaseResult } from '@/hooks/BaseResult';

export interface BaseResponse {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results?: BaseResult[]
  }
}
