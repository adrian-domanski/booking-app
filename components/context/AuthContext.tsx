import React, { createContext, useEffect, useReducer } from 'react';
import { IAuthAction, IAuthState } from '../../utils/types';
import { authReducer } from './reducers/AuthReducer';

interface IAuthContext {
  ctx: IAuthState;
  dispatch: React.Dispatch<IAuthAction>;
}

let initState: IAuthState = {
  isRegisterOpened: false,
  isLoginOpened: false,
};

export const AuthContext = createContext<IAuthContext>(undefined);

const AuthContextProvider = ({ children }) => {
  const [ctx, dispatch] = useReducer(authReducer, initState);

  useEffect(() => {
    if (ctx.isLoginOpened || ctx.isRegisterOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [ctx.isLoginOpened, ctx.isRegisterOpened]);

  return (
    <AuthContext.Provider value={{ ctx, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
