import React from "react";
import { connect } from "dva";
function CountPage(props) {
  console.log(props);
  return (
    <>
      <h2>{props.count}</h2>
      <button
        key="add"
        onClick={() => {
          props.dispatch({ type: "count/add" });
        }}
      >
        +
      </button>
      <button
        key="minus"
        onClick={() => {
          props.dispatch({ type: "count/minus" });
        }}
      >
        -
      </button>
    </>
  );
}

CountPage.propTypes = {};

export default connect(({ count }) => ({
  count,
}))(CountPage);
