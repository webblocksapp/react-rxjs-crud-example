export type ErrorAction<T extends string> =
  | { type: `${T}:LIST_FAILED`; message: string }
  | { type: `${T}:CREATE_FAILED`; message: string }
  | { type: `${T}:UPDATE_FAILED`; message: string }
  | { type: `${T}:REMOVE_FAILED`; message: string };
