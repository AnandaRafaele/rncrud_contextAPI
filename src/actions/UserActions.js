export const actions = {
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
