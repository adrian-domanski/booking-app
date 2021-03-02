export interface IAuthState {
  isRegisterOpened: boolean;
  isLoginOpened: boolean;
}

type IAuthActionTypes = 'TOGGLE_REGISTER_MODAL' | 'TOGGLE_LOGIN_MODAL';

export interface IAuthAction {
  type: IAuthActionTypes;
  payload?: any;
}
