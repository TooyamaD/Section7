const Insert = (props) => {
  const { Mtodo, Todo, setMtodo, setTodo, disabled } = props;
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
  };

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
      <div style={style}>
        <input
          disabled={disabled}
          placeholder="TODOを入力"
          onChange={enterText}
          value={Todo}
        ></input>
        <button disabled={disabled} onClick={insert}>
          追加
        </button>
      </div>
    </>
  );
};

export default Insert;
