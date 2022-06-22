import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}
function Left3(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Left3</h1>
      <button
        onClick={() => {
          dispatch({ type: "UP", step: 3 });
        }}
      >
        +
      </button>
    </div>
  );
}
function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3(props) {
  //   < 애플리케이션에 전역적으로 store를 공급하고, 필요한 곳에서 가져다 쓰는 방법 >

  // - App 컴포넌트를 감싸고 있는 최상위 파일(예 : index.js) 에서, Provider 를 통해 App 컴포넌트를 감싸주고, store를 공급한다.
  // (그 store을 따로 정의한 파일의 코드는 useReducer 함수와 매우 비슷하다. 내 실습 기준에서는 store.js 파일 ( https://github.com/shinbian11/redux-practice )이다.)

  // - 필요한 하위 컴포넌트에서, store 내부의 데이터가 필요하다면, 땡겨쓰면 된다. 그 방법은?

  // => useSelector 라는 훅을 하위 컴포넌트에서 import 해서, store에서 원하는 특정 데이터만 가져올 수 있다. (이때, 선택한 그 데이터가 바뀌었을 때만 해당 컴포넌트가 리렌더링 된다.)

  // - 이 방법을 사용하면, useReducer의 코드들은 모두 필요 없어진다!
  // - store의 특정 데이터를 하위 컴포넌트에서 가져다가 쓰려면 useSelector를 이용하면 된다. (store에 있는 데이터들 중에서 가져다가 쓸 데이터를 select 한다!)
  const value = useSelector((state) => {
    return state.value;
  });
  return (
    <div>
      <h1>Right3</h1>
      {value}
    </div>
  );
}
export default function App() {
  return (
    <div id="app">
      <h1>Root</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Left1></Left1>
        <Right1></Right1>
      </div>
    </div>
  );
}
