import { configureStore } from "@reduxjs/toolkit";
import counterUp from "./countUpSlice";
import countDown from "./countDownSlice";
// configureStore 를 통해 여러 slice(작은 store)들을 한데 모아서 정리한다!
const store = configureStore({
  reducer: {
    // 실제 이 countUp, countDown 속성명이 redux devtools 를 실행시켰을 때의 이름이다.
    countUp: counterUp.reducer, // countUpSlice.js에서는 createSlice 내부의 객체의 속성명은 reducers 지만, 여기서는 reducer로 받으면 된다. 하나의 규칙이다!
    countDown: countDown.reducer, // countDownSlice.js에서는 createSlice 내부의 객체의 속성명은 reducers 지만, 여기서는 reducer로 받으면 된다. 하나의 규칙이다!
  },
});
export default store;
