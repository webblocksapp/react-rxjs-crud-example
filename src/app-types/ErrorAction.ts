export type ErrorAction<T extends string> =
  | { type: `${T}:ERROR_ON_LIST`; message: string }
  | { type: `${T}:ERROR_ON_CREATE`; message: string }
  | { type: `${T}:ERROR_ON_UPDATE`; message: string }
  | { type: `${T}:ERROR_ON_REMOVE`; message: string };
