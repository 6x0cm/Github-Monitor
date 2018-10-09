import request from '@/utils/request';
import API_ROOT from '../constants';

export async function queryLeakageLists({ page = 1, pageSize = 10 }) {
  return request(`${API_ROOT}/api/monitor/result.json?&page=${page}&page_size=${pageSize}`, {
    credentials: 'same-origin',
  });
}

export async function wait() {
  return request(`${API_ROOT}`);
}