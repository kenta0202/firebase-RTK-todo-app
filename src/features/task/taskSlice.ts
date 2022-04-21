import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TRootState } from "../../app/store";

export type TTask = {
  id: number;
  title: string;
  completed: boolean;
};
//taskのStateの型
export type TTaskState = {
  //   taskが何個あるのかを管理する
  idCount: number;
  // storeに保存するtaskの一覧
  tasks: TTask[];
  // taskのtitleを編集する際にどのtaskが選択されていか
  selectedTask: { id: number; title: string; completed: boolean };
  // Modalを開くか閉じるかのフラグ
  isModalOpen: boolean;
};

// Stateの初期値
const initialState: TTaskState = {
  idCount: 1,
  tasks: [{ id: 1, title: "Task A", completed: false }],
  selectedTask: { id: 0, title: "", completed: false },
  isModalOpen: false,
};

// returnは使ってはいけない
//Slice:actionとreducerのロジックを統合したもののこと
export const taskSlice = createSlice({
  // Reducer名
  //   actionTypeを生成する際のprefixになる(type:name/xxx)
  name: "task",
  // 初期値
  initialState,
  //   Reducers
  reducers: {
    // Stateを返す
    // 自動的にtype:"task/createTask"
    createTask: (state, action: PayloadAction<string>) => {
      state.idCount++;
      const newTask: TTask = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
  },
});

// Stateを引数にStateのcountプロパティの値を切り出す
export const selectTask = (state: TRootState): TTaskState["tasks"] =>
  state.task.tasks;

// Actionを切り出す
export const { createTask } = taskSlice.actions;

// Recuderを切り出す
export default taskSlice.reducer;
