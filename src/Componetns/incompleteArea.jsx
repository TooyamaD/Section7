export const IncompleteArea = (props) => {
  const { Mtodo, Ktodo, setMtodo, setKtodo } = props;
  const Delete = (index) => {
    const newMtodo = [...Mtodo];
    newMtodo.splice(index, 1);
    setMtodo(newMtodo);
  };

  const complete = (index) => {
    const newMtodo = [...Mtodo];
    newMtodo.splice(index, 1);
    const newKtodo = [...Ktodo, Mtodo[index]];
    setMtodo(newMtodo);
    setKtodo(newKtodo);
  };
  return (
    <div className="incomplete-area">
      <div className="title">未完了のTODO</div>
      <ul>
        {Mtodo.map((todo, index) => (
          <div className="list-row " key={index}>
            <li>{todo}</li>
            <button onClick={() => complete(index)}>完了</button>
            <button
              onClick={() => {
                Delete(index);
              }}
            >
              削除
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};
