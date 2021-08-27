const Insert = (props) => {
  const { Mtodo, Todo, setMtodo, setTodo } = props;
  const insert = () => {
    const newMtodo = [...Mtodo, Todo];
    setMtodo(newMtodo);
    setTodo("");
  };

  const enterText = (event) => {
    setTodo(event.target.value);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          onChange={enterText}
          value={Todo}
        ></input>
        <button onClick={insert}>追加</button>
      </div>
    </>
  );
};

export default Insert;
