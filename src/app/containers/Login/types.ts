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

export type ContainerState = LoginState;
