import React from "react";
import { useSelector } from "react-redux";
import { useMoves } from "../../hooks";
import { ConnectHole } from "./ConnectHole";

export const ConnectColumn = React.memo(({ column, id }) => {

  const activePlayer = useSelector((store) => store.activePlayer);
  const { winner, tie } = useSelector((store) => store.board);
  const { onSelectColumn } = useMoves();

  return (
    <button
      disabled={winner || tie ? true : false}
      onClick={ () => onSelectColumn(column, id, activePlayer)}
      className="column"
    >
      {column.map((value, i) => (
        <ConnectHole key={i} value={value} i={id} j={i} />
      ))}
    </button>
  );
});
