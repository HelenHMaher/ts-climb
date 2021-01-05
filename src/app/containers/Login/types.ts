/* --- STATE --- */
export interface LoginState {
  errorMessage: string | null;
}

export interface User {
  username: string;
  password: string;
}

export type ContainerState = LoginState;
