/* --- STATE --- */
export interface LoginState {
  errorMessage: string | null;
  successMessage: string | null;
  userInfo: User;
}

export interface User {
  username: string;
  password: string;
}

export interface LoginSuccess {
  token: string;
  msg: string;
}

export type ContainerState = LoginState;
