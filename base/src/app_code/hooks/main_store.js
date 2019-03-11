import React from 'react';

export const Store = React.createContext();

const initialState = {
  list_cats: [],
  list_saved: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, list_cats: action.payload };
    case 'ADD_SAVE':
      return {
        ...state,
        favourites: [...state.list_saved, action.payload]
      };
    case 'REMOVE_SAVE':
      return {
        ...state,
        favourites: action.payload
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
