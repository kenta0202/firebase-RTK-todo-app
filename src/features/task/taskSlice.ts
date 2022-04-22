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
    // Modalのフラグ
    handleModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    // どのtaskを選択しているか
    selectTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    // taskの編集
    editTask: (state, action) => {
      const tasks = state.tasks.reduce((acc: TTask[], v) => {
        if (v.id == action.payload.id) {
          acc.push(action.payload);
        } else {
          acc.push(v);
        }
        return acc;
      }, []);
      state.tasks = tasks;
    },
    // task完了未完了のチェックを変更
    completeTask: (state, action) => {
      const task = state.tasks.find((t) => {
        return t.id === action.payload.id;
      });
      if (task) {
        task.completed = !task.completed;
      }
    },
    // taskの削除
    deleteTask: (state, action) => {
      // 指定したtask以外で新しくstate.tasksの配列を作成し、直している
      state.tasks = state.tasks.filter((t) => {
        return t.id !== action.payload.id;
      });
    },
  },
});

// Stateを引数にStateの指定したプロパティの値を切り出す
export const selectTasks = (state: TRootState): TTaskState["tasks"] =>
  state.task.tasks;
export const selectIsModalOpen = (
  state: TRootState
): TTaskState["isModalOpen"] => state.task.isModalOpen;
export const selectedSelectTask = (
  state: TRootState
): TTaskState["selectedTask"] => state.task.selectedTask;

// Actionを切り出す
export const {
  createTask,
  handleModalOpen,
  selectTask,
  editTask,
  completeTask,
  deleteTask,
} = taskSlice.actions;

// Recuderを切り出す
export default taskSlice.reducer;
