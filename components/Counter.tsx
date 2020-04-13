import React from "react";
import { connect } from "react-redux";
import { counter } from "store/actions";

const Counter = ({ count, counter }) => {
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => counter(count + 1)}>İncrement</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps, { counter })(Counter);
