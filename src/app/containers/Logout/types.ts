/* --- STATE --- */
export interface LogoutState {
  errorMessage: string | null;
  successMessage: string | null;
}

export type ContainerState = LogoutState;
