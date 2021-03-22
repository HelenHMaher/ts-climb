/* --- STATE --- */
export interface ProfileState {
  user: CurrentUser;
  errorMessage: string | null;
}

export interface CurrentUser {
  username: string | null;
  email: string | null;
  registeredAt: string | null;
  lastLoggedIn: string | null;
  _id: string | null;
}

export type ContainerState = ProfileState;
