/* --- STATE --- */
export interface RegisterState {
  errorMessage: string | null;
  successMessage: string | null;
  newUserInfo: NewUser;
}

export interface NewUser {
  username: string;
  password: string;
  confPassword: string;
  email: string;
}

export type ContainerState = RegisterState;
