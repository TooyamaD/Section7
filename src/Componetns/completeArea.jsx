export const CompleteArea = (porps) => {
  const { Ktodo, Mtodo, setMtodo, setKtodo } = porps;
  const back = (index) => {
    const newKtodo = [...Ktodo];
    newKtodo.splice(index, 1);
    const newMtodo = [...Mtodo, Ktodo[index]];
    setKtodo(newKtodo);
    setMtodo(newMtodo);
  };

  return (
    <>
      <div className="complete-area ">
        <div className="title">完了したTODO</div>
        <ul>
          {Ktodo.map((todo, index) => (
            <div className="list-row" key={index}>
              <li>{todo}</li>
              <button
                onClick={() => {
                  back(index);
                }}
              >
                戻す
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
