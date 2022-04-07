import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    //   Dispatchの引数になるアクション{}
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

// Action
export const { setUsers } = usersSlice.actions;

// Slice
export default usersSlice.reducer;
