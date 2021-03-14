import {actions} from '../actions/UserActions';

export function reducer(state, action) {
  const fn = actions[action.type];
  return fn ? fn(state, action) : state;
}
