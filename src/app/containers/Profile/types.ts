/* --- STATE --- */
export interface ProfileState {
  user: CurrentUser;
  errorMessage: string | null;
}

export interface CurrentUser {
  username: string | null;
  email: string | null;
}

export type ContainerState = ProfileState;
