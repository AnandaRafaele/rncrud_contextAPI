import React, {createContext, useReducer, useState} from 'react';
import users from '../data/users';
import {reducer} from '../reducer';

const initialState = {users};

export const UserContext = createContext({});

export function UserProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
}
