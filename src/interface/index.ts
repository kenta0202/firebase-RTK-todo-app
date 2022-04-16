export type RootState = {
  // sliceの一つ
  counter: countStateType;
};

//Counter
export type countStateType = {
  count: number;
};
