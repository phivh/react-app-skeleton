import { API } from '../configs';
import { apiClient } from './fetchHelper';

export const getRepos = (query: string) =>
  apiClient.get(`${API.SEARCH.replace('{{user}}', query)}?per_page=100`);
export const filterRepos = (filter: { query: string; param: string }) =>
  apiClient.get(
    `${API.SEARCH.replace('{{user}}', filter.query)}?type=${filter.param}&per_page=100`
  );
