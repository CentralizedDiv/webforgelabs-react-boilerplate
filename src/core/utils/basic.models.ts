export type UUID = string;
export interface Action<T = undefined> {
  readonly type: string;
  readonly payload?: T;
}
