import { createActions } from 'reduxsauce';

const instance = createActions({
  searchReset: [],

  searchRequest: ['query'],
  searchFilterRequest: ['filter'],
  searchRequestSuccess: ['payload', 'query'],
  searchRequestFailure: ['error'],
});

export const Types = instance.Types;

export const Actions = instance.Creators;
