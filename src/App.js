import React from "react";
import styles from "./app.module.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  const getCash = () => {
    dispatch({ type: "GET_CASH", payload: Math.floor(Math.random() * 100)
   });
  };

  const addCash = () => {
    dispatch({ type: "ADD_CASH", payload: Math.floor(Math.random() * 100)
  });
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <button onClick={() => addCash()}>Добавить</button>
        <button onClick={() => getCash()}>Уменьшить</button>
      <div className={styles.counter}>{cash}</div>
      </div>
    </div>
  );
}

export default App;
