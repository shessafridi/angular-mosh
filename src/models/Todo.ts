// Generated by https://quicktype.io

export interface Todo {
  id?: string;
  time: Time;
  body: string;
}

export interface Time {
  seconds: number;
  nanoseconds: number;
}
