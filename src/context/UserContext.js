import React, {createContext, useReducer, useState} from 'react';
import users from '../data/users';

const initialState = {users};
const actions = {
  createUser(state, action) {
    const user = action.payload;
    user.id = Math.random();

    return {
      ...state,
      users: [...state.users, user],
    };
  },
  updateUser(state, action) {
    const updated = action.payload;
    return {
      ...state,
      users: state.users.map(user => (user.id === updated.id ? updated : user)),
    };
  },
  deleteUser(state, action) {
    const user = action.payload;

    return {
      ...state,
      users: state.users.filter(item => {
        // console.warn(item);
        return item.id != user.id;
      }),
    };
  },
};

export const UserContext = createContext({});

export function UserProvider({children}) {
  function reducer(state, action) {
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
}
