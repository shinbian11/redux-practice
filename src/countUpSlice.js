import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "countUp",
  initialState: {
    value: 0,
  },
  reducers: {
    up: (state, action) => {
      // 값을 변경(가변)하는 것처럼 작성해도, toolkit 내부에서 알아서 immutable 하게 처리해준다. (여기서는 return 하면 안됨, 불변성 생각할 필요 없음!)
      // 내부적으로 immerjs 를 통해서 자동적으로 처리해준다
      state.value = state.value + action.payload;
    },
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default slice;
export const { up } = slice.actions;
