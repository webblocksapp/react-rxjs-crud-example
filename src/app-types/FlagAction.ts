export type FlagAction<T extends string> =
  | { type: `${T}:LISTING`; flag: boolean }
  | { type: `${T}:CREATING`; flag: boolean }
  | { type: `${T}:UPDATING`; flag: boolean }
  | { type: `${T}:REMOVING`; flag: boolean };
