import { IAuthAction, IAuthState } from '../../../utils/types';

export const authReducer = (state: IAuthState, action: IAuthAction) => {
  switch (action.type) {
    case 'TOGGLE_REGISTER_MODAL':
      return {
        ...state,
        isRegisterOpened: !state.isRegisterOpened,
      };
    case 'TOGGLE_LOGIN_MODAL':
      return {
        ...state,
        isLoginOpened: !state.isLoginOpened,
      };
    default:
      return state;
  }
};
