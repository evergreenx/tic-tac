
import "./Board.scss";
import BoxItem from "../BoxItem";
function Index() {
  return (
    <div className="board">
      {/* game board-row */}
      <div class="board-row">
        <BoxItem className={"border-bottom-right "}  />
        <BoxItem className={"border-bottom-right "} />
        <BoxItem className={"border-right"} />
      </div>

      {/* game board-row */}

      <div class="board-row">
        <BoxItem className={"border-bottom-right "}  />
        <BoxItem className={"border-bottom-right "} />
        <BoxItem className={"border-right"} />
      </div>

      {/* game board-row */}

      <div class="board-row">
        <BoxItem className={"border-bottom"} />
        <BoxItem className={"border-bottom"} />
        <BoxItem className={""} />
      </div>
    </div>
  );
}

export default Index;
