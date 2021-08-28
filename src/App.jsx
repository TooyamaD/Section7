import { useState } from "react";
import Insert from "./Componetns/insert";
import "./styles.css";
import "./Componetns/incompleteArea";
import { IncompleteArea } from "./Componetns/incompleteArea";
import { CompleteArea } from "./Componetns/completeArea";

export default function App() {
  const [Todo, setTodo] = useState("");
  const [Mtodo, setMtodo] = useState([]);
  const [Ktodo, setKtodo] = useState([]);

  return (
    <>
      <Insert
        Mtodo={Mtodo}
        Todo={Todo}
        setMtodo={setMtodo}
        setTodo={setTodo}
        disabled={Mtodo.length >= 5}
      />
      {Mtodo.length >= 5 && <p>登録できるたTodoは5個までです(^_-)-☆</p>}
      <IncompleteArea
        Mtodo={Mtodo}
        Ktodo={Ktodo}
        setKtodo={setKtodo}
        setMtodo={setMtodo}
      />
      <CompleteArea
        Mtodo={Mtodo}
        Ktodo={Ktodo}
        setKtodo={setKtodo}
        setMtodo={setMtodo}
      />
    </>
  );
}
