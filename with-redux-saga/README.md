# Github Search AZ
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> The AZ here is alphabet, we are able to search from A to Z.

## Objective

The app also knows as a small Github search application with a specific search per user. The user are able to filter the repository by owner or member.

## Tech Stack

Majors:

- Nodejs
- Typescript
- Javascript

Library:

- Redux
- Redux Saga
- Axios

Test:

- Jest 
- Cypress
 

## How can run the app

[Live demo](https://github-search-az.herokuapp.com/)

If you would like run the app under local try with these step:

```
yarn && yarn dev
```

## Architecture explains

### Folder structure

```
Root/
    src/
        components/
        configs/
        factories/
        pages/
        services/
        store/
        styles/
        App.tsx
        index.tsx
```


### Search and filter functionality

1. Search functionality

The story is the user wants to search all repositories of specific account.

When opening the application via a web browser the user can see one search box that allows typing something to search. After type something when the action that the user stops at the end of a keyword, 1 action will be called and show the list of repos under the content section.

This time we will talk about technically behind search features. By using library redux and redux-saga middleware that handles the request by received keyword that provided on search input.

Flows:

- When the user searches something one action will be called
```
dispatch(Actions.searchRequest(query))
```

- The cycle of redux saga will be trigerred 
```
takeLatest(SearchTypes.SEARCH_REQUEST, SearchSagas.search)
```

- With successful call the api will be reponsed a data that contains list of repos, then in this step we will save the keyword (`query`) that user searched for filter feature.
```
yield put(Actions.searchRequestSuccess(data, query)); 
```

2. Filter functionality

Based on the successful list received above, there is a filter that allows user filter repos with by `all`, `owner`, `member`

Flows:

- When the user clicks on the filter on of pill on filter area, one action will be called. In this step, we will have 2 arguments `query` aka keyword that saved and `param` is a filter value.
```
dispatch(Actions.searchFilterRequest({ query, param }));
```

- The cycle of redux-saga will be triggered 
```
takeLatest(SearchTypes.SEARCH_FILTER_REQUEST, SearchSagas.filter)
```

- With the same way search above.
```
yield put(Actions.searchRequestSuccess(data, filter.query)); 
```


### Test and coverage

In this step, we would like to check our functionality that aligns with our way. So, we using Jest library here to help us with unit testing.
 
The command to execute the test:

```
yarn test
```
The command to execute test and coverage:

```
yarn coverage
```

