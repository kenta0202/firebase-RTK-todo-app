export type RootState = {
  // sliceの一つ
  counter: countStateType;
};

// そのcounterSliceに設定したinitialStateの
export type countStateType = {
  count: number;
};
